import { config, fetcher } from "@/context/api";
import { Products } from "@/types/products";
import { standardize } from "@/utils/body";
import { useMutation } from "@tanstack/react-query";

export const useCreateProduct = () =>
  useMutation({
    mutationFn: async (product: Products): Promise<boolean> => {
      try {
        await fetcher.post(
          `${config.apiHost}/bp/products`,
          standardize(product)
        );
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  });

export const useUpdateProduct = () =>
  useMutation({
    mutationFn: async (product: Products): Promise<boolean> => {
      try {
        await fetcher.put(
          `${config.apiHost}/bp/products/${product.id}`,
          standardize(product)
        );
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  });

export const useDeleteProduct = () =>
  useMutation({
    mutationFn: async (id: number): Promise<boolean> => {
      try {
        await fetcher.delete(`${config.apiHost}/bp/products/${id}`);
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  });
