import styled, { css } from 'styled-components';
import { Text as TextContainer } from '../Text/styles';

export const Container = styled.div`
  ${({ theme }) => css`

    & > ${TextContainer} {
      margin-bottom: ${theme.spacings.xhuge};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.large};

    @media ${theme.font.media.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
  `}
`;

export const Image = styled.img`
  width: 100%;
  transition: all 300ms ease-in-out;

  &:hover {
    transform: scale(1.2) rotate(10deg);
  }
`;
