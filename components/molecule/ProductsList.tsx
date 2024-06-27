import { Products } from "@/types/products";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { ProductItem } from "./ProductItem";

export interface ProductsListProps {
  products: Products[] | undefined;
  isLoading: boolean;
  onProductPress: (product: Products) => void;
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
            renderItem={({ item }) => (
              <ProductItem
                product={item}
                isFirstItem={
                  props.products && props.products.indexOf(item) === 0
                }
                isLastItem={
                  props.products &&
                  props.products.indexOf(item) === props.products.length - 1
                }
                onPress={() => props.onProductPress(item)}
              />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ marginVertical: 20 }}
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
