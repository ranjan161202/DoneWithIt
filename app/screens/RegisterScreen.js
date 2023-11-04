import { StyleSheet } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/forms";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
  const registerApi = useApi(authApi.register);
  const loginApi = useApi(authApi.login);
  const [registerFailed, setRegisterFailed] = useState(false);
  const auth = useAuth();

  const handleSubmit = async ({ name, email, password }) => {
    const result = await registerApi.request(name, email, password);
    if (!result.ok) return setRegisterFailed(true);
    setRegisterFailed(false);
    const firstLogin = await loginApi.request(email, password);
    auth.register(firstLogin.data);
    console.log("registered");
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <>
            <AppErrorMessage
              error="A user with the given email already exists."
              visible={registerFailed}
            />
            <AppFormField
              autoCapitilize="none"
              autoCorrect={false}
              icon="contacts"
              keyboardType="default"
              name="name"
              placeholder="Name"
            />
            <AppFormField
              autoCapitilize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              textContentType="emailAddress"
            />
            <AppFormField
              autoCapitilize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <SubmitButton title="Register" />
          </>
        </AppForm>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default RegisterScreen;
