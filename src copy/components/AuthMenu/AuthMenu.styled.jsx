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
  display: block;
  padding: 8px 16px 8px 16px;
  cursor: pointer;
  color: #fff;
  border-radius: 6px;
  font-size: 16px;
  margin-left: 10px;
  transition: all 0.2s;
  background-color: rgba(38, 38, 40, 0);
  &:hover {
    background-color: #7059d9;
  }
  &.active {
    background-color: #7059d9;
  }
`;
