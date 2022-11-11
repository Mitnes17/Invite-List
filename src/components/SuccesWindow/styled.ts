import styled from 'styled-components';

export const H3 = styled.h3`
  font-size: 40px;
`;

export const P = styled.p`
  font-size: 20px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #c4dfe6;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  animation: success 1s cubic-bezier(0.25, 0.75, 0.5, 1.25);
  img {
    width: 50%;
    height: auto;
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
