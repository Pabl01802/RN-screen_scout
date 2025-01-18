import React, { useState } from "react";
import { MoviesCarousel } from "../components/MoviesCarousel";
import { Spacer } from "../components/Spacer";
import { useTheme } from "@emotion/react";
import { Container } from "../components/Container";
import styled from "@emotion/native";
import { FlatList } from "react-native";
import { Heading2 } from "../components/Text/Heading2";
import { usePopularQuery } from "../hooks/usePopularQuery";
import { MovieCard } from "../components/MovieCard";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useHomeListStore } from "../theme/stores/useHomeListStore";

const StyledContainer = styled.View(({ theme }) => ({
  padding: theme.spacings.m,
  flex: 1,
}));

const Home = () => {
  const [columns] = useState(2);
  const { data: popular } = usePopularQuery();

  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const setIsScrolling = useHomeListStore((state) => state.setIsScrolling);

  return (
    <Container>
      <MoviesCarousel />
      <StyledContainer>
        <Heading2 color={theme.colors.bg.secondary} bold>
          Popular
        </Heading2>
        <Spacer height={theme.spacings.m} />
        <FlatList
          data={popular?.results}
          renderItem={({ item }) => <MovieCard data={item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={columns}
          columnWrapperStyle={{
            justifyContent: "space-around",
          }}
          contentContainerStyle={{
            rowGap: theme.spacings.lg,
            paddingBottom: insets.bottom ? insets.bottom + 30 : 80,
          }}
          onScroll={() => setIsScrolling(true)}
          onMomentumScrollEnd={() => setIsScrolling(false)}
        />
      </StyledContainer>
    </Container>
  );
};
export default Home;
