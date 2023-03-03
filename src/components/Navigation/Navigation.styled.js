import { Alert, LinkBox } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Main = styled.main`
  padding: 0 20px 20px;
`;

export const NavUserMenu = styled.div`
  padding: 10px 20px;
  display: flex;
`;

export const NavLogin = styled.div`
  padding: 10px 20px;
  display: flex;
  gap: 10px;
`;

export const LinkBoxStyled = styled(LinkBox)`
  margin-right: 50px;
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

export const AlertStyled = styled(Alert)`
  margin-top: 20px;
  width: 50%;
`;
