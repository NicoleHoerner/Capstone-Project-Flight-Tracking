import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  max-width: 80%;
  width: 400px;
`;

export const ModalHeader = styled.div`
  background: #3951a3;
  color: white;
  padding: 16px;
  font-weight: bold;
`;

export const ModalBody = styled.div`
  padding: 16px;
`;

export const ModalFooter = styled.div`
  background: #f0f0f0;
  padding: 16px;
  display: flex;
  justify-content: flex-end;
`;

export const CancelButton = styled.button`
  background: #f8afa6;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  margin-left: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: #31447e;
  }
`;

export const SubmitButton = styled.button`
  background: #3951a3;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  margin-left: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: #31447e;
  }
`;

export const InputLabel = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #3951a3;
    outline: none;
  }
`;
