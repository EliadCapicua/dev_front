import { Screen } from "@/components/layout/Screen";
import { RegisterScreenContent } from "@/components/screens/RegisterScreenContent";
import { useRegisterScreen } from "@/hooks/screens/useRegisterScreen";

export default function RegisterScreen() {
  const screen = useRegisterScreen();
  return (
    <Screen isScrollable>
      <RegisterScreenContent {...screen} />
    </Screen>
  );
}
