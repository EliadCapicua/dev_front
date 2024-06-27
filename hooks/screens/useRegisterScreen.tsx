import * as Yup from "yup";
import { useCreateProduct } from "../mutations/products";
import { router } from "expo-router";
import { setLocale } from "yup";
setLocale({
  number: {
    min: "El ${path} debe ser mayor a ${min}",
  },
});

const validationSchema = Yup.object().shape({
  id: Yup.string().required("El id es requerido"),
  name: Yup.string().required("El nombre es requerido").min(6).max(100),
  description: Yup.string()
    .required("La descripción es requerida")
    .min(10)
    .max(200),
  logo: Yup.string().required("El logo es requerido"),
  date_release: Yup.string().required("La fecha de lanzamiento es requerida"),
  date_revision: Yup.string().required("La fecha de revisión es requerida"),
});

export type FormSchema = Yup.InferType<typeof validationSchema>;

export const useRegisterScreen = () => {
  const INITIAL_VALUES = {
    id: "",
    name: "",
    description: "",
    logo: "",
    date_release: "",
    date_revision: "",
  };

  const { mutateAsync: createProduct, isPending: isCreatingProduct } =
    useCreateProduct();

  const onSubmit = async (values: FormSchema) => {
    await createProduct(values);
    router.push("/");
  };

  return {
    formProps: {
      validationSchema,
      initialValues: INITIAL_VALUES,
      onSubmit,
      isLoading: isCreatingProduct,
    },
  };
};
