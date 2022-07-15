import styled from "@emotion/styled";

export const InformationNavigation = styled.div``;
export const Tab = styled.button`
  position: relative;
  padding: 12px;
  font-size: 18px;
  background-color: #fff;
  border: none;
  &:focus::after {
    position: absolute;
    content: "";
    top: 100%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #000;
  }
`;
export const Ul = styled.ul`
  padding: 0;
  display: flex;
`;
export const Li = styled.li`
  list-style: none;
`;
export const InformationBody = styled.div``;
export const Paragraph = styled.div``;
export const ParagraphTab1 = styled.p``;
export const ParagraphTab2 = styled.p``;
export const ParagraphTab3 = styled.p``;
