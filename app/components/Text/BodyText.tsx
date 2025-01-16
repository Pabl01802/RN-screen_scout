import { TextProps } from "react-native";
import React from "react";
import styled from "@emotion/native";

const StyledText = styled.Text<Omit<BodyTextProps, "children">>(
  ({ theme, center }) => ({
    color: theme.colors.text.primary,
    textAlign: !center ? "left" : "center",
  })
);

interface BodyTextProps extends TextProps {
  center?: boolean;
}

export const BodyText = ({ children, center }: BodyTextProps) => (
  <StyledText center={center}>{children}</StyledText>
);
