import React from "react";
import "./App.css";
import { Header } from "./components/index";
import { Login } from "./layouts/login/login";
import { MainDiv, Main, MainWrapper, Container } from "./styled";

export function App(): JSX.Element {
  return (
    <MainDiv className="App">
      <Header />
      <Main>
        <MainWrapper>
          <Container>
            <Login />
          </Container>
        </MainWrapper>
      </Main>
    </MainDiv>
  );
}

export default App;
