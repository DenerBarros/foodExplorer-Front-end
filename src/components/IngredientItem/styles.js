import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  background: ${({ theme, isNew }) =>
    isNew ? 'transparent' : 'rgba(255, 255, 255, 0.1)'};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed  ${theme.COLORS.GRAY_300}` : 'none'};
  border-radius: 0.8rem;
  padding-right: 0.6rem 16px;
  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 1.2rem 1.2rem 1.2rem 0;
  }
  input {
    width: 8rem;
    padding: 0.6rem 0 0.6rem 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;