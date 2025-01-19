import React, { useState } from "react";
import { MoviesCarousel } from "../components/MoviesCarousel";
import { useTheme } from "@emotion/react";
import { Container } from "../components/Container";
import styled from "@emotion/native";
import { FlatList } from "react-native";
import { Heading2 } from "../components/Text/Heading2";
import { usePopularQuery } from "../hooks/usePopularQuery";
import { MovieCard } from "../components/MovieCard";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useHomeListStore } from "../theme/stores/useHomeListStore";
import { CategoriesButtons } from "../components/CategoriesButtons";
import { Category } from "../utils/interfaces";
import { useNowPlayingQuery } from "../hooks/useNowPlayingQuery";
import { useUpcomingQuery } from "../hooks/useUpcomingQuery";
import { useTopRatedQuery } from "../hooks/useTopRatedQuery";

const StyledContainer = styled.View(({ theme }) => ({
  padding: theme.spacings.m,
}));

const Home = () => {
  const [category, setCategory] = useState<Category>("Popular");
  const [columns] = useState(2);
  const setIsScrolling = useHomeListStore((state) => state.setIsScrolling);

  const { data: popular } = usePopularQuery();
  const { data: nowPlaying } = useNowPlayingQuery();
  const { data: upcoming } = useUpcomingQuery(category === "Upcoming");
  const { data: topRated } = useTopRatedQuery(category === "Top Rated");

  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const getFilteredData = () => {
    switch (category) {
      case "Popular":
        return popular;
      case "Now Playing":
        return nowPlaying;
      case "Upcoming":
        return upcoming;
      case "Top Rated":
        return topRated;
      default:
        return popular;
    }
  };

  return (
    <Container>
      <MoviesCarousel />
      <StyledContainer>
        <CategoriesButtons category={category} setCategory={setCategory} />
        <Heading2 color={theme.colors.bg.secondary} bold>
          {category}
        </Heading2>
      </StyledContainer>
      <FlatList
        data={getFilteredData()?.results}
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
        onMomentumScrollBegin={() => setIsScrolling(true)}
        onMomentumScrollEnd={() => setIsScrolling(false)}
      />
    </Container>
  );
};
export default Home;
