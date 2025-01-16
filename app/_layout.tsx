import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Stack } from "expo-router";
import { theme } from "./theme/theme";
import styled from "@emotion/native";

const StyledSafe = styled.SafeAreaView(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.bg.primary,
}));

const RootLayout = () => (
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
);

export default RootLayout;
