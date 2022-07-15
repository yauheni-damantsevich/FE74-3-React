import React from "react";
import "./App.css";
import { Header } from "./components/header/header";
import { Route, Routes } from "react-router-dom";
import { MainDiv, Main, Container } from "./styled";
import { AllPosts } from "./layouts/all-posts/all-posts";

export function App(): JSX.Element {
  return (
    <MainDiv className="App">
      <Header />
      <Main>
        <Container>
          <Routes>
            <Route path="/all_posts" element={<AllPosts />}></Route>
            <Route path="/main"></Route>
          </Routes>
        </Container>
      </Main>
    </MainDiv>
  );
}

export default App;
