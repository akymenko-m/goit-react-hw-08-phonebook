import { LinkBox } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Main = styled.main`
  padding: 0 15px 15px;
`;

export const NavUserMenu = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

export const NavLogin = styled.div`
  padding: 10px;
  display: flex;
  gap: 10px;
`;

export const LinkBoxStyled = styled(LinkBox)`
  display: flex;
  text-align: center;
  justify-content: center;
  &:hover,
  &:focus {
    border: 2px solid teal;
  }

  & .active {
    text-decoration: underline;
  }
`;