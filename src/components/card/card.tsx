import React from "react";

import { ICardProps } from "./types";
import { Wrapper, Img, H3, Paragraph, Date } from "./styled";

export const Card = ({ image, text, date, title }: ICardProps): JSX.Element => {
  return (
    <Wrapper>
      <Img src={image}></Img>
      <H3>{title}</H3>
      <Paragraph>{text}</Paragraph>
      <Date>{date}</Date>
    </Wrapper>
  );
};
