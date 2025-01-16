import React from "react";
import styled from "@emotion/native";

const StyledContainer = styled.View(({ theme }) => ({
  backgroundColor: theme.colors.bg.primary,
  flex: 1,
}));

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
