import { Products } from "@/types/products";
import { View, StyleSheet, Image } from "react-native";
import { ThemedText } from "../ThemedText";

interface ProductItemProps {
  product: Products;
}

export const ProductItem = (props: ProductItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: props.product.image }} style={styles.image} />
      <ThemedText type="subtitle">{props.product.name}</ThemedText>
      <ThemedText type="subtitle">{props.product.price}</ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
