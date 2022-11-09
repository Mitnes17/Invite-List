import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  width: 95vw;
  height: 95vh;
  border: 1px solid gray;
  border-radius: 30px;
  background-color: #c4dfe6;
  display: flex;
  flex-direction: column;
  padding: 30px;
  overflow-y: auto;
  padding-top: 50px;
  /* justify-content: space-around; */
  row-gap: 50px;
`;

export const UserList = styled.ul`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: space-between;
  row-gap: 50px;
`;

export const SearchBar = styled.div`
  display: flex;
  width: 99%;
  padding: 10px 0;
  border: 1px solid gray;
  border-radius: 30px;
  background-color: #66a5ad;
  justify-content: space-evenly;
  align-items: center;

  svg {
    width: 25px;
    height: auto;
  }
`;

export const Input = styled.input`
  width: 70%;
  height: 100%;
  background-color: rgb(255, 255, 255, 0);
  border: none;
  &:focus {
    outline: none;
  }
`;

export const SendBtn = styled.a``;
