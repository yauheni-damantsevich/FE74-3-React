import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../services/useAuth";
import {
  Container,
  MainWrapper,
  RegistrationNavigation,
  LoginTitleButton,
  RegistrationTitleButton,
  Form,
  Label,
  Input,
  SubmitButton,
  SubmitInput,
  EmailPasswordWrapper,
  ForgotPasswordWrapper,
  ForgotPasswordButton,
} from "./styled";

const LoginTitle = "Login";
const RegistrationTitle = "Registration";

export function Login(): JSX.Element {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    await login(email, password);
    navigate("/all_posts");
  };
  return (
    <Container>
      <MainWrapper>
        <RegistrationNavigation>
          <LoginTitleButton
            onClick={() => {
              navigate("/login");
            }}
          >
            {LoginTitle}
          </LoginTitleButton>
          <RegistrationTitleButton
            onClick={() => {
              navigate("/registration");
            }}
          >
            {RegistrationTitle}
          </RegistrationTitleButton>
        </RegistrationNavigation>

        <Form onSubmit={handleSubmit}>
          <EmailPasswordWrapper>
            <Label htmlFor="email">Email</Label>
            <Input
              placeholder="Your Email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </EmailPasswordWrapper>
          <EmailPasswordWrapper>
            <Label htmlFor="password">Password</Label>
            <Input
              placeholder="Your Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </EmailPasswordWrapper>
          <ForgotPasswordWrapper>
            <ForgotPasswordButton
              onClick={() => {
                navigate("/reset_password");
              }}
            >
              Forgot password?
            </ForgotPasswordButton>
          </ForgotPasswordWrapper>
          <SubmitButton>
            <SubmitInput type="submit" />
          </SubmitButton>
        </Form>
      </MainWrapper>
    </Container>
  );
}
