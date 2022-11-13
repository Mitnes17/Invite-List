import { Props } from './Button.d';
import styled from 'styled-components';

export const Button = styled.a<Props>`
  position: ${({ position }) => (position ? position : 'fixed')};
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: ${({ bot }) => (bot ? bot : '230px')};
  text-align: center;
  width: 266px;
  padding: 10px 15px;
  border-radius: 15px;
  font-size: 30px;
  opacity: 1;
  pointer-events: auto;
  background: linear-gradient(to right, #5545d6, #7f228c, #908df5, #e43d3c);
  box-shadow: 0 4px 15px 0 rgba(136, 92, 197, 0.2);
  transition: 0.3s;
  cursor: pointer;

  &.isHidden {
    opacity: 0;
    pointer-events: none;
    transition: 0.3s;
  }

  &:hover {
    transition: 0.3s;
    background: linear-gradient(to right, #5a70d4, #834fb9, #5a80d2, #892ad8);
    box-shadow: 0 4px 15px 0 rgba(123, 45, 160, 0.75);
  }

  &:focus {
    outline: none;
  }
`;
