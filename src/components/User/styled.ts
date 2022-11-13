import styled from 'styled-components';

export const User = styled.li`
  display: flex;
  max-width: 100%;
  column-gap: 10px;
  list-style-type: none;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    justify-content: space-between;
    flex: 1;
  }
`;

export const NameEmail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const AddBtn = styled.a`
  position: relative;
  align-self: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #66a5ad;
  cursor: pointer;

  &::after,
  &::before {
    content: '';
    display: block;
    top: calc(50% - 1px);
    width: 16px;
    height: 2px;
    background: #c4dfe6;
    border-radius: 1.25px;
    position: absolute;
    transition: 0.3s;
  }

  &::after {
    left: calc(50% - 8px);
    transition: 0.3s ease-in-out;
    transform: rotate(90deg);
  }

  &::before {
    left: calc(50% - 8px);
    transition: 0.3s ease-in-out;
  }

  &.isInvited {
    &::after {
      transform: rotate(180deg);
    }
  }
`;

export const Email = styled.h4`
  font-style: normal;
  font-size: small;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 2;
`;
