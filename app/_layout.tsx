import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Stack } from "expo-router";
import { theme } from "./theme/theme";
import styled from "@emotion/native";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/queryClient";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const StyledSafe = styled.View<{ topInset: number }>(({ theme, topInset }) => ({
  flex: 1,
  backgroundColor: theme.colors.bg.primary,
  paddingTop: topInset,
}));

const RootLayout = () => {
  const insets = useSafeAreaInsets();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <StyledSafe topInset={insets.top}>
          <Stack>
            <Stack.Screen
              name="(tabs)"
              options={{
                headerShown: false,
              }}
            />
          </Stack>
        </StyledSafe>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default RootLayout;
