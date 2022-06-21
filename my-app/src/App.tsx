import React from "react";
import "./App.css";
import { Header } from "./components/index";
import { SelectedPost } from "./layouts/selected-post/selected-post";
import { ISelectedPost } from "./layouts/selected-post/types";
import { MainDiv, Main } from "./styled";

const PageTitle: ISelectedPost = { selectedPostTitle: "Selected Post" };

export function App(): JSX.Element {
  return (
    <MainDiv className="App">
      <Header />
      <Main>
        <SelectedPost selectedPostTitle={PageTitle.selectedPostTitle} />
      </Main>
    </MainDiv>
  );
}

export default App;
