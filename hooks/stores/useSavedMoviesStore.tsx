import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageMovie } from "../../utils/interfaces";

interface MoviesStorage {
  movies: StorageMovie[];
  addMovie: (movie: StorageMovie) => void;
  removeMovie: (movieId: number) => void;
  clearStorage: () => void;
}

export const useSavedMoviesStore = create<MoviesStorage>()(
  persist(
    (set, get) => ({
      movies: [],
      addMovie: (movie) => {
        const found = !!get().movies.find((_movie) => _movie.id == movie.id);

        if (found) return;

        set({
          movies: [...get().movies, movie],
        });
      },
      removeMovie: (movieId) =>
        set({
          movies: get().movies.filter((_movie) => _movie.id !== movieId),
        }),
      clearStorage: () =>
        set({
          movies: [],
        }),
    }),
    {
      name: "saved-movies-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
