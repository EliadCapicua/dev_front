import { View, StyleSheet } from "react-native";
import { SearchInput, SearchInputProps } from "../atom/SearchInput";
import { ProductsList, ProductsListProps } from "../molecule/ProductsList";
import { Button } from "../atom/Button";

interface HomeScreenProps {
  searchInputProps: SearchInputProps;
  productsListProps: ProductsListProps;
  onAddProduct: () => void;
}

export const HomeScreen = (props: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <SearchInput {...props.searchInputProps} />
      <ProductsList {...props.productsListProps} />
      <View style={styles.button}>
        <Button text="Add product" onPress={props.onAddProduct} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  button: {
    position: "absolute",
    bottom: 20,
    right: 20,
    left: 20,
  },
});
