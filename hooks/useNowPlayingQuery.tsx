import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../utils/queryKeys";
import { axiosClient } from "../utils/axiosClient";
import { MovieResponse } from "../utils/interfaces";
import { hoursToMiliseconds } from "../utils/hoursToMiliseconds";

export const useNowPlayingQuery = () =>
  useQuery<MovieResponse>({
    queryKey: [queryKeys.NOW_PLAYING],
    queryFn: async () => {
      const { data: movies } = await axiosClient.get("/movie/now_playing");

      return movies;
    },
    staleTime: hoursToMiliseconds(3),
  });
