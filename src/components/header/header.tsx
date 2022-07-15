import React from "react";
import { Burger } from "../burger/burger";
import { Account } from "../account/account";
import { NavigationBar, Container } from "./styled";

export const Header = (): JSX.Element => {
  return (
    <NavigationBar className="App">
      <Container>
        <Burger />
        <Account />
      </Container>
    </NavigationBar>
  );
};
