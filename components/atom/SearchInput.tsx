import { TextComponent } from "./TextInput";

export interface SearchInputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
}

export const SearchInput = (props: SearchInputProps) => {
  return (
    <TextComponent
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value}
      isOptional
    />
  );
};
