import { FetcherFactory } from "./fetcher";

export const config = {
  apiHost: "http://localhost:3002",
};

export const fetcher = FetcherFactory({
  options: {
    baseURL: config.apiHost,
  },
});
