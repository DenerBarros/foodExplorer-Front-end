import styled from 'styled-components';

export const Container = styled.div`
  > main {
    margin-inline: 12.4rem;
    > section {
      margin-top: 4.8rem;
      &:last-child {
        margin-bottom: 9.8rem;
      }
      > h3 {
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 140%;
        margin-bottom: 4rem;
      }
    }
  }
`;

export const Slogan = styled.div`
  margin-top: 2.5rem;
  width: 100%;
  position: relative;
  > div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 15rem;
    &::before {
      content: '';
      background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
      position: absolute;
      top: 13.6rem;
      bottom: 0px;
      width: 160rem;
      z-index: -1;
    }
    > .text h2 {
      font-family: 'Poppins';
      font-size: 4rem;
      line-height: 140%;
      margin-bottom: 0.8rem;
      margin-top: 15rem;
    }
    > .text p {
      font-family: 'Poppins';
      line-height: 140%;
    }
  }
`;