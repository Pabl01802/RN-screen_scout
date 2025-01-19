import React from "react";
import styled from "@emotion/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useTheme } from "@emotion/react";
import { useRouter } from "expo-router";

const StyledOpacity = styled.TouchableOpacity(({ theme }) => ({
  padding: theme.spacings.m,
}));

export const HeaderGoBack = () => {
  const router = useRouter();
  const theme = useTheme();

  return (
    <StyledOpacity onPress={() => router.back()}>
      <FontAwesome
        name="arrow-left"
        size={16}
        color={theme.colors.text.primary}
      />
    </StyledOpacity>
  );
};
