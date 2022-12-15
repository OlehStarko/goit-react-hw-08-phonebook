import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  height: 48px;
  width: 180px;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
  color: white;
  border-radius: 8px;
  background-color: #df723a;
  transform: scale(1);
  transition: all 0.2s;
  &:hover {
    background-color: #d25f23;
    transform: scale(1.05);
  }
  &.active {
    background-color: #d25f23;
  }
`;
