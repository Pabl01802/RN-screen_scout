import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../utils/queryKeys";
import { axiosClient } from "../utils/axiosClient";
import { MovieDetails } from "../utils/interfaces";
import { hoursToMiliseconds } from "../utils/hoursToMiliseconds";

export const useGetMovieQuery = (movieId: number) =>
  useQuery<MovieDetails>({
    queryKey: [queryKeys.MOVIE_DETAILS, movieId],
    queryFn: async () => {
      const { data } = await axiosClient.get(`/movie/${movieId}`);

      return data;
    },
    staleTime: hoursToMiliseconds(6),
    enabled: !!movieId,
  });
