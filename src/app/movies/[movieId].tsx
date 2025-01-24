import { View } from "react-native";
import React from "react";
import { BodyText } from "../../components/Text/BodyText";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { useGetMovieQuery } from "../../hooks/useGetMovieQuery";
import { LoadingIndicator } from "../../components/LoadingIndicator";
import { getOriginalImage } from "../../utils/images/getOriginalImage";
import { Heading1 } from "../../components/Text/Heading1";
import styled from "@emotion/native";
import { MovieGradient } from "../../components/MovieGradient";
import { useTheme } from "@emotion/react";
import { Spacer } from "../../components/Spacer";
import { GenrePill } from "../../components/GenrePill";
import { Heading3 } from "../../components/Text/Heading3";
import { ScrollableContainer } from "../../components/ScrollableContainer";

const MovieBackdrop = styled.Image({
  width: "100%",
  height: 380,
});

const StyledView = styled.View(({ theme }) => ({
  padding: theme.spacings.m,
}));

const GenresContainer = styled.ScrollView(({ theme }) => ({
  paddingVertical: theme.spacings.m,
}));

const MovieDetails = () => {
  const params = useLocalSearchParams<{ movieId: string }>();
  const theme = useTheme();

  const { data: movie, isFetching } = useGetMovieQuery(
    parseInt(params.movieId)
  );

  return (
    <ScrollableContainer>
      {isFetching ? (
        <LoadingIndicator />
      ) : (
        <>
          <View>
            <MovieBackdrop
              source={{
                uri: getOriginalImage(movie?.backdrop_path || ""),
              }}
              resizeMode="cover"
            />
            <MovieGradient />
          </View>
          <StyledView>
            <Heading1 bold>{movie?.title}</Heading1>
            <Heading3>{movie?.release_date}</Heading3>
            <Spacer height={theme.spacings.m} />
            <BodyText>{movie?.overview}</BodyText>
            <BodyText>{movie?.overview}</BodyText>
            <BodyText>{movie?.overview}</BodyText>
            <GenresContainer
              horizontal
              contentContainerStyle={{
                gap: theme.spacings.m,
              }}
            >
              {movie?.genres.map((genre) => (
                <GenrePill genre={genre.name} key={genre.id} />
              ))}
            </GenresContainer>
          </StyledView>
        </>
      )}
      <Spacer height={theme.spacings.lg} />
    </ScrollableContainer>
  );
};

export default MovieDetails;
