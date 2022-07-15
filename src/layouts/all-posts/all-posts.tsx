import React from "react";
import { CardList } from "../../components/card-list/card-list";
import { Container, MainWrapper, Navigation, H2, Button } from "./styled";

const addPosts = "Add Posts";

export const AllPosts = (): JSX.Element => {
  return (
    <Container>
      <MainWrapper>
        <Navigation>
          <H2>All Posts</H2>
          <Button>{addPosts}</Button>
        </Navigation>
        <CardList />
      </MainWrapper>
    </Container>
  );
};
