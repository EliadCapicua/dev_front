import axios, { CreateAxiosDefaults } from "axios";

interface optionsProps {
  options: CreateAxiosDefaults;
}

export const FetcherFactory = ({ options }: optionsProps) => {
  const fetcher = axios.create(options);
  return fetcher;
};
