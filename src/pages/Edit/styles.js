import styled from 'styled-components';

export const Container = styled.div`
  > main {
    margin-inline: 12.5rem;
    > button {
      display: flex;
      align-items: center;
      margin-top: 3.2rem;
      margin-bottom: 2.4rem;
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.WHITE};
      background: none;
      border: none;
      > svg {
        font-size: 3.2rem;
      }
    }
    > h1 {
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 140%;
      margin-bottom: 3.2rem;
    }
    input[type='file'] {
      display: none;
    }
    #file {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      white-space: nowrap;
      cursor: pointer;
    }
    .input-file-wrapper {
      display: flex;
      align-items: center;
      padding: 1.2rem 3.2rem;
      margin-top: 0.6rem;
      gap: 0.8rem;
      border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
      border-radius: 0.5rem;
      font-family: 'Poppins';
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 2.4rem;
    }
    .submit-btn-wrapper {
      display: flex;
      justify-content: end;
    }
    .submit-btn {
      padding: 1.2rem 11.7rem;
      background-color: rgba(255, 255, 255, 0.1);
      color: ${({ theme }) => theme.COLORS.WHITE};
      border-radius: 0.5rem;
      border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 2.4rem;
    }
  }
  footer {
    margin-top: 12.2rem;
    width: 100%;
    bottom: 0;
    left: 0;
  }
`;

export const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 0.8rem;
  gap: 1.6rem;
  padding: 0.8rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 4rem;
  gap: 4rem;
`;