import { config, fetcher } from "@/context/api";
import { Products } from "@/types/products";
import { useQuery } from "@tanstack/react-query";

export const useGetProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: async (): Promise<Products[]> => {
      const response = await fetcher.get(`${config.apiHost}/bp/products`);
      return response.data;
    },
  });
