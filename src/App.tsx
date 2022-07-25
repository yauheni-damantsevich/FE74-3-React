import React from "react";
import "./App.css";
import { Header } from "./components/header/header";
import { Route, Routes } from "react-router-dom";
import { MainDiv, Main, Container } from "./styled";
import { AllPosts } from "./layouts/all-posts/all-posts";
import { App as StartPage } from "./layouts/start-page/App";
import { Login } from "./layouts/login/login";
import { Registration } from "./layouts/registration/registration";
import { ProtectedRoute } from "./components/protected-route/ProtectedRoute";
export function App(): JSX.Element {
  return (
    <MainDiv className="App">
      <Header />
      <Main>
        <Container>
          <Routes>
            <Route
              path="/all_posts"
              element={
                <ProtectedRoute>
                  <AllPosts />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="/main" element={<StartPage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/registration" element={<Registration />}></Route>
          </Routes>
        </Container>
      </Main>
    </MainDiv>
  );
}

export default App;
