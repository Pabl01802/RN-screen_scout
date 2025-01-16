import React from "react";
import styled from "@emotion/native";

const StyledScroll = styled.ScrollView(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.bg.primary,
}));

export const ScrollableContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <StyledScroll>{children}</StyledScroll>;
};
