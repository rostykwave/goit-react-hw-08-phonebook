import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  /* border-bottom: 1px solid black; */
  > nav {
    display: flex;
  }
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: ${p => p.theme.colors.link};
  font-size: 18px;
  &.active {
    color: ${p => p.theme.colors.activeLink};
  }
`;
