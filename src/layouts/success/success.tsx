import React from "react";
import { MainWrapper, H2, Paragraph, Button } from "./styled";
import { ISuccess } from "./types";

export function Success({
  title,
  paragraph,
  buttonText,
}: ISuccess): JSX.Element {
  return (
    <MainWrapper>
      <H2>{title}</H2>
      <Paragraph>{paragraph}</Paragraph>
      <Button>{buttonText}</Button>
    </MainWrapper>
  );
}
