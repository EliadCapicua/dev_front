// format date from date.toDateString() to dd/mm/yyyy
export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("es-ES");
};

// format date from date.toDateString() to yyyy-mm-dd
export const formatDateToISO = (date: string) => {
  return new Date(date).toISOString().split("T")[0];
};
