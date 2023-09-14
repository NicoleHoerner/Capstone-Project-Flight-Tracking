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
  min-height: 450px;
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
  border-radius: 60px;
  border: 2px solid #cbd5e1;
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
  font-size: 1rem;
  margin-top: 1.5em;
`;

export const InputBox = styled.div`
  position: relative;
  margin-bottom: 5px;
  width: 250px;
`;

export const InputLabel = styled.span`
  position: absolute;
  left: 0;
  top: 0px;
  transform: translateY(-4px);
  margin-left: 10px;
  padding: 10px;
  pointer-events: none;
  font-size: 0.6rem;
  color: #000;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 3px;
  border-radius: 8px;
  transform: ${(props) =>
    props.isFocused || props.isValid
      ? "translateX(113px) translateY(-15px)"
      : "translateY(-4px)"};
  font-size: ${(props) =>
    props.isFocused || props.isValid ? "0.8em" : "12px"};
  padding: ${(props) =>
    props.isFocused || props.isValid ? "5px 10px" : "10px"};
  background: ${(props) =>
    props.isFocused || props.isValid ? "#000" : "transparent"};
  letter-spacing: ${(props) =>
    props.isFocused || props.isValid ? "0.2em" : "3px"};
  color: ${(props) => (props.isFocused || props.isValid ? "#fff" : "#cbd5e1")};
  border: ${(props) => (props.isFocused || props.isValid ? "2px" : "initial")};
`;

export const InputField = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 200px;
  padding: 8px;
  border: 2px solid
    ${(props) =>
      props.isFocused ? "#cbd5e1" : props.isValid ? "#cbd5e1" : "initial"};
  border-radius: 8px;
  &:focus {
    border-color: #cbd5e1;
  }
  &:valid {
    border-color: #cbd5e1;
  }
`;
