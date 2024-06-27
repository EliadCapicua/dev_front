import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View, StyleSheet } from "react-native";

interface HeaderModalProps {
  onPress: () => void;
}

export const HeaderModal = (props: HeaderModalProps) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={props.onPress}>
        <Ionicons name="close" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
});
