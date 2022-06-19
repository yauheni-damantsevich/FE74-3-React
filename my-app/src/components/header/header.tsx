import React from "react";
import { BurgerWrapper } from "../index";
import { IHeaderProps } from "./types";
import { BurgerAccountButton } from "../index";
import { NavigationBar, Container } from "./styled";
import burgerIcon from "../../assets/menu.svg";
import accountIcon from "../../assets/account.svg";
const username = "Yauheni Damantsevich";

export const Header = (props: IHeaderProps): JSX.Element => {
  return (
    <NavigationBar className="App">
      <Container>
        <BurgerWrapper content={burgerIcon} />
        <BurgerAccountButton accountIcon={accountIcon} username={username} />
      </Container>
    </NavigationBar>
  );
};
