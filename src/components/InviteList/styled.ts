import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  width: 95vw;
  height: 80vh;
  border: 1px solid gray;
  border-radius: 30px;
  background-color: #c4dfe6;
  display: flex;
  flex-direction: column;
  padding: 30px;
  overflow-y: auto;
  padding-top: 50px;
  row-gap: 50px;
`;

export const UserList = styled.ul`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: space-between;
  row-gap: 30px;
  margin-bottom: 80px;
`;

export const SearchBar = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  min-height: 50px;
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

export const SendBtn = styled.a`
  font-size: 30px;
  border-radius: 15px;
  padding: 10px 15px;
  text-align: center;
  width: 70%;
  background: linear-gradient(to right, #5545d6, #7f228c, #908df5, #e43d3c);
  position: fixed;
  box-shadow: 0 4px 15px 0 rgba(136, 92, 197, 0.2);
  position: fixed;
  bottom: 20%;
  left: 50%;
  transition: 0.3s;
  transform: translate(-50%, 0);
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    background: linear-gradient(to right, #5a70d4, #834fb9, #5a80d2, #892ad8);
    box-shadow: 0 4px 15px 0 rgba(123, 45, 160, 0.75);
  }

  &:focus {
    outline: none;
  }
`;
