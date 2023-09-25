import AddFlightForm from "../../components/Form/AddFlightForm";
import styled from "styled-components";

export default function AddFlightPage() {
  return (
    <div>
      <FormHeading>Add a Flight</FormHeading>
      <AddFlightForm />
    </div>
  );
}

const FormHeading = styled.h1`
  font-size: 1.4rem;
  text-align: center;
`;
