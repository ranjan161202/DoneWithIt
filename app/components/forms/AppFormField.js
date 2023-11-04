import { StyleSheet } from "react-native";
import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import AppErrorMessage from "./AppErrorMessage";

const AppFormField = ({ name, width, ...otherProps }) => {
  const { errors, setFieldValue, setFieldTouched, touched, values } =
    useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        {...otherProps}
        width={width}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

const styles = StyleSheet.create({});

export default AppFormField;
