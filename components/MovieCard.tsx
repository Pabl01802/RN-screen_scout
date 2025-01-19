import React, { useEffect, useState } from "react";
import { Movie } from "../utils/interfaces";
import styled from "@emotion/native";
import { getSmallImage } from "../utils/images/getSmallImage";
import { TouchableOpacity } from "react-native";
import Animated, {
  runOnJS,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { withOpacity } from "../utils/withOpacity";
import { useTheme } from "@emotion/react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const StyledView = styled(Animated.View)(({ theme }) => ({
  backgroundColor: withOpacity(theme.colors.bg.tertiary, 0.7),
  width: "100%",
  height: "100%",
  zIndex: 2,
  position: "absolute",
  borderRadius: theme.spacings.m,
  justifyContent: "center",
  alignItems: "center",
}));

const StyledImage = styled(Animated.Image)(({ theme }) => ({
  borderRadius: theme.spacings.m,
  width: 170,
  height: 240,
}));

const IconsContainer = styled.View(({ theme }) => ({
  flexDirection: "row",
  gap: theme.spacings.m,
  transform: [
    {
      scaleX: -1,
    },
  ],
}));

interface MovieCardProps {
  data: Movie;
  selected: SharedValue<number | undefined>;
}

export const MovieCard = ({ data, selected }: MovieCardProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const rotateValue = useSharedValue("0deg");
  const darkBgOpacity = useSharedValue(0);
  const theme = useTheme();

  useEffect(() => {
    rotateValue.value = withTiming(isSelected ? "180deg" : "0deg");
    darkBgOpacity.value = withTiming(isSelected ? 1 : 0);
  }, [isSelected]);

  useDerivedValue(() => {
    runOnJS(setIsSelected)(selected.value === data.id);
  }, [selected.value]);

  const animatedRotateStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotateY: rotateValue.value,
      },
    ],
  }));

  const animatedDarkBgStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotateY: rotateValue.value,
      },
    ],
    opacity: darkBgOpacity.value,
  }));

  return (
    <TouchableOpacity
      onPress={() => {
        selected.value = isSelected ? undefined : data.id;
      }}
    >
      <StyledView style={animatedDarkBgStyle}>
        <IconsContainer>
          <FontAwesome
            name="info-circle"
            size={32}
            color={theme.colors.bg.secondary}
          />
          <FontAwesome
            name="download"
            size={32}
            color={theme.colors.bg.secondary}
          />
        </IconsContainer>
      </StyledView>
      <StyledImage
        source={{
          uri: getSmallImage(data.poster_path),
        }}
        style={animatedRotateStyle}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};
