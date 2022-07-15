import React from "react";
import { CardList } from "../../components/card-list/card-list";
import { Container, MainWrapper, Navigation, H2 } from "./styled";
import { ISelectedPost } from "./types";

export const SelectedPost = ({
  selectedPostTitle,
}: ISelectedPost): JSX.Element => {
  return (
    <Container>
      <MainWrapper>
        <Navigation>
          <H2>{selectedPostTitle}</H2>
        </Navigation>
        <CardList />
      </MainWrapper>
    </Container>
  );
};
