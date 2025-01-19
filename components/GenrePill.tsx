import React from "react";
import { BodyText } from "./Text/BodyText";
import styled from "@emotion/native";

const GenreContainer = styled.View(({ theme }) => ({
  backgroundColor: theme.colors.bg.secondary,
  paddingVertical: theme.spacings.xs,
  paddingHorizontal: theme.spacings.lg,
  borderRadius: theme.spacings.m,
}));

export const GenrePill = ({ genre }: { genre: string }) => {
  return (
    <GenreContainer>
      <BodyText>{genre}</BodyText>
    </GenreContainer>
  );
};
