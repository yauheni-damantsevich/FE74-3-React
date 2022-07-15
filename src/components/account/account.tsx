import React from "react";
import { Button, Icon, AccountName } from "./styled";
import accountIcon from "../../assets/account.svg";
const username = "Yauheni Damantsevich";

export const Account = (): JSX.Element => {
  return (
    <Button>
      <Icon src={accountIcon} />
      <AccountName>{username}</AccountName>
    </Button>
  );
};
