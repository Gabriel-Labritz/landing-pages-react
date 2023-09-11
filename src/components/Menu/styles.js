import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as Heading } from '../Heading/styles';

const menuVisible = (theme) => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: ${theme.colors.white};
    border-bottom: ${theme.colors.mediumGray};
    transition: all 300ms ease-in-out;
    z-index: 5;

  > ${SectionContainer} {
    padding-top: 0;
    padding-bottom: 0;
  }

  & ${Heading} {
    margin-top: 0;
    margin-bottom: 0;
  }

  @media ${theme.font.media.lteMedium} {
    height: 100vh;
    visibility: hidden;
    opacity: 0;
    ${visible && menuVisible(theme)}

  > ${SectionContainer} {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    height: 100vh;
    align-items: center;
    overflow-y: auto;
  }

  & ${Heading} {
    padding-bottom: ${theme.spacings.large};
    display: flex;
    justify-content: center;
  }

  }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.font.media.lteMedium} {
      display: block;
      text-align: center;
      padding: ${theme.spacings.xxlarge} 0;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme, visible }) => css`
    display: none;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    z-index: 6;
    border: none;
    pointer-events: ${visible ? 'none' : 'all'};

    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }

    @media ${theme.font.media.lteMedium} {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}
`;
