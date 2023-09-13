import styled from "styled-components";

export const StyledForm = styled.form`
  height: 60px;
  display: flex;
  background-color: #7cb9e8;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 350px;
  width: 300px;
  flex-direction: column;
  margin: 12px;
  gap: 35px;
  border-radius: 15px;
  background: #e3e3e3;
  box-shadow: 8px 8px 16px #c8c8c8, -8px -8px 16px #fefefe;
`;

export const StyledAddButton = styled.button`
  height: 45px;
  width: 100px;
  border-radius: 5px;
  border: 2px solid #000;
  cursor: pointer;
  background-color: transparent;
  transition: 0.5s;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 2px;
  margin-bottom: 3em;
  &:hover {
    background-color: rgb(0, 0, 0);
    color: white;
  }
`;

export const StyledHeading = styled.title`
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;
  font-weight: bold;
  font-size: x-large;
  margin-top: 1.5em;
`;

export const StyledLabel = styled.label``;
