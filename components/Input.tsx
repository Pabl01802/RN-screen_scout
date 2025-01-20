import { TextInputProps } from "react-native";
import React from "react";
import styled from "@emotion/native";
import { useTheme } from "@emotion/react";

const StyledInput = styled.TextInput(({ theme }) => ({
  borderWidth: 1,
  borderColor: theme.colors.text.primary,
  borderRadius: theme.spacings.xl,
  paddingVertical: theme.spacings.s,
  paddingHorizontal: theme.spacings.lg,
  color: theme.colors.text.primary,
}));

export const Input = ({ placeholder, ...props }: TextInputProps) => {
  const theme = useTheme();

  return (
    <StyledInput
      maxLength={40}
      {...props}
      placeholder={placeholder || "Type Text"}
      placeholderTextColor={theme.colors.text.primary}
    />
  );
};
