import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    position: fixed;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    bottom: 2rem;
    right: 2rem;
    border: 1px solid ${theme.colors.primaryColor};
    border-radius: 50%;
    z-index: 6;
  `}
`;
