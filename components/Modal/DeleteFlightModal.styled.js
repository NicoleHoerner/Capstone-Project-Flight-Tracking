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
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  max-width: 80%;
  width: 300px;
`;

export const ModalHeader = styled.h2`
  background: none;
  padding: 16px;
  font-weight: bold;
  text-align: center;
`;

export const ModalBody = styled.div`
  padding: 16px;
  margin: 8px;
  text-align: center;
`;

export const ModalFooter = styled.div`
  background: white;
  padding: 16px;
  display: flex;
  justify-content: center;
`;

export const CancelButton = styled.button`
  background: #f8afa6;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 40px;
  margin-left: 15px;
  margin-bottom: 12px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: #31447e;
  }
`;

export const DeleteButton = styled.button`
  background: #3951a3;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 40px;
  margin-left: 8px;
  margin-right: 15px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: #31447e;
  }
`;
