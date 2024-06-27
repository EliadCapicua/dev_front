import { Screen } from "@/components/layout/Screen";
import { HomeScreen } from "@/components/screens/home";
import { useHomeScreen } from "@/hooks/screens/useHomeScreen";

export default function Home() {
  const screen = useHomeScreen();
  return (
    <Screen>
      <HomeScreen {...screen} />
    </Screen>
  );
}
