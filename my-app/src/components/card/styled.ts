import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px;
  background-color: #fff;
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
  border-radius: 4px;
`;
export const Img = styled.img`
  width: 400px;
  height: 400px;
  display: flex;
  object-fit: cover;
`;
export const H3 = styled.h3`
  font-size: 18px;
`;
export const Paragraph = styled.p`
  font-size: 16px;
`;
export const Date = styled.span`
  font-size: 14px;
  color: #8d8e97;
`;
