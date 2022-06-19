import React from "react";
import "./App.css";
import { Header, CardList } from "../../components/index";
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
