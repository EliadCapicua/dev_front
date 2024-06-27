import { useBottomSheetContext } from "@/context/bottom";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useEffect, useMemo, useRef } from "react";
import { StyleSheet } from "react-native";
import { DeleteConfirm } from "./DeleteConfirm";

export const BottomSheetComponent = () => {
  const {
    isOpen,
    setIsOpen,
    onPrimaryButtonPress,
    onSecondaryButtonPress,
    title,
  } = useBottomSheetContext();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["5%", "35%"], []);

  const onChange = (index: number) => {
    if (index === -1) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      bottomSheetRef.current?.expand();
    } else {
      bottomSheetRef.current?.close();
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      bottomSheetRef.current?.close();
    };
  }, []);

  return (
    <BottomSheet
      enablePanDownToClose
      onChange={onChange}
      backdropComponent={(props) => (
        <BottomSheetBackdrop
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          {...props}
        />
      )}
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      index={-1}
    >
      <BottomSheetView style={styles.contentContainer}>
        <DeleteConfirm
          onConfirm={onPrimaryButtonPress}
          onCancel={onSecondaryButtonPress}
          titleProduct={title}
        />
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
