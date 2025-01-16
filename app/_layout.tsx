import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Stack } from "expo-router";
import { theme } from "./theme/theme";
import styled from "@emotion/native";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/queryClient";

const StyledSafe = styled.SafeAreaView(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.bg.primary,
}));

const RootLayout = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <StyledSafe>
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

export default RootLayout;
