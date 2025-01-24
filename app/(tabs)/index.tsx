import React, { useEffect, useState } from "react";
import { MoviesCarousel } from "../../components/MoviesCarousel";
import { useTheme } from "@emotion/react";
import { Container } from "../../components/Container";
import styled from "@emotion/native";
import { FlatList } from "react-native";
import { Heading2 } from "../../components/Text/Heading2";
import { usePopularQuery } from "../../hooks/usePopularQuery";
import { MovieCard } from "../../components/MovieCard";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useHomeListStore } from "../../hooks/stores/useHomeListStore";
import { CategoriesButtons } from "../../components/CategoriesButtons";
import { Category } from "../../utils/interfaces";
import { useNowPlayingQuery } from "../../hooks/useNowPlayingQuery";
import { useUpcomingQuery } from "../../hooks/useUpcomingQuery";
import { useTopRatedQuery } from "../../hooks/useTopRatedQuery";
import { LoadingIndicator } from "../../components/LoadingIndicator";
import { useSharedValue } from "react-native-reanimated";

const StyledContainer = styled.View(({ theme }) => ({
  padding: theme.spacings.m,
}));

const StyledLoading = styled(LoadingIndicator)({
  justifyContent: "flex-start",
  paddingTop: 60,
});

const Home = () => {
  const [category, setCategory] = useState<Category>("Popular");
  const [columns] = useState(2);
  const setIsScrolling = useHomeListStore((state) => state.setIsScrolling);

  const { data: popular, fetchNextPage: fetchNextPopular } = usePopularQuery();
  const { data: nowPlaying, fetchNextPage: fetchNextNowPlaying } =
    useNowPlayingQuery();
  const { data: upcoming, fetchNextPage: fetchNextUpcoming } = useUpcomingQuery(
    category === "Upcoming"
  );
  const { data: topRated, fetchNextPage: fetchNextTopRated } = useTopRatedQuery(
    category === "Top Rated"
  );

  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const selectedCard = useSharedValue<number | undefined>(undefined);

  useEffect(() => {
    selectedCard.value = undefined;
  }, [category]);

  const getFilteredData = () => {
    switch (category) {
      case "Popular":
        return popular?.pages.flatMap((page) => page.results) || [];
      case "Now Playing":
        return nowPlaying?.pages.flatMap((page) => page.results) || [];
      case "Upcoming":
        return upcoming?.pages.flatMap((page) => page.results) || [];
      case "Top Rated":
        return topRated?.pages.flatMap((page) => page.results) || [];
      default:
        return popular?.pages.flatMap((page) => page.results) || [];
    }
  };

  const fetchNextPage = () => {
    switch (category) {
      case "Popular":
        return fetchNextPopular();
      case "Now Playing":
        return fetchNextNowPlaying();
      case "Upcoming":
        return fetchNextUpcoming();
      case "Top Rated":
        return fetchNextTopRated();
      default:
        return fetchNextPopular();
    }
  };

  const displayLoading = () => {
    if (category === "Now Playing" && !nowPlaying?.pages) return true;
    else if (category === "Popular" && !popular?.pages) return true;
    else if (category === "Top Rated" && !topRated?.pages) return true;
    else if (category === "Upcoming" && !upcoming?.pages) return true;
    else return false;
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
      {displayLoading() ? (
        <StyledLoading />
      ) : (
        <FlatList
          data={getFilteredData()}
          renderItem={({ item }) => (
            <MovieCard data={item} selected={selectedCard} />
          )}
          keyExtractor={(item, index) => `${item.id.toString()}-${index}`}
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
          onEndReachedThreshold={0.5}
          onEndReached={() => fetchNextPage()}
        />
      )}
    </Container>
  );
};
export default Home;
