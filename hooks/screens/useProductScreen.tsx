import { useBottomSheetContext } from "@/context/bottom";
import { router, useLocalSearchParams } from "expo-router";
import { useDeleteProduct } from "../mutations/products";

export const useProductScreen = () => {
  const { product } = useLocalSearchParams<{ product: string }>();

  const ctx = useBottomSheetContext();
  const { mutateAsync: deleteProduct, isPending: isDeletingProduct } =
    useDeleteProduct();

  const onEdit = () => {
    router.push({
      pathname: "/register",
      params: { product, mode: "edit" },
    });
  };

  const onDelete = () => {
    const p = JSON.parse(product || "{}");
    ctx.setIsOpen(true);
    ctx.setTitle(`${p?.name || ""}`);
    ctx.setOnPrimaryButtonPress(onPrimaryButtonPress);
    ctx.setOnSecondaryButtonPress(onClose);
  };

  const onPrimaryButtonPress = async () => {
    const p = JSON.parse(product || "{}");
    await deleteProduct(p?.id);
    onClose();
    router.back();
  };

  const onClose = () => {
    ctx.setIsOpen(false);
  };

  return {
    product: JSON.parse(product || "{}"),
    onEdit,
    onDelete,
  };
};
