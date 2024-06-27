import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "../ThemedText";

interface ButtonProps {
  text: string;
  onPress: () => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <ThemedText type="default">{props.text}</ThemedText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#F8E930",
    padding: 10,
    borderRadius: 5,
  },
});
