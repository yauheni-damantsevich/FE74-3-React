import styled from "@emotion/styled";

export const MainDiv = styled.div``;

export const Button = styled.button`
  background-color: #2231aa;
  border: none;
`;

export const Icon = styled.img`
  max-width: 24px;
  max-height: 24px;
  margin: 30px;
`;

export const MenuWrapper = styled.div`
  position: absolute;
  display: flex;
  background-color: #5360cd;
  padding: 0 30px 0 30px;
  border-radius: 0 0 8px 8px;
  filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
`;

export const List = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  list-style-type: none;
  margin: 24px;
`;

export const ListButton = styled.button`
  background-color: transparent;
  border: none;

  &:active {
    font-weight: bold;
  }
  &:focus {
    font-weight: bold;
  }
`;
