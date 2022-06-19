import React from "react";
import "./App.css";
import backgroundImage from "../../assets/background.jpg";
import { MainBlock } from "../../components/index";
import { Header } from "../../components/header/header";
import { IMainBlock } from "../../components/main-block/types";
import {
  MainDiv,
  Main,
  MainWrapper,
  Container,
  MainBlockWrapper,
  Img,
} from "./styled";

const content: IMainBlock = {
  header: "Make your Blog ",
  online: "Online",
  paragraph:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  learnMoreButton: "Learn More",
};

function App(): JSX.Element {
  return (
    <MainDiv className="App">
      <Header />
      <Main>
        <MainWrapper>
          <Container>
            <MainBlockWrapper>
              <MainBlock
                header={content.header}
                online={content.online}
                paragraph={content.paragraph}
                learnMoreButton={content.learnMoreButton}
              />
            </MainBlockWrapper>
          </Container>
          <Img src={backgroundImage} alt="background" className="" />
        </MainWrapper>
      </Main>
    </MainDiv>
  );
}

export default App;
