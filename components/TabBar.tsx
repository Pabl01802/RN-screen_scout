import React, { useEffect } from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import styled from "@emotion/native";
import { BodyText } from "./Text/BodyText";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useTheme } from "@emotion/react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useHomeListStore } from "../hooks/stores/useHomeListStore";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

const TabsContainer = styled(Animated.View)<{ insets: number }>(
  ({ theme, insets }) => ({
    backgroundColor: theme.colors.bg.tertiary,
    position: "absolute",
    bottom: !insets ? 10 : insets / 1.5,
    left: "50%",
    transform: [
      {
        translateX: "-50%",
      },
    ],
    borderRadius: theme.spacings.xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: theme.spacings.m,
    paddingHorizontal: theme.spacings.xl,
    gap: theme.spacings.lg,
  })
);

const TabContainer = styled.TouchableOpacity({
  alignItems: "center",
  justifyContent: "center",
});

type Icons = {
  [key: string]: {
    icon: React.ReactNode;
    label: string;
  };
};

export const TabBar = ({ state, navigation }: BottomTabBarProps) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const isScrolling = useHomeListStore((state) => state.isScrolling);
  const barOpacity = useSharedValue(0);

  useEffect(() => {
    if (isScrolling) {
      barOpacity.value = withSpring(0);
    } else {
      barOpacity.value = withSpring(1);
    }
  }, [isScrolling]);

  const icons: Icons = {
    index: {
      icon: (
        <FontAwesome name="home" size={24} color={theme.colors.bg.secondary} />
      ),
      label: "Home",
    },
    saved: {
      icon: (
        <FontAwesome
          name="download"
          size={24}
          color={theme.colors.bg.secondary}
        />
      ),
      label: "Saved",
    },
  };

  return (
    <TabsContainer
      insets={insets.bottom}
      style={{ opacity: barOpacity }}
      pointerEvents={isScrolling ? "none" : "auto"}
    >
      {state.routes.map((route) => (
        <TabContainer
          key={route.key}
          onPress={() => navigation.navigate(route.name)}
        >
          {icons[route.name as keyof Icons].icon}
          <BodyText>{icons[route.name as keyof Icons].label}</BodyText>
        </TabContainer>
      ))}
    </TabsContainer>
  );
};
