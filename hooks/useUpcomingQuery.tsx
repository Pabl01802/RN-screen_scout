import { useInfiniteQuery } from "@tanstack/react-query";
import { queryKeys } from "../utils/queryKeys";
import { axiosClient } from "../utils/axiosClient";
import { MovieResponse } from "../utils/interfaces";
import { hoursToMiliseconds } from "../utils/hoursToMiliseconds";

export const useUpcomingQuery = (queryEnabled: boolean) =>
  useInfiniteQuery<MovieResponse>({
    queryKey: [queryKeys.UPCOMING],
    queryFn: async ({ pageParam }) => {
      const { data: movies } = await axiosClient.get(
        `/movie/upcoming?page=${pageParam}`
      );

      return movies;
    },
    getNextPageParam: (lastPage) => {
      return lastPage.page + 1;
    },
    initialPageParam: 1,
    staleTime: hoursToMiliseconds(6),
    enabled: queryEnabled,
  });
