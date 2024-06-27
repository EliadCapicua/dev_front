import { SafeAreaView, StyleSheet, Platform, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { FontAwesome6 } from "@expo/vector-icons";

interface HeaderProps {
  title: string;
  onLeftPress?: () => void;
}

export const Header = (props: HeaderProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        {props.onLeftPress && (
          <FontAwesome6
            name="arrow-left"
            size={24}
            color="#0777E0"
            style={styles.leftIcon}
            onPress={props.onLeftPress}
          />
        )}
        <View
          style={[
            styles.headerTitle,
            { marginRight: props.onLeftPress ? 44 : 0 },
          ]}
        >
          <FontAwesome6
            name="money-bills"
            size={24}
            color="#0777E0"
            style={styles.icon}
          />
          <ThemedText type="title" style={styles.title}>
            {props.title}
          </ThemedText>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginTop: Platform.OS === "ios" ? 44 : 0,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    height: 44,
  },
  headerRow: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  leftIcon: {
    marginLeft: 20,
  },
  icon: {
    marginBottom: 4,
  },

  title: {
    textAlign: "center",
    marginLeft: 8,
  },
});
