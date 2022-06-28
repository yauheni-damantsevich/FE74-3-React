import React from "react";
import { CardList } from "../../components/card-list/card-list";
import { Container, MainWrapper, Navigation, H2, Button } from "./styled";
import { IAllPosts } from "./types";

const addPosts = "Add Posts";

export const AllPosts = ({ allPostTitle }: IAllPosts): JSX.Element => {
  return (
    <Container>
      <MainWrapper>
        <Navigation>
          <H2>{allPostTitle}</H2>
          <Button>{addPosts}</Button>
        </Navigation>
        <CardList />
      </MainWrapper>
    </Container>
  );
};
