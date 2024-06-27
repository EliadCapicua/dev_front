import { config, fetcher } from "@/context/api";
import { Products } from "@/types/products";
import { useMutation } from "@tanstack/react-query";

export const useCreateProduct = () =>
  useMutation({
    mutationFn: async (product: Products) => {
      const response = await fetcher.post(
        `${config.apiHost}/bp/products`,
        product
      );
      return response.data;
    },
  });
