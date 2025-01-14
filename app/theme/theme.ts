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

export type AppTheme = typeof theme;
