import React from "react";
import { IBurgerAccountButton } from "./types";
import { Button, Icon, AccountName } from "./styled";

export const BurgerAccountButton = ({
  username,
  accountIcon,
}: IBurgerAccountButton): JSX.Element => {
  return (
    <Button>
      <Icon src={accountIcon} />
      <AccountName>{username}</AccountName>
    </Button>
  );
};
