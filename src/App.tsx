import React from "react";
import "./App.css";
import { Header } from "./components/header/header";
import { Route, Routes } from "react-router-dom";
import { MainDiv, Main, Container } from "./styled";
import { AllPosts } from "./layouts/all-posts/all-posts";
import { MainPage } from "./layouts/main-page/main-page";
import { Login } from "./layouts/login/login";
import { Registration } from "./layouts/registration/registration";
import { ResetPassword } from "./layouts/reset-password/reset-password";
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
            <Route path="/main" element={<MainPage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/registration" element={<Registration />}></Route>
            <Route path="/reset_password" element={<ResetPassword />}></Route>
          </Routes>
        </Container>
      </Main>
    </MainDiv>
  );
}

export default App;
