import React from "react";
import "./App.css";
import { Header } from "./components/index";
import { Success } from "./layouts/success/success";
import { ISuccess } from "./layouts/success/types";
import { MainDiv, Main, MainWrapper, Container } from "./styled";

export const successData: ISuccess = {
  title: "Success",
  paragraph: "Email confirmed. Your registration is now completed",
  buttonText: "Login",
};

export function App(): JSX.Element {
  return (
    <MainDiv className="App">
      <Header />
      <Main>
        <MainWrapper>
          <Container>
            <Success
              title={successData.title}
              paragraph={successData.paragraph}
              buttonText={successData.buttonText}
            />
          </Container>
        </MainWrapper>
      </Main>
    </MainDiv>
  );
}

export default App;
