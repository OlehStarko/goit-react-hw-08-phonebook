import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthList = styled.ul`
  margin-left: auto;
  display: flex;
`;
export const AuthItem = styled.li`
  &:not(:last-child) {
    margin-right: 3px;
  }
`;
export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0px 16px;
  height: 40px;
  margin-right: 6px;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  color: white;
  border-radius: 8px;
  &:hover {
    background-color: #7059d9;
  }
  &.active {
    background-color: #7059d9;
  }
`;
