import React from "react";
import { StorageMovie } from "../utils/interfaces";
import { BodyText } from "./Text/BodyText";
import styled from "@emotion/native";
import { getSmallImage } from "../utils/images/getSmallImage";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useTheme } from "@emotion/react";
import { useSavedMoviesStore } from "../hooks/stores/useSavedMoviesStore";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

interface SavedMovieTileProps {
  movie: StorageMovie;
}

const Tile = styled.TouchableOpacity({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

const MovieInfo = styled.View(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacings.lg,
}));

const MoviePoster = styled.Image(({ theme }) => ({
  width: 50,
  height: 50,
  borderRadius: theme.spacings.m,
}));

export const SavedMovieTile = ({ movie }: SavedMovieTileProps) => {
  const removeMovie = useSavedMoviesStore((state) => state.removeMovie);

  const router = useRouter();
  const theme = useTheme();

  const { id, title, posterPath } = movie;

  return (
    <Tile onPress={() => router.push(`movies/${id}`)}>
      <MovieInfo>
        <MoviePoster
          source={{
            uri: getSmallImage(posterPath),
          }}
        />
        <BodyText
          numberOfLines={2}
          style={{
            width: "60%",
          }}
        >
          {title}
        </BodyText>
      </MovieInfo>
      <TouchableOpacity hitSlop={theme.hitSlop} onPress={() => removeMovie(id)}>
        <FontAwesome name="trash" size={24} color={theme.colors.bg.secondary} />
      </TouchableOpacity>
    </Tile>
  );
};
