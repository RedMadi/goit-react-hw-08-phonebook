import styled from 'styled-components';

export const PageRegistrationSection = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 30%;

  width: 600px;
  margin: 0 auto;
  margin-top: 40px;

  padding: 2em;
  border-radius: 6px;
`;

export const PageRegistrationTitle = styled.h2`
  font-size: 18px;
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
`;

export const PageRegistrationLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

export const PageRegistrationInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0 20px;
  display: inline-block;
  box-sizing: border-box;
  transition: background-color 0.5s ease-in-out;
  border: 2px solid rgb(8, 78, 8);
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
  box-shadow: 17px 17px 84px 18px rgba(21, 15, 15, 0.2) inset;

  &::placeholder {
    color: #ffffff;
    font-style: italic;
  }

  &:focus {
    background-color: #f9f1f1;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    border: 2px solid rgb(22, 2, 2);
  }
`;

export const PageRegistrationBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100%;
  padding: 5px;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
  font-size: 15px;
  box-shadow: 17px 17px 84px 18px rgba(21, 15, 15, 0.2) inset;
  border: 2px solid rgb(8, 78, 8);
  background-color: #858181;

  &:hover,
  &:focus {
    background-color: rgb(114, 113, 114);
  }
`;
