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
  padding: 2px;
  margin: 8px;
  text-align: center;
`;

export const ModalQuestion = styled.div`
  padding: 2px;
  margin-bottom: 8px;
  margin-top: 0px;
  text-align: center;
  color: #f8afa6;
  font-size: 1.2rem;
  font-weight: bolder;
`;

export const ModalFooter = styled.div`
  background: white;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

export const CancelButton = styled.button`
  background: #7cb9e8;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 100px;
  margin-left: 15px;
  margin-bottom: 12px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: #31447e;
  }
`;

export const DeleteButton = styled.button`
  background: #f8afa6;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 100px;
  margin-left: 20px;
  margin-right: 15px;
  margin-bottom: 12px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: #ed5947;
  }
`;
