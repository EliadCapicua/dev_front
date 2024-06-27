import { View, StyleSheet } from "react-native";
import { Button } from "../atom/Button";
import { ThemedText } from "../ThemedText";

interface DeleteConfirmProps {
  onConfirm: () => void;
  onCancel: () => void;
  titleProduct: string;
}

export const DeleteConfirm = (props: DeleteConfirmProps) => {
  return (
    <View style={styles.container}>
      <ThemedText>
        Estás seguro de eliminar el producto {props.titleProduct}?
      </ThemedText>
      <View style={styles.buttons}>
        <Button text="Confirmar" onPress={props.onConfirm} />
        <View style={{ height: 8 }} />
        <Button text="Cancelar" onPress={props.onCancel} isSecondary />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
  },
  buttons: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    marginTop: 20,
  },
});
