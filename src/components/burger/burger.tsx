import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Icon,
  MenuWrapper,
  List,
  ListItem,
  ListButton,
} from "./styled";
import { MainDiv } from "./styled";
import burgerIcon from "../../assets/menu.svg";
import { useAuth } from "../../services/useAuth";

export const Burger = (): JSX.Element => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { logout } = useAuth();
  const handleLogout = (): void => {
    logout();
  };
  return (
    <MainDiv>
      <Button onClick={() => setOpen(!open)}>
        <Icon src={burgerIcon} />
      </Button>
      {open && (
        <MenuWrapper>
          <List>
            <ListItem>
              <ListButton
                onClick={() => {
                  navigate("/main");
                  setOpen(!open);
                }}
              >
                Main
              </ListButton>
            </ListItem>
            <ListItem>
              <ListButton
                onClick={() => {
                  navigate("/all_posts");
                  setOpen(!open);
                }}
              >
                All Posts
              </ListButton>
            </ListItem>
            <ListItem>
              <ListButton>My Posts</ListButton>
            </ListItem>
            <ListItem>
              <ListButton>Add Posts</ListButton>
            </ListItem>
            <ListItem>
              <ListButton
                onClick={() => {
                  handleLogout();
                  setOpen(!open);
                }}
              >
                Logout
              </ListButton>
            </ListItem>
          </List>
        </MenuWrapper>
      )}
    </MainDiv>
  );
};
