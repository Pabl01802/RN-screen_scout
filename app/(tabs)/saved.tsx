import React from "react";
import { Container } from "../../components/Container";
import { useSavedMoviesStore } from "../../hooks/stores/useSavedMoviesStore";
import { Heading1 } from "../../components/Text/Heading1";
import { useTheme } from "@emotion/react";
import { SavedMovieTile } from "../../components/SavedMovieTile";
import { FlatList } from "react-native";

const Saved = () => {
  const storage = useSavedMoviesStore((state) => state.movies);

  const theme = useTheme();

  return (
    <Container>
      <FlatList
        data={storage}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => <SavedMovieTile movie={item} />}
        contentContainerStyle={{
          padding: theme.spacings.xl,
          gap: theme.spacings.m,
        }}
        ListEmptyComponent={
          <>
            <Heading1 center bold>
              No movies saved!
            </Heading1>
          </>
        }
      />
    </Container>
  );
};

export default Saved;
