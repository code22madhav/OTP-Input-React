import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const InputBox = styled.input`
  height: 36px;
  width: 36px;
  margin-left: 10px;
  border: 1px solid black;
  background-color: #f5f5f5; /* Light gray instead of 'smoke' */
  text-align: center;
  font-size: 18px;
  border-radius: 4px;
  outline: none;
  font-family: 'DM Sans', sans-serif;

  &:focus {
    border: 2px solid #007BFF; /* Bootstrap blue */
    box-shadow: 0 0 3px #007BFF;
    background-color: white;
  }
`;
