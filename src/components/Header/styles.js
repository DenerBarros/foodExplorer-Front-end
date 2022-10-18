import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  gap: 4rem;
  padding-inline: 12.3rem;
  padding-block: 3.7rem;
  background-color: ${({ theme }) => theme.COLORS.BG_700};
  > div:first-child a {
    display: flex;
    gap: 1rem;
    h2 {
      font-size: 3rem;
      line-height: 2.9rem;
      white-space: nowrap;
    }
  }
  > nav {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 4rem;
    > a {
      white-space: nowrap;
    }
    > .search {
      display: flex;
      align-items: center;
      background-color: ${({ theme }) => theme.COLORS.BG_400};
      padding-left: 1.4rem;
      border-radius: 0.5rem;
      width: 100%;
    }
    > .search input {
      height: 5.8rem;
      background: transparent;
      border: none;
      color: ${({ theme }) => theme.COLORS.WHITE};
      margin-left: 1.4rem;
      width: 100%;
      font-size: 1.6rem;
    }
    .logout {
      font-size: 3.2rem;
    }
  }
`;