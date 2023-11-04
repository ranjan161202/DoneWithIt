import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import AppErrorMessage from "./AppErrorMessage";

const AppFormPicker = ({
  items,
  name,
  numberOfColumns,
  placeholder,
  PickerItemComponent,
  width,
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;

const styles = StyleSheet.create({});
