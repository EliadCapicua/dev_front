import { router, useFocusEffect } from "expo-router";
import { useGetProducts } from "../queries/products";
import { useCallback, useState } from "react";
import { Products } from "@/types/products";

export const useHomeScreen = () => {
  const [search, setSearch] = useState("");

  useFocusEffect(
    useCallback(() => {
      loadCheck();
      return () => {};
    }, [])
  );

  const loadCheck = () => {
    if (search) {
      setSearch("");
    }
    refetch();
  };

  const { refetch, data: products, isLoading } = useGetProducts();

  const onAddProduct = () => {
    router.push("/register");
  };

  const onProductPress = (product: Products) => {
    router.push({
      pathname: "/product",
      params: { product: JSON.stringify(product) },
    });
  };

  return {
    productsListProps: {
      products,
      isLoading,
      onProductPress,
    },
    searchInputProps: {
      placeholder: "Search...",
      value: search,
      onChangeText: (text: string) => {
        setSearch(text);
      },
    },
    onAddProduct,
  };
};
