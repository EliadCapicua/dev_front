import { formatDateToISO } from "./date";

export const standardize = (body: any) => {
  if (body.date_release) body.date_release = formatDateToISO(body.date_release);
  if (body.date_revision)
    body.date_revision = formatDateToISO(body.date_revision);
  return body;
};
