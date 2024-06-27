import { Products } from "@/types/products";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { ProductItem } from "./ProductItem";

export interface ProductsListProps {
  products: Products[] | undefined;
  isLoading: boolean;
}

export const ProductsList = (props: ProductsListProps) => {
  return (
    <>
      {props.isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={styles.container}>
          <FlatList
            data={props.products}
            renderItem={({ item }) => <ProductItem product={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
