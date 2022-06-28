import React from "react";
import "./App.css";
import { Header } from "./components/index";
import { AllPosts } from "./layouts/all-posts/all-posts";
import { IAllPosts } from "./layouts/all-posts/types";
import { MainDiv, Main } from "./styled";

const PageTitle: IAllPosts = { allPostTitle: "All Posts" };

export function App(): JSX.Element {
  return (
    <MainDiv className="App">
      <Header />
      <Main>
        <AllPosts allPostTitle={PageTitle.allPostTitle} />
      </Main>
    </MainDiv>
  );
}

export default App;
