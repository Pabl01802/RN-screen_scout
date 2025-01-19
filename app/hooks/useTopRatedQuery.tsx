import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../utils/queryKeys";
import { axiosClient } from "../utils/axiosClient";
import { MovieResponse } from "../utils/interfaces";
import { hoursToMiliseconds } from "../utils/hoursToMiliseconds";

export const useTopRatedQuery = (queryEnabled: boolean) =>
  useQuery<MovieResponse>({
    queryKey: [queryKeys.TOP_RATED],
    queryFn: async () => {
      const { data: movies } = await axiosClient.get("/movie/top_rated");

      return movies;
    },
    staleTime: hoursToMiliseconds(24),
    enabled: queryEnabled,
  });
