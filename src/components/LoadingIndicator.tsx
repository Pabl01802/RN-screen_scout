import { ActivityIndicator } from "react-native";
import React from "react";
import styled from "@emotion/native";
import { useTheme } from "@emotion/react";

const LoadingConatainer = styled.View({
  flex: 1,
  justifyContent: "center",
});

export const LoadingIndicator = ({ ...props }) => {
  const theme = useTheme();

  return (
    <LoadingConatainer {...props}>
      <ActivityIndicator color={theme.colors.bg.secondary} />
    </LoadingConatainer>
  );
};
