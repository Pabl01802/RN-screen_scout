import React from "react";
import styled from "@emotion/native";
import { BodyTextProps } from "../../utils/interfaces";
import { Heading1 } from "./Heading1";

const StyledHeading = styled(Heading1)({
  fontSize: 20,
});

export const Heading3 = ({ children, ...props }: BodyTextProps) => (
  <StyledHeading {...props}>{children}</StyledHeading>
);
