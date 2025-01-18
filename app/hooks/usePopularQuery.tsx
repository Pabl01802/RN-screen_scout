import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../utils/queryKeys";
import { axiosClient } from "../utils/axiosClient";
import { MovieResponse } from "../utils/interfaces";
import { hoursToMiliseconds } from "../utils/hoursToMiliseconds";

export const usePopularQuery = () =>
  useQuery<MovieResponse>({
    queryKey: [queryKeys.POPULAR],
    queryFn: async () => {
      const { data: movies } = await axiosClient.get("/movie/popular");

      return movies;
    },
    staleTime: hoursToMiliseconds(6),
  });
