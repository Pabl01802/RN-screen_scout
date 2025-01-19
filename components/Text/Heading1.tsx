import React from "react";
import styled from "@emotion/native";
import { BodyTextProps } from "../../utils/interfaces";
import { BodyText } from "./BodyText";

const Heading = styled(BodyText)({
  fontSize: 28,
});

export const Heading1 = ({ children, ...props }: BodyTextProps) => (
  <Heading {...props}>{children}</Heading>
);
