import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../utils/queryKeys";
import { axiosClient } from "../utils/axiosClient";
import { MovieResponse } from "../utils/interfaces";
import { hoursToMiliseconds } from "../utils/hoursToMiliseconds";

export const useUpcomingQuery = () =>
  useQuery<MovieResponse>({
    queryKey: [queryKeys.UPCOMING],
    queryFn: async () => {
      const { data: movies } = await axiosClient.get("/movie/upcoming");

      return movies;
    },
    staleTime: hoursToMiliseconds(6),
  });
