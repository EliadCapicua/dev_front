import { View, StyleSheet } from "react-native";
import { Button } from "../atom/Button";
import { ThemedText } from "../ThemedText";
import { HeaderModal } from "../atom/HeaderModal";

interface DeleteConfirmProps {
  onConfirm: () => void;
  onCancel: () => void;
  titleProduct: string;
}

export const DeleteConfirm = (props: DeleteConfirmProps) => {
  return (
    <View style={styles.header}>
      <HeaderModal onPress={props.onCancel} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
  },
  buttons: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    marginTop: 20,
  },
});
