import React from "react";
import { IMainBlock } from "./types";
import { H1, Online, Paragraph, Button } from "./styled";

export const MainBlock = ({
  header,
  online,
  paragraph,
  learnMoreButton,
}: IMainBlock): JSX.Element => {
  return (
    <div>
      <H1>
        {header}
        <Online>{online}</Online>
      </H1>
      <Paragraph>{paragraph}</Paragraph>
      <Button>{learnMoreButton}</Button>
    </div>
  );
};

export default MainBlock;
