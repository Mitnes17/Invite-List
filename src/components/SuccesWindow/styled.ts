import styled from 'styled-components';

export const H3 = styled.h3`
  font-size: 60px;
  color: teal;
`;

export const P = styled.p`
  font-size: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #c4dfe6;
  animation: success 1s;

  img {
    width: 180px;
    height: 180px;
  }

  @keyframes success {
    0% {
      opacity: 0;
      transform: scale(0.7);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
