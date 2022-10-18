import styled from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  height: 17rem;
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  resize: none;
  margin-bottom: 2.4rem;
  border-radius: 0.5rem;
  padding: 1.4rem;
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;