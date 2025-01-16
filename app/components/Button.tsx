import React from "react";
import styled from "@emotion/native";
import { TouchableOpacityProps } from "react-native-gesture-handler";
import { BodyText } from "./Text/BodyText";

const StyledOpacity = styled.TouchableOpacity<{ secondary?: boolean }>(
  ({ theme, secondary }) => ({
    backgroundColor: !secondary ? theme.colors.bg.secondary : "transparent",
    padding: theme.spacings.m,
    borderRadius: theme.spacings.xl,
    borderWidth: 2,
    borderColor: theme.colors.bg.secondary,
  })
);

interface StyledButtonProps extends TouchableOpacityProps {
  secondary?: boolean;
}

export const Button = ({ children, secondary }: StyledButtonProps) => {
  return (
    <StyledOpacity secondary={secondary}>
      <BodyText center>{children}</BodyText>
    </StyledOpacity>
  );
};
