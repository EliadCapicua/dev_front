import { View, StyleSheet, TextInput } from "react-native";
import { ThemedText } from "../ThemedText";
import { useEffect, useState } from "react";

export interface TextComponentProps {
  label?: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  isValid?: boolean;
  error?: string;
  isOptional?: boolean;
}

export const TextComponent = (props: TextComponentProps) => {
  const [value, onChangeText] = useState("");

  const handleOnChangeText = (text: string) => {
    onChangeText(text);
    props.onChangeText(text);
  };

  useEffect(() => {
    onChangeText(props.value);
    return () => {};
  }, [props.value]);

  return (
    <View style={styles.container}>
      <ThemedText style={styles.label}>{props.label}</ThemedText>
      <TextInput
        placeholder={props.placeholder}
        style={[
          styles.input,
          !props.isValid && !props.isOptional && { borderColor: "#FF0000" },
        ]}
        onChangeText={handleOnChangeText}
        value={value}
        autoCapitalize="none"
      />
      {!props.isValid && !props.isOptional && (
        <ThemedText style={styles.error}>
          {props.error || "Este campo es requerido"}
        </ThemedText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  input: {
    height: 45,
    padding: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    width: "100%",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    textTransform: "lowercase",
  },
  error: {
    fontSize: 14,
    color: "#FF0000",
  },
});
