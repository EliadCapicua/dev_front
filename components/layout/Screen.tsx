import {
  SafeAreaView,
  StyleSheet,
  Platform,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

interface ScreenProps {
  children: React.ReactNode;
  isScrollable?: boolean;
}

export const Screen = (props: ScreenProps) => {
  const ContentContainer = props.isScrollable ? ScrollView : View;
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <ContentContainer
            contentContainerStyle={{
              flexGrow: 1,
            }}
            keyboardShouldPersistTaps="handled"
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
          >
            {props.children}
          </ContentContainer>
        </KeyboardAvoidingView>
      </SafeAreaView>
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
