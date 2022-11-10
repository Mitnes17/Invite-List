import styled from 'styled-components';

export const User = styled.li`
  list-style-type: none;
  display: flex;
  max-width: 100%;
  column-gap: 10px;
  img {
    border-radius: 50%;
    width: 100px;
    height: auto;
  }
`;

export const NameEmail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const AddBtn = styled.a`
  width: 30px;
  height: 30px;
  align-self: center;
  background: #66a5ad;
  border-radius: 50%;
  position: relative;
  cursor: pointer;

  &::after,
  &::before {
    content: '';
    display: block;
    width: 16px;
    height: 2px;
    background: #c4dfe6;
    border-radius: 1.25px;
    position: absolute;
    transition: 0.3s;
    top: calc(50% - 1px);
  }

  &::after {
    transition: 0.3s ease-in-out;
    left: calc(50% - 8px);
    transform: rotate(90deg);
  }

  &::before {
    transition: 0.3s ease-in-out;
    left: calc(50% - 8px);
  }

  &.active {
    &::after {
      transform: rotate(180deg);
    }
  }
`;

export const FullName = styled.h3``;

export const Email = styled.h4`
  font-style: normal;
  font-size: small;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 2;
`;
