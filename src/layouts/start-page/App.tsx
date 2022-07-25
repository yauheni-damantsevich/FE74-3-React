import React from "react";
import "./App.css";
import { Header } from "../../components/header/header";
import { MainBlock } from "../../components/main-block/main-block";
import { Container, MainBlockWrapper } from "./styled";

interface IMainBlock {
  header: string;
  online: string;
  paragraph: string;
  learnMoreButton: string;
}

const content: IMainBlock = {
  header: "Make your Blog ",
  online: "Online",
  paragraph:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  learnMoreButton: "Learn More",
};

export function App(): JSX.Element {
  return (
    <main>
      <Container>
        <MainBlockWrapper>
          <MainBlock
            header={content.header}
            online={content.online}
            paragraph={content.paragraph}
            learnMoreButton={content.learnMoreButton}
          />
        </MainBlockWrapper>{" "}
      </Container>
    </main>
  );
}

export default App;
