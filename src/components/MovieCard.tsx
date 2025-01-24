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
import { useRouter } from "expo-router";
import { useSavedMoviesStore } from "../hooks/stores/useSavedMoviesStore";

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
  const storage = useSavedMoviesStore((state) => state.movies);
  const saveMovie = useSavedMoviesStore((state) => state.addMovie);
  const removeMovie = useSavedMoviesStore((state) => state.removeMovie);

  const [isSelected, setIsSelected] = useState(false);

  const rotateValue = useSharedValue("0deg");
  const darkBgOpacity = useSharedValue(0);
  const theme = useTheme();
  const router = useRouter();

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

  const isSaved = !!storage.find((movie) => movie.id === data.id);

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
            onPress={() => router.push(`/movies/${data.id}`)}
          />
          {!isSaved ? (
            <FontAwesome
              name="download"
              size={32}
              color={theme.colors.bg.secondary}
              onPress={() =>
                saveMovie({
                  id: data.id,
                  title: data.title,
                  posterPath: data.poster_path,
                })
              }
            />
          ) : (
            <FontAwesome
              name="times-circle"
              size={32}
              color={theme.colors.bg.secondary}
              onPress={() => removeMovie(data.id)}
            />
          )}
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
