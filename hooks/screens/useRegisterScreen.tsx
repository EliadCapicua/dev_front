import * as Yup from "yup";
import { useCreateProduct, useUpdateProduct } from "../mutations/products";
import { router, useLocalSearchParams } from "expo-router";
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
  // logo: Yup.string().required("El logo es requerido"), TODO: implement take a photo or upload a file
  date_release: Yup.string().required("La fecha de lanzamiento es requerida"),
  date_revision: Yup.string().required("La fecha de revisión es requerida"),
});

export type FormSchema = Yup.InferType<typeof validationSchema>;

interface RegisterScreenContentParams {
  product: string;
  mode: string;
  [key: string]: string;
}

export const useRegisterScreen = () => {
  const { product, mode } = useLocalSearchParams<RegisterScreenContentParams>();

  const INITIAL_VALUES = {
    id: product ? JSON.parse(product).id : "",
    name: product ? JSON.parse(product).name : "",
    description: product ? JSON.parse(product).description : "",
    // logo: "",
    date_release: product ? JSON.parse(product).date_release : "",
    date_revision: product ? JSON.parse(product).date_revision : "",
  };

  const { mutateAsync: createProduct, isPending: isCreatingProduct } =
    useCreateProduct();
  const { mutateAsync: updateProduct, isPending: isUpdatingProduct } =
    useUpdateProduct();

  const onSubmit = async (values: FormSchema) => {
    if (mode === "edit") {
      await updateProduct(values);
      router.push("/");
      return;
    }
    await createProduct(values);
    router.push("/");
  };

  return {
    formProps: {
      validationSchema,
      initialValues: INITIAL_VALUES,
      onSubmit,
      isLoading: isCreatingProduct,
      mode: mode || "add",
    },
  };
};
