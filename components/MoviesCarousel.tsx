import * as React from "react";
import { Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useNowPlayingQuery } from "../hooks/useNowPlayingQuery";
import { Heading1 } from "./Text/Heading1";
import styled from "@emotion/native";
import { Button } from "./Button";
import { getMediumImage } from "../utils/images/getMediumImage";
import { MovieGradient } from "./MovieGradient";
import { useRouter } from "expo-router";

const ImageContainer = styled.View({
  position: "relative",
  height: 195,
});

const StyledImage = styled.Image({
  flex: 1,
});

const StyledHeading = styled(Heading1)(({ theme }) => ({
  width: "100%",
  position: "absolute",
  top: 90,
  zIndex: 9,
  paddingHorizontal: theme.spacings.m,
}));

const ButtonsContainer = styled.View(({ theme }) => ({
  position: "absolute",
  zIndex: 9,
  width: "100%",
  justifyContent: "center",
  flexDirection: "row",
  gap: theme.spacings.m,
  bottom: theme.spacings.m,
}));

export const MoviesCarousel = () => {
  const router = useRouter();

  const nowPlaying = useNowPlayingQuery();

  const width = Dimensions.get("window").width;
  return (
    <ImageContainer>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={nowPlaying?.data?.results || []}
        scrollAnimationDuration={2000}
        autoPlayInterval={6000}
        renderItem={({ item }) => (
          <ImageContainer>
            <StyledImage
              source={{
                uri: getMediumImage(item.backdrop_path),
              }}
            />
            <StyledHeading center bold numberOfLines={1}>
              {item.title}
            </StyledHeading>
            <ButtonsContainer>
              <Button onPress={() => router.push(`movies/${item.id}`)}>
                Check out
              </Button>
              <Button secondary>Save for later</Button>
            </ButtonsContainer>
            <MovieGradient />
          </ImageContainer>
        )}
      />
    </ImageContainer>
  );
};
