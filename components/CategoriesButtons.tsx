import React, { Dispatch, SetStateAction } from "react";
import styled from "@emotion/native";
import { Button } from "./Button";
import { useTheme } from "@emotion/react";
import { Category } from "../utils/interfaces";

const CategoryButton = styled(Button)(({ theme }) => ({
  paddingVertical: theme.spacings.xs,
  paddingHorizontal: theme.spacings.lg,
  height: 40,
}));

const ButtonsContainer = styled.ScrollView(({ theme }) => ({
  flexDirection: "row",
  paddingVertical: theme.spacings.lg,
}));

interface CategoriesButtonsProps {
  category: Category;
  setCategory: Dispatch<SetStateAction<Category>>;
}

export const CategoriesButtons = ({
  category,
  setCategory,
}: CategoriesButtonsProps) => {
  const theme = useTheme();

  const categories: Category[] = [
    "Popular",
    "Now Playing",
    "Upcoming",
    "Top Rated",
  ];

  const handleSelectCategory = (_category: Category) => {
    setCategory(_category);
  };

  return (
    <ButtonsContainer
      horizontal
      contentContainerStyle={{
        gap: theme.spacings.s,
        alignItems: "center",
      }}
    >
      {categories.map((_category) => (
        <CategoryButton
          key={_category}
          onPress={() => handleSelectCategory(_category)}
          secondary={_category !== category}
        >
          {_category}
        </CategoryButton>
      ))}
    </ButtonsContainer>
  );
};
