import { View, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { Products } from "@/types/products";
import { Button } from "../atom/Button";

interface ProductScreenContentProps {
  product: Products;
  onEdit: () => void;
  onDelete: () => void;
}

export const ProductScreenContent = (props: ProductScreenContentProps) => {
  return (
    <View style={styles.container}>
      <ThemedText type="subtitle">ID: {props.product.id}</ThemedText>
      <ThemedText type="default">Información extra</ThemedText>
      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <ThemedText type="defaultSemiBold">Nombre: </ThemedText>
          <ThemedText type="defaultSemiBold">{props.product.name}</ThemedText>
        </View>
        <View style={styles.row}>
          <ThemedText type="defaultSemiBold">Descripción: </ThemedText>
          <ThemedText type="defaultSemiBold">
            {props.product.description}
          </ThemedText>
        </View>
        <View style={styles.row}>
          <ThemedText type="defaultSemiBold">Logo: </ThemedText>
          <ThemedText type="defaultSemiBold">{props.product.logo}</ThemedText>
        </View>
        <View style={styles.row}>
          <ThemedText type="defaultSemiBold">Fecha de liberación: </ThemedText>
          <ThemedText type="defaultSemiBold">
            {props.product.date_release}
          </ThemedText>
        </View>
        <View style={styles.row}>
          <ThemedText type="defaultSemiBold">Fecha de revisión: </ThemedText>
          <ThemedText type="defaultSemiBold">
            {props.product.date_revision}
          </ThemedText>
        </View>
      </View>
      <Button text="Editar" onPress={props.onEdit} isSecondary />
      <View style={{ height: 8 }} />
      <Button text="Eliminar" onPress={props.onDelete} isDestructive />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    padding: 4,
    marginTop: 20,
  },
  infoContainer: {
    display: "flex",
    width: "80%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 100,
    marginLeft: 40,
    marginBottom: 100,
  },
  row: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
});
