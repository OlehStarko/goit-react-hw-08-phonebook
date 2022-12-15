import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  margin-top: 25px;
  top: 0;
  left: 0;
  width: 60%;
  position: sticky;
  margin-left: auto;
  margin-right: auto;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #262628;
  border-radius: 10px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 420px) {
    flex-direction: column;
    width: auto;
    margin: 0 auto;
  }
`;
export const Navigation = styled.nav`
  @media screen and (max-width: 420px) {
    display: flex;
    justify-content: center;
  }
`;
export const NavList = styled.ul`
  display: flex;
`;
export const NavListItem = styled.li`
  &:not(:first-child) {
    margin-left: 3px;
  }
`;
export const StyledLink = styled(NavLink)`
  display: block;
  padding: 8px 16px 8px 16px;
  cursor: pointer;
  color: #fff;
  border-radius: 4px;
  font-size: 16px;
  transition: all 0.2s;
  background-color: rgba(38, 38, 40, 0);
  &:hover {
    background-color: #7059d9;
  }
  &.active {
    background-color: #7059d9;
  }
`;
