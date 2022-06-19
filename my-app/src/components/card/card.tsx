import React from "react";

import { ICardProps } from "./types";
import { Wrapper, Img, H2, Paragraph, Date } from "./styled";

export const Card = ({ image, text, date, title }: ICardProps): JSX.Element => {
  return (
    <Wrapper>
      <Img src={image}></Img>
      <H2>{title}</H2>
      <Paragraph>{text}</Paragraph>
      <Date>{date}</Date>
    </Wrapper>
  );
};
