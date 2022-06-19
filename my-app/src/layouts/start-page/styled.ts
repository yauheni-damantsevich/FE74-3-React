import styled from "@emotion/styled";

export const MainDiv = styled.div`
  position: relative;
`;

export const Main = styled.div`
  display: absolute;
  width: 100%
  justify-content: center;
`;

export const MainWrapper = styled.div`
  max-height: 100vh;
  overflow: hidden;
`;

export const Container = styled.div`
  width: 100%;
  margin: auto;
  padding: 0 16px 0 16px;
  display: flex;
`;

export const MainBlockWrapper = styled.div`
  z-index: 10;
  position: absolute;
  top: 50%;
`;

export const Img = styled.img`
  width: 100vw;
`;
