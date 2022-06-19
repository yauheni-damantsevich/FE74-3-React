import styled from "@emotion/styled";

export const MenuWrapper = styled.div`
  display: flex;
  background-color: #5360cd;
  padding: 0 30px 0 30px;
  border-radius: 0 0 8px 8px;
  filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
`;

export const UnorderedListWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

export const UnorderedList = styled.ul`
  min-width: max-content;
`;

export const ListItem = styled.li`
  margin: 24px;
`;
