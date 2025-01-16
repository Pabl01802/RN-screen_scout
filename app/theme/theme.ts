import { colors } from "./colors";
import { spacings } from "./spacings";

export const theme = {
  colors: {
    ...colors,
  },
  spacings: {
    ...spacings,
  },
};

type AppTheme = typeof theme;

declare module "@emotion/react" {
  interface Theme extends AppTheme {}
}
