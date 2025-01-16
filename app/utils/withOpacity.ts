const hexRegex = /^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const rgbaRegex =
  /rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(?:,\s*(\d+(?:\.\d+)?))?\)/;
const rgbRegex = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;

/**
 * Puts an opacity on the color. Replaces opacity if already set on original color
 *
 * @param color in hex, rgb, rgba formats
 * @param opacity from 0 to 1
 */
export const withOpacity = (color: string, opacity: number): string => {
  const decimalOpacity = Math.round(opacity * 255);
  const hexOpacity = decimalOpacity.toString(16).padStart(2, "0");

  //Supports hexadecimal string
  if (hexRegex.test(color)) {
    // Changes 3-digit hexadecimal color code to 6 and adds opacity to it
    if (color.length === 4) {
      // Remove the '#' symbol from the beginning and duplicate each digit
      const colorSixDigit = color
        .slice(1)
        .split("")
        .map((digit) => digit + digit)
        .join("");
      return `#${colorSixDigit}${hexOpacity}`;
    }

    const colorRGB = color.length === 9 ? color.slice(0, 7) : color;
    return `${colorRGB}${hexOpacity}`;
  }

  //Supports RGBA string
  else if (rgbaRegex.test(color)) {
    const matches = color.match(/\d+/g);
    if (matches?.length === 4) {
      matches.pop();
    }
    matches?.push(opacity.toString());
    return `rgba(${matches?.join(",")})`;
  }

  //Supports RGB string
  else if (rgbRegex.test(color)) {
    const matches = color.match(/\d+/g);
    if (matches?.length === 3) {
      matches.pop();
    }
    matches?.push(opacity.toString());
    return `rgb(${matches?.join(",")})`;
  }

  return color;
};
