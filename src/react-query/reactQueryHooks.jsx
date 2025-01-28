import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import UnsplashRequest from "../utils/UnsplashRequest";

export const useGetImages = () => {
  const { isPending: getIsPending, isError, data, error } = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const { data } = await UnsplashRequest.get("/photos");
      return data;
    },
  });

  return { getIsPending, isError, data, error };
};

export const useSearchImages = () => {
  const queryClient = useQueryClient();

  const { mutate: searchImages, isPending: searchIsPending } = useMutation({
    mutationFn: (queryVal) =>
      UnsplashRequest.get(`/search/photos`, {
        params: {
          query: queryVal,
        },
      }),
    onSuccess: (response) => {
      queryClient.setQueryData(["images"], response.data.results);
    },
  });

  return {searchImages, searchIsPending}
};
