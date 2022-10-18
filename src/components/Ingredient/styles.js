import styled from 'styled-components';

export const Container = styled.div`
  width: 7.2rem;
  height: 9.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  margin-inline: 3rem;
  > img {
    height: 7.3rem;
  }
  > p {
    font-family: 'Poppins';
    font-size: 1.8rem;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    white-space: nowrap;
  }
`;