import { SafeAreaView, StyleSheet, Platform, View } from "react-native";

interface ScreenProps {
  children: React.ReactNode;
}

export const Screen = (props: ScreenProps) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>{props.children}</SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: Platform.OS === "ios" ? 20 : 0,
  },
  content: {
    flex: 1,
    marginTop: 80,
  },
});
