import React from "react";
import "./App.css";
import { Header } from "../../components/header/header";
import { CardList } from "../../components/card-list/card-list";
import { MainDiv, Main, MainWrapper, Container } from "./styled";

export function App(): JSX.Element {
  return (
    <MainDiv className="App">
      <Header />
      <Main>
        <MainWrapper>
          <Container>
            <CardList />
          </Container>
        </MainWrapper>
      </Main>
    </MainDiv>
  );
}

export default App;
