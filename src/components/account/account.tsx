import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Icon, AccountName } from "./styled";
import accountIcon from "../../assets/account.svg";
const username = "Account";

export const Account = (): JSX.Element => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <Button
      onClick={() => {
        navigate("/login");
        setOpen(!open);
      }}
    >
      <Icon src={accountIcon} />
      <AccountName>{username}</AccountName>
    </Button>
  );
};
