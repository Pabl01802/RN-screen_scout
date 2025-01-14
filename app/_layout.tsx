import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Stack } from "expo-router";
import { theme } from "./theme/theme";

const RootLayout = () => (
  <ThemeProvider theme={theme}>
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  </ThemeProvider>
);

export default RootLayout;
