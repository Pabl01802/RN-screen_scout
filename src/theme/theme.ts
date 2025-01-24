import { colors } from "./colors";
import { hitSlop } from "./hitSlop";
import { spacings } from "./spacings";

export const theme = {
  colors: {
    ...colors,
  },
  spacings: {
    ...spacings,
  },
  hitSlop,
};

type AppTheme = typeof theme;

declare module "@emotion/react" {
  interface Theme extends AppTheme {}
}
