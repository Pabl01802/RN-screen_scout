import { TextProps } from "react-native";
import React from "react";
import styled from "@emotion/native";

const StyledText = styled.Text<Omit<BodyTextProps, "children">>(
  ({ theme, center, bold, color }) => ({
    color: !color ? theme.colors.text.primary : color,
    textAlign: !center ? "left" : "center",
    fontSize: 16,
    fontWeight: !bold ? "normal" : "bold",
  })
);

interface BodyTextProps extends TextProps {
  center?: boolean;
  bold?: boolean;
  color?: string;
}

export const BodyText = ({ children, ...props }: BodyTextProps) => (
  <StyledText {...props}>{children}</StyledText>
);
