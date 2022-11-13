import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  width: 360px;
  height: 80vh;
  row-gap: 50px;
  padding: 50px 30px 30px 30px;
  border-radius: 30px;
  overflow-y: auto;
  border: 1px solid gray;
  background-color: #c4dfe6;

  @media (min-width: 768px) {
    width: 740px;
  }
`;

export const UserList = styled.ul`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: space-between;
  row-gap: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-items: stretch;
    column-gap: 50px;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  min-height: 50px;
  margin-bottom: 30px;
  border: 1px solid gray;
  border-radius: 30px;
  background-color: #66a5ad;

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

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SkeletWrap = styled.div`
  display: flex;
  flex: 1 40%;
  flex-wrap: wrap;
  column-gap: 50px;
`;
