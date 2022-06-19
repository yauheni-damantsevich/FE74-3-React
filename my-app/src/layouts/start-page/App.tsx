import React from "react";
import "./App.css";
import { Header } from "../../components/header/header";
import { ICard } from "../../components/card/types";
import { Card } from "../../components/index";
import { MainDiv, Main, MainWrapper, Container } from "./styled";

const cardObject: ICard = {
  id: 0,
  image: "string",
  text: "string",
  date: "2021-12-12",
  lesson_num: 0,
  title: "string",
  author: 0,
};

export function App(): JSX.Element {
  return (
    <MainDiv className="App">
      <Header />
      <Main>
        <MainWrapper>
          <Container>
            <Card
              image={cardObject.image}
              text={cardObject.text}
              date={cardObject.date}
              title={cardObject.title}
            />
          </Container>
        </MainWrapper>
      </Main>
    </MainDiv>
  );
}

export default App;
