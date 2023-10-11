import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
`;
export const Span = styled.span`
  font-size: 24px;
  color: #3470FF;
  font-weight: 700;
  margin: 0;
`;
export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 9px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #3470ff;
  }
`;
