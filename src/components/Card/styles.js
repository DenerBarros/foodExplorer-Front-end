import styled from 'styled-components';

export const Container = styled.div`
  width: 30rem;
  height: 51.2rem;
  background-color: rgba(0, 0, 0, 0.32);
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 5.6rem;
  > img {
    width: 17.6rem;
    height: 17.6rem;
    border-radius: 50%;
  }
  > button {
    margin-top: 1.6rem;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    > h2 {
      display: flex;
      align-items: center;
      gap: 1.1rem;
      font-family: 'Poppins';
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 140%;
    }
  }
  > p {
    font-size: 1.4rem;
    line-height: 160%;
    margin-top: 1.6rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
  > span {
    margin-top: 1.6rem;
    font-size: 3.2rem;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.BLUE};
  }
  > div {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    gap: 1.6rem;
    > span {
      font-weight: 700;
      font-size: 2rem;
      line-height: 160%;
    }
  }
  > .favorite-btn {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    background: transparent;
    border: none;
    > svg {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 3.2rem;
    }
  }
  > .remove {
    display: none;
  }
  .edit-btn {
    position: absolute;
    top: 1.6rem;
    left: 1.6rem;
    > svg {
      font-size: 3.2rem;
    }
  }
`;