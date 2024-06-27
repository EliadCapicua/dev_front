import { router } from "expo-router";
import { useGetProducts } from "../queries/products";

export const useHomeScreen = () => {
  const { data: products, isLoading } = useGetProducts();

  const onAddProduct = () => {
    router.push("/register");
  };

  return {
    productsListProps: {
      products,
      isLoading,
    },
    searchInputProps: {
      placeholder: "Search...",
    },
    onAddProduct,
  };
};
