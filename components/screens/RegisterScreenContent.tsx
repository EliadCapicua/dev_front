import { View, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { FormSchema } from "@/hooks/screens/useRegisterScreen";
import { TextComponent } from "../atom/TextInput";
import { Button } from "../atom/Button";
import { DatePicker } from "../atom/DatePicker";
import { setLocale } from "yup";
setLocale({
  number: {
    min: "El ${path} debe ser mayor a ${min}",
  },
});

interface RegisterScreenContentProps {
  formProps: {
    validationSchema: Yup.ObjectSchema<FormSchema>;
    initialValues: FormSchema;
    onSubmit: (values: FormSchema, actions: FormikHelpers<FormSchema>) => void;
    isLoading?: boolean;
  };
}

export const RegisterScreenContent = (props: RegisterScreenContentProps) => {
  return (
    <View style={styles.container}>
      <ThemedText type="subtitle">Formulario de Registro</ThemedText>
      <Formik {...props.formProps}>
        {(form) => (
          <View style={styles.form}>
            <View>
              <TextComponent
                label="ID"
                placeholder="ID"
                value={form.initialValues["id"]}
                onChangeText={form.handleChange("id")}
                isValid={!form.errors["id"]}
                error={form.errors["id"]}
              />
              <TextComponent
                label="Nombre"
                placeholder="Nombre"
                value={form.initialValues["name"]}
                onChangeText={form.handleChange("name")}
                isValid={!form.errors["name"]}
                error={form.errors["name"]}
              />
              <TextComponent
                label="Descripción"
                placeholder="Descripción"
                value={form.initialValues["description"]}
                onChangeText={form.handleChange("description")}
                isValid={!form.errors["description"]}
                error={form.errors["description"]}
              />
              <TextComponent
                label="Logo"
                placeholder="Logo"
                value={form.initialValues["logo"]}
                onChangeText={form.handleChange("logo")}
                isValid={!form.errors["logo"]}
                error={form.errors["logo"]}
              />
              <DatePicker
                label="Fecha de lanzamiento"
                placeholder="Fecha de lanzamiento"
                value={form.initialValues["date_release"]}
                onChange={form.handleChange("date_release")}
                isValid={!form.errors["date_release"]}
                error={form.errors["date_release"]}
              />
              <DatePicker
                label="Fecha de revisión"
                placeholder="Fecha de revisión"
                value={form.initialValues["date_revision"]}
                onChange={form.handleChange("date_revision")}
                isValid={!form.errors["date_revision"]}
                error={form.errors["date_revision"]}
              />
            </View>

            <View style={styles.buttons}>
              <Button
                text="Enviar"
                onPress={() => form.handleSubmit()}
                isLoading={props.formProps.isLoading}
                isDisabled={
                  !form.isValid ||
                  form.getFieldProps("date_revision").value === "" ||
                  form.getFieldProps("date_release").value === "" ||
                  form.getFieldProps("description").value === "" ||
                  form.getFieldProps("id").value === "" ||
                  form.getFieldProps("logo").value === "" ||
                  form.getFieldProps("name").value === ""
                }
              />
              <View style={{ height: 8 }} />
              <Button
                text="Reiniciar"
                onPress={() => {
                  form.resetForm();
                  form.setValues(props.formProps.initialValues);
                }}
                isSecondary
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    padding: 4,
  },
  form: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 16,
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
