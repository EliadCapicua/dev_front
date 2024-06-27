import { router, useFocusEffect } from "expo-router";
import { useGetProducts } from "../queries/products";
import { useCallback, useState } from "react";
import { Products } from "@/types/products";

export const useHomeScreen = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<Products[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);

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

  const { refetch, isLoading } = useGetProducts({
    onSuccess: (result) => {
      setProducts(result);
      setFilteredProducts(result);
    },
  });

  const onAddProduct = () => {
    router.push({ pathname: "/register", params: { mode: "add" } });
  };

  const onProductPress = (product: Products) => {
    router.push({
      pathname: "/product",
      params: { product: JSON.stringify(product) },
    });
  };

  const handlerSearch = (text: string) => {
    setSearch(text);
    if (products.length === 0) return;
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return {
    productsListProps: {
      products: filteredProducts,
      isLoading,
      onProductPress,
    },
    searchInputProps: {
      placeholder: "Search...",
      value: search,
      onChangeText: handlerSearch,
    },
    onAddProduct,
  };
};
