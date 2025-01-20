import React, { useState } from "react";
import { Container } from "../../components/Container";
import { useSavedMoviesStore } from "../../hooks/stores/useSavedMoviesStore";
import { Heading1 } from "../../components/Text/Heading1";
import { useTheme } from "@emotion/react";
import { SavedMovieTile } from "../../components/SavedMovieTile";
import { FlatList } from "react-native";
import { Input } from "../../components/Input";
import styled from "@emotion/native";
import { Spacer } from "../../components/Spacer";

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacings.xl,
}));

const Saved = () => {
  const storage = useSavedMoviesStore((state) => state.movies);
  const [text, setText] = useState("");

  const theme = useTheme();

  const searchMovie = (txt: string) => setText(txt.trim());

  const filtered = storage.filter((movie) =>
    movie.title.toUpperCase().includes(text.toUpperCase())
  );

  return (
    <StyledContainer>
      {storage.length !== 0 && (
        <Input onChangeText={searchMovie} placeholder="Search for movie" />
      )}
      <Spacer height={theme.spacings.lg} />
      <FlatList
        data={text ? filtered : storage}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => <SavedMovieTile movie={item} />}
        contentContainerStyle={{
          gap: theme.spacings.m,
          paddingBottom: 70,
        }}
        ListEmptyComponent={
          <>
            <Heading1 center bold>
              No movies saved!
            </Heading1>
          </>
        }
      />
    </StyledContainer>
  );
};

export default Saved;
