import styled, { css } from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    display: none;
  }

  span {
    font-size: 28px;
    font-weight: 300;
    line-height: 40px;
    margin-left: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 50px;

  ${({ mode, theme  }) =>
    mode === 'dark' && css`
      span {
        color: ${theme.colors.dark};
      }

      svg path {
        fill: ${theme.colors.dark};
      }
    `
  }
`;
