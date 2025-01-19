import React from "react";
import styled from "@emotion/native";

const StyledView = styled.View<{ width?: number; height?: number }>(
  ({ width, height }) => ({
    width,
    height,
  })
);

type SpacerProps =
  | { width: number; height: number }
  | { width?: number; height: number }
  | { width: number; height?: number };

export const Spacer = ({ width, height }: SpacerProps) => {
  return <StyledView width={width} height={height} />;
};
