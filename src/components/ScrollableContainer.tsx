import React from "react";
import styled from "@emotion/native";

const StyledScroll = styled.ScrollView(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.bg.primary,
}));

export const ScrollableContainer = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return <StyledScroll {...props}>{children}</StyledScroll>;
};
