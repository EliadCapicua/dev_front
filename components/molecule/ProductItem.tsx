import { Products } from "@/types/products";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "../ThemedText";
import { Ionicons } from "@expo/vector-icons";

interface ProductItemProps {
  product: Products;
  isFirstItem?: boolean;
  isLastItem?: boolean;
  onPress: () => void;
}

export const ProductItem = (props: ProductItemProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={[
          styles.container,
          props.isFirstItem && {
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            borderTopWidth: 1,
          },
          props.isLastItem && {
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          },
        ]}
      >
        <View style={styles.column}>
          <View style={styles.nameRow}>
            <ThemedText style={styles.name}>Nombre:</ThemedText>
            <ThemedText>{props.product.name}</ThemedText>
          </View>
          <ThemedText>ID: {props.product.id}</ThemedText>
        </View>
        <Ionicons name="chevron-forward" size={24} color="#E0E0E0" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
  },
  column: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  nameRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginRight: 4,
  },
});
