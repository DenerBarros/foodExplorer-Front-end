import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  padding-block: 4.7rem;
  background-color: ${({ theme }) => theme.COLORS.BG_700};
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding-inline: 12.3rem;
  }
  div:first-child {
    display: flex;
    align-items: center;
    gap: 1.1rem;
    > h2 {
      font-size: 2.5rem;
      line-height: 2.9rem;
      color: rgba(255, 255, 255, 0.3);
    }
    > p {
      font-family: 'DM Sans';
      font-size: 1.4rem;
      line-height: 1.8rem;
    }
  }
`;