import React from "react";
import { ScrollableContainer } from "../components/ScrollableContainer";
import { MoviesCarousel } from "../components/MoviesCarousel";

const Home = () => {
  return (
    <ScrollableContainer>
      <MoviesCarousel />
    </ScrollableContainer>
  );
};
export default Home;
