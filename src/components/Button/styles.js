import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;
  padding: 1.7rem 3.4rem;
  border-radius: 0.5rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  white-space: nowrap;
`;