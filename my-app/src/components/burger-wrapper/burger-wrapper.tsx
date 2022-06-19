import React, { useState } from "react";
import { Menu } from "../index";
import { Button, Icon } from "./styled";
import { MenuWrapper } from "../index";
import { IBurgerWrapper } from "./types";
import { MainDiv } from "./styled";

const menu = {
  allPosts: "All Posts",
  myPosts: "My Posts",
  addPosts: "Add Posts",
  logOut: "Log Out",
};

export const BurgerWrapper = ({ content }: IBurgerWrapper): JSX.Element => {
  const [open, setOpen] = useState(false);
  return (
    <MainDiv>
      <Button onClick={() => setOpen(!open)}>
        <Icon src={content} />
      </Button>
      {open && (
        <MenuWrapper>
          <Menu
            allPosts={menu.allPosts}
            myPosts={menu.myPosts}
            addPosts={menu.addPosts}
            logOut={menu.logOut}
          />
        </MenuWrapper>
      )}
    </MainDiv>
  );
};
