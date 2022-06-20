import React, { useState } from "react";
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
} from "./styled";

const LoginTitle = "Login";
const RegistrationTitle = "Registration";

export function Login(): JSX.Element {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
  };
  return (
    <Container>
      <MainWrapper>
        <RegistrationNavigation>
          <LoginTitleButton>{LoginTitle}</LoginTitleButton>
          <RegistrationTitleButton>{RegistrationTitle}</RegistrationTitleButton>
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
          <SubmitButton className="button-container">
            <SubmitInput type="submit" />
          </SubmitButton>
          <ForgotPasswordWrapper></ForgotPasswordWrapper>
        </Form>
      </MainWrapper>
    </Container>
  );
}
