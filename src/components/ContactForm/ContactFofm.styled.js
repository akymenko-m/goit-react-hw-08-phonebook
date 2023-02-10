import styled from '@emotion/styled';

export const Form = styled.form`
  width: 300px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  font-weight: 600;
`;

export const Input = styled.input`
  :hover,
  :focus {
    border-color: blue;
  }
`;

export const BtnAddContact = styled.button`
  width: 120px;
  margin: 0 auto;
  cursor: pointer;
  :hover,
  :focus {
    background-color: teal;
  }
`;
