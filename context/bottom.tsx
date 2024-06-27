import { create, useStore } from "zustand";
import { createContext, useContext, useRef } from "react";

interface State {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title: string;
  setTitle: (title: string) => void;
  onPrimaryButtonPress: () => void;
  onSecondaryButtonPress: () => void;
  setOnPrimaryButtonPress: (onPrimaryButtonPress: () => void) => void;
  setOnSecondaryButtonPress: (onSecondaryButtonPress: () => void) => void;
}

const createStore = () =>
  create<State>()((set) => ({
    isOpen: false as boolean,
    setIsOpen: (isOpen) => set({ isOpen }),
    title: "" as string,
    setTitle: (title) => set({ title }),
    onPrimaryButtonPress: () => {},
    onSecondaryButtonPress: () => {},
    setOnPrimaryButtonPress: (onPrimaryButtonPress) =>
      set({ onPrimaryButtonPress }),
    setOnSecondaryButtonPress: (onSecondaryButtonPress) =>
      set({ onSecondaryButtonPress }),
  }));

interface StoreProviderProps {
  children: React.ReactNode;
}

const Context = createContext<ReturnType<typeof createStore> | null>(null);

const BottomSheetProvider = ({ children }: StoreProviderProps) => {
  const storeRef = useRef<ReturnType<typeof createStore>>();
  if (!storeRef.current) {
    storeRef.current = createStore();
  }
  return (
    <Context.Provider value={storeRef.current}>{children}</Context.Provider>
  );
};

interface StoreSelector<T> {
  (state: State): T;
}

const useBottomSheetContext = (selector?: StoreSelector<any>): State => {
  const store = useContext(Context);
  if (!store) {
    throw new Error("Missing useBottomSheetContext");
  }
  return useStore(
    store,
    selector ?? (((state) => state) as StoreSelector<State>)
  );
};

export { BottomSheetProvider, useBottomSheetContext };
