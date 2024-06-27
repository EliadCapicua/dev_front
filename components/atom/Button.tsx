import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "../ThemedText";

interface ButtonProps {
  text: string;
  onPress: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
  isDestructive?: boolean;
  isSecondary?: boolean;
}

export const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        props.isDisabled && { backgroundColor: "#E0E0E0" },
        props.isDestructive && { backgroundColor: "#FF0000" },
        props.isSecondary && { backgroundColor: "#DADAD7" },
      ]}
      onPress={props.onPress}
      disabled={props.isDisabled || props.isLoading}
    >
      {props.isLoading ? (
        <ActivityIndicator />
      ) : (
        <ThemedText
          type="default"
          style={[
            props.isDisabled && { opacity: 0.5 },
            props.isDestructive && { color: "#FFFFFF" },
            props.isSecondary && { color: "#000000" },
          ]}
        >
          {props.text}
        </ThemedText>
      )}
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
