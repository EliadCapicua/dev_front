import { TextInput, View, StyleSheet } from "react-native";

export interface SearchInputProps {
  placeholder: string;
}

export const SearchInput = (props: SearchInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={props.placeholder} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#FFFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    padding: 8,
  },
  input: {
    flex: 1,
    padding: 4,
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
});
