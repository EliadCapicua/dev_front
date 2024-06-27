import {
  View,
  TouchableOpacity,
  Modal,
  Platform,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import DateTimePicker, {
  DateTimePickerEvent,
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { ThemedText } from "../ThemedText";
import { Button } from "./Button";
import { formatDate } from "@/utils/date";

interface DatePickerProps {
  label?: string;
  value: string;
  onChange?: (value: string) => void;
  placeholder: string;
  isOptional?: boolean;
  minDate?: Date;
  maxDate?: Date;
  isValid?: boolean;
  error?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  value,
  onChange,
  placeholder,
  minDate,
  maxDate,
}) => {
  const [date, setDate] = useState(value ? new Date(value) : undefined);
  const [dateString, setDateString] = useState(
    value ? new Date(value).toDateString() : ""
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onChangeDate = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    const currentDate = selectedDate || date;
    if (!currentDate) return;
    setDate(currentDate);
    setDateString(formatDate(currentDate.toDateString()));
    onChange?.(currentDate?.toISOString() || "");
  };

  const onPress = () => {
    if (Platform.OS === "ios") {
      setIsModalOpen(true);
    } else {
      DateTimePickerAndroid.open({
        value: date || new Date(),
        onChange: onChangeDate,
        mode: "date",
        maximumDate: maxDate || new Date(),
        minimumDate: minDate || new Date(1920, 0, 1),
      });
    }
  };

  return (
    <View style={styles.container}>
      <ThemedText style={styles.label}>{label}</ThemedText>
      <TouchableOpacity onPress={onPress} style={styles.input}>
        <ThemedText style={[styles.date, date ? {} : { color: "#E0E0E0" }]}>
          {date ? dateString : placeholder}
        </ThemedText>
      </TouchableOpacity>

      {Platform.OS === "ios" && (
        <Modal animationType="fade" transparent={true} visible={isModalOpen}>
          <View
            style={[styles.modal, { backgroundColor: "rgba(0, 0, 0, 0.5)" }]}
          >
            <View style={styles.modalContent}>
              <DateTimePicker
                value={date || new Date()}
                mode="date"
                display="spinner"
                onChange={onChangeDate}
                maximumDate={maxDate || new Date()}
                minimumDate={minDate || new Date(1920, 0, 1)}
              />
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Button text="Select" onPress={() => setIsModalOpen(false)} />
              </View>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginVertical: 8,
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    width: "80%",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  date: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  input: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 44,
    padding: 4,
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    width: "100%",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
  },
});
