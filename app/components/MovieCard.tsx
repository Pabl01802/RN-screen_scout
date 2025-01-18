import React from "react";
import { Movie } from "../utils/interfaces";
import styled from "@emotion/native";
import { getSmallImage } from "../utils/images/getSmallImage";

const StyledImage = styled.Image(({ theme }) => ({
  borderRadius: theme.spacings.m,
  width: 170,
  height: 240,
}));

export const MovieCard = ({ data }: { data: Movie }) => {
  return (
    <StyledImage
      source={{
        uri: getSmallImage(data.poster_path),
      }}
      resizeMode="cover"
    />
  );
};
