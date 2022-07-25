import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Icon, AccountName } from "./styled";
import accountIcon from "../../assets/account.svg";
import { useAuth } from "../../services/useAuth";
const loginTitle = "Login";

export const Account = (): JSX.Element => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const { userEmail } = useAuth();

  return (
    <Button
      onClick={() => {
        navigate("/login");
        setOpen(!open);
      }}
    >
      <Icon src={accountIcon} />
      <AccountName>{!user ? loginTitle : userEmail}</AccountName>
    </Button>
  );
};
