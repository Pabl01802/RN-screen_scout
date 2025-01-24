import React from "react";
import styled from "@emotion/native";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@emotion/react";

const Gradient = styled(LinearGradient)({
  zIndex: 2,
  position: "absolute",
  width: "100%",
  height: "100%",
});

export const MovieGradient = () => {
  const theme = useTheme();

  return <Gradient colors={["transparent", theme.colors.bg.primary]} />;
};
