import { Screen } from "@/components/layout/Screen";
import { ProductScreenContent } from "@/components/screens/ProductScreenContent";
import { useProductScreen } from "@/hooks/screens/useProductScreen";

export default function ProductScreen() {
  const screen = useProductScreen();
  return (
    <Screen>
      <ProductScreenContent {...screen} />
    </Screen>
  );
}
