import { formatDateToISO } from "./date";

export const standardize = (body: any) => {
  if (body.date_release) body.date_release = formatDateToISO(body.date_release);
  if (body.date_revision)
    body.date_revision = formatDateToISO(body.date_revision);
  body.logo =
    "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg";
  return body;
};
