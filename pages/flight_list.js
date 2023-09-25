import styled from "styled-components";
import Pencil from "../components/Icons/EditIcon";
import TrashCan from "../components/Icons/DeleteIcon";
import EditFlightModal from "../components/Modal/EditFlightModal";
import DeleteFlightModal from "../components/Modal/DeleteFlightModal";
import { FlightNumber } from "../components/StyledComponents/StyledFlightNumber";
import { flights } from "../data/septemberFlights";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";

export default function FlightList() {
  const router = useRouter();

  const handleAddFlightClick = () => {
    // Navigate to the form when the button is clicked
    router.push("/add-flight");
  };

  const [flightsOfInterest, setFlightsOfInterest] = useLocalStorageState(
    "flightsInfo",
    {
      defaultValue: flights,
    }
  );

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleEditClick = (flight) => {
    // Access the flight data from local storage
    const storedFlights = flightsOfInterest;

    // Find the specific flight that corresponds to the clicked IconButton
    const selectedFlight = storedFlights.find(
      (storedFlight) =>
        storedFlight.flight_iata === flight.flight_iata &&
        storedFlight.scheduled_date === flight.scheduled_date
    );

    setIsEditModalOpen(true);
    setSelectedFlight(selectedFlight);
  };

  const handleEditModalSave = (iata, date, editedFlightData) => {
    // Update the flight data in main state (flightsOfInterest)
    const updatedFlights = flightsOfInterest.map((flight) => {
      if (flight.flight_iata === iata && flight.scheduled_date === date) {
        return { ...flight, ...editedFlightData };
      }
      return flight;
    });

    setFlightsOfInterest(updatedFlights);

    // Close the edit modal
    setIsEditModalOpen(false);
  };

  const [flightToDelete, setFlightToDelete] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleDeleteClick = (flight) => {
    setFlightToDelete(flight);
    setIsDeleteModalOpen(true);
  };

  const handleFlightDeletion = (flightToDelete) => {
    const updatedFlights = flightsOfInterest.filter(
      (flight) =>
        flight.flight_iata !== flightToDelete.flight_iata ||
        flight.scheduled_date !== flightToDelete.scheduled_date
    );

    // Update the state and local storage
    setFlightsOfInterest(updatedFlights);

    // Show a confirmation alert
    alert("Flight was deleted");
  };

  return (
    <>
      <H1>Simple Tracking.</H1>
      <H2 aria-label="This month's flights">
        This month&apos;s <StyledWord>flights</StyledWord>.
      </H2>
      <H3>Scheduled Flights</H3>

      <ScheduledList>
        {flightsOfInterest.map((flight) => (
          <FlightRow key={`${flight.flight_iata}-${flight.scheduled_date}`}>
            <StyledFlightInfo>
              <FlightNumber>{flight.flight_iata}</FlightNumber>
              <FlightDetails>
                <FlightDetailLabel>DATE</FlightDetailLabel>
                <FlightDetailData>
                  {new Date(flight.scheduled_date).getFullYear()}-
                  {new Date(flight.scheduled_date).getMonth() + 1}-{" "}
                  {new Date(flight.scheduled_date).getDate()}{" "}
                </FlightDetailData>
              </FlightDetails>
              <FlightDetails>
                <FlightDetailLabel>FROM</FlightDetailLabel>
                <FlightDetailData>{flight.departure}</FlightDetailData>
              </FlightDetails>
              <FlightDetails>
                <FlightDetailLabel>TO</FlightDetailLabel>
                <FlightDetailData>{flight.arrival}</FlightDetailData>
              </FlightDetails>
              <IconButton
                onClick={() => handleEditClick(flight)}
                aria-label="edit flight"
              >
                <Pencil />
              </IconButton>
              <IconButton
                onClick={() => handleDeleteClick(flight)}
                aria-label="delete flight"
              >
                <TrashCan />
              </IconButton>
            </StyledFlightInfo>
            <Separator />
          </FlightRow>
        ))}
      </ScheduledList>
      <Button onClick={handleAddFlightClick}>Add Flight</Button>
      {isEditModalOpen && (
        <EditFlightModal
          onClose={() => setIsEditModalOpen(false)}
          selectedFlight={selectedFlight}
          onSave={handleEditModalSave}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteFlightModal
          flight={flightToDelete}
          onCancel={() => {
            setIsDeleteModalOpen(false);
            setFlightToDelete(null);
          }}
          onDelete={() => {
            handleFlightDeletion(flightToDelete);
            setIsDeleteModalOpen(false);
          }}
        />
      )}
    </>
  );
}

const H1 = styled.h1`
  margin: 5px auto;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  max-width: 600px;
  position: relative;
  z-index: -1;
`;

const H2 = styled.h2`
  margin: auto;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  max-width: 600px;
  position: relative;
  padding-left: 113px;
  z-index: -1;
`;

const StyledWord = styled.span`
  color: #7cb9e8;
`;
const H3 = styled.h3`
  text-align: center;
  font-size: 15px;
  padding: 50px;
  margin: 40px;
  font-size: 1rem;
  background-color: #cbd5e1;
  border: none;
  border-radius: 10px;
  padding: 6px 12px;
  width: max-content;
`;

const ScheduledList = styled.ul`
  list-style-type: none;
  padding: 16px;
  margin-top: 16px;
`;

const StyledFlightInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FlightRow = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc; /* Add a light grey separating line */
  padding: 10px 0;
`;

const Separator = styled.div`
  width: 20px; /* Adjust the width of the separator as needed */
`;

const FlightDetailLabel = styled.div`
  font-size: 0.6rem;
  color: #000000;
  opacity: 50%;
`;

const FlightDetails = styled.div`
  display: flex;
  flex-direction: column; /* Stack the label and data vertically */
  text-align: center;
  font-size: 0.6rem;
  margin: 0 10px; /* Add margin for horizontal spacing */
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: #7e97b8;
  background-color: #e0e8ef;
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-color: rgba(255, 255, 255, 0.333);
  border-radius: 40px 40px 40px 40px;
  padding: 16px 24px 16px 28px;
  margin: 12px;
  transform: translate(0px, 0px) rotate(0deg);
  transition: 0.2s;

  &:hover {
    color: #516d91;
    background-color: #e5edf5;
    box-shadow: -2px -1px 8px 0px #ffffff, 2px 1px 8px 0px rgb(95 157 231 / 48%);
  }

  &:active {
    box-shadow: none;
  }
`;

const FlightDetailData = styled.div`
  margin-top: 4px; /* Adjust the margin as needed for vertical spacing */
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

/* import styled from "styled-components";
import Pencil from "../components/Icons/EditIcon";
import TrashCan from "../components/Icons/DeleteIcon";
import EditFlightModal from "../components/Modal/EditFlightModal";
import DeleteFlightModal from "../components/Modal/DeleteFlightModal";
import { FlightNumber } from "../components/StyledComponents/StyledFlightNumber";
import { flights } from "../data/septemberFlights";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";
import { useState, useEffect } from "react";
import useFlightStore from "../store/flightStore";

export default function FlightList() {
  const router = useRouter();

  const handleAddFlightClick = () => {
    // Navigate to the form when the button is clicked
    router.push("/add-flight");
  };

  const [flightsOfInterest, setFlightsOfInterest] = useLocalStorageState(
    "flightsInfo",
    {
      defaultValue: flights,
    }
  );

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleEditClick = (flight) => {
    // Access the flight data from local storage
    const storedFlights = flightsOfInterest;

    // Find the specific flight that corresponds to the clicked IconButton
    const selectedFlight = storedFlights.find(
      (storedFlight) =>
        storedFlight.flight_iata === flight.flight_iata &&
        storedFlight.scheduled_date === flight.scheduled_date
    );

    setIsEditModalOpen(true);
    setSelectedFlight(selectedFlight);
  };

  const handleEditModalSave = (iata, date, editedFlightData) => {
    // Update the flight data in main state (flightsOfInterest)
    const updatedFlights = flightsOfInterest.map((flight) => {
      if (flight.flight_iata === iata && flight.scheduled_date === date) {
        return { ...flight, ...editedFlightData };
      }
      return flight;
    });

    setFlightsOfInterest(updatedFlights);

    // Close the edit modal
    setIsEditModalOpen(false);
  };

  const [flightToDelete, setFlightToDelete] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleDeleteClick = (flight) => {
    setFlightToDelete(flight);
    setIsDeleteModalOpen(true);
  };

  const handleFlightDeletion = (flightToDelete) => {
    const updatedFlights = flightsOfInterest.filter(
      (flight) =>
        flight.flight_iata !== flightToDelete.flight_iata ||
        flight.scheduled_date !== flightToDelete.scheduled_date
    );

    // Update the state and local storage
    setFlightsOfInterest(updatedFlights);

    // Show a confirmation alert
    alert("Flight was deleted");
  };

  const { setFlightsForToday } = useFlightStore();
  useEffect(() => {
    const today = new Date();

    const todayFlights = flightsOfInterest.filter((flight) => {
      const flightDate = new Date(flight.scheduled_date);
      return (
        flightDate.getDate() === today.getDate() &&
        flightDate.getMonth() === today.getMonth() &&
        flightDate.getFullYear() === today.getFullYear()
      );
    });

    setFlightsForToday(todayFlights);
    console.log("Flights for today:", todayFlights);
  }, [flightsOfInterest, setFlightsForToday]);

  return (
    <>
      <H1>Simple Tracking.</H1>
      <H2 aria-label="This month's flights">
        This month&apos;s <StyledWord>flights</StyledWord>.
      </H2>
      <H3>Scheduled Flights</H3>

      <ScheduledList>
        {flightsOfInterest.map((flight) => (
          <FlightRow key={`${flight.flight_iata}-${flight.scheduled_date}`}>
            <StyledFlightInfo>
              <FlightNumber>{flight.flight_iata}</FlightNumber>
              <FlightDetails>
                <FlightDetailLabel>DATE</FlightDetailLabel>
                <FlightDetailData>
                  {new Date(flight.scheduled_date).getFullYear()}-
                  {new Date(flight.scheduled_date).getMonth() + 1}-{" "}
                  {new Date(flight.scheduled_date).getDate()}{" "}
                </FlightDetailData>
              </FlightDetails>
              <FlightDetails>
                <FlightDetailLabel>FROM</FlightDetailLabel>
                <FlightDetailData>{flight.departure}</FlightDetailData>
              </FlightDetails>
              <FlightDetails>
                <FlightDetailLabel>TO</FlightDetailLabel>
                <FlightDetailData>{flight.arrival}</FlightDetailData>
              </FlightDetails>
              <IconButton
                onClick={() => handleEditClick(flight)}
                aria-label="edit flight"
              >
                <Pencil />
              </IconButton>
              <IconButton
                onClick={() => handleDeleteClick(flight)}
                aria-label="delete flight"
              >
                <TrashCan />
              </IconButton>
            </StyledFlightInfo>
            <Separator />
          </FlightRow>
        ))}
      </ScheduledList>
      <Button onClick={handleAddFlightClick}>Add Flight</Button>
      {isEditModalOpen && (
        <EditFlightModal
          onClose={() => setIsEditModalOpen(false)}
          selectedFlight={selectedFlight}
          onSave={handleEditModalSave}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteFlightModal
          flight={flightToDelete}
          onCancel={() => {
            setIsDeleteModalOpen(false);
            setFlightToDelete(null);
          }}
          onDelete={() => {
            handleFlightDeletion(flightToDelete);
            setIsDeleteModalOpen(false);
          }}
        />
      )}
    </>
  );
}
 */
/* const H1 = styled.h1`
  margin: 5px auto;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  max-width: 600px;
  position: relative;
  z-index: -1;
`;

const H2 = styled.h2`
  margin: auto;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  max-width: 600px;
  position: relative;
  padding-left: 113px;
  z-index: -1;
`;

const StyledWord = styled.span`
  color: #3951a3;
`;
const H3 = styled.h3`
  text-align: center;
  font-size: 15px;
  padding: 50px;
  margin: 40px;
  font-size: 1rem;
  background-color: #eee7de;
  border: none;
  border-radius: 10px;
  padding: 6px 12px;
  width: max-content;
`;

const ScheduledList = styled.ul`
  list-style-type: none;
  padding: 16px;
  margin-top: 16px;
`;

const StyledFlightInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FlightRow = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc; 
  padding: 10px 0;
`;

const Separator = styled.div`
  width: 20px; 
`;

const FlightDetailLabel = styled.div`
  font-size: 0.6rem;
  color: #eee7de;
`;

const FlightDetails = styled.div`
  display: flex;
  flex-direction: column; 
  text-align: center;
  font-size: 0.6rem;
  margin: 0 10px; 
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: #7e97b8;
  background-color: #e0e8ef;
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-color: rgba(255, 255, 255, 0.333);
  border-radius: 40px 40px 40px 40px;
  padding: 16px 24px 16px 28px;
  margin: 12px;
  transform: translate(0px, 0px) rotate(0deg);
  transition: 0.2s;

  &:hover {
    color: #516d91;
    background-color: #e5edf5;
    box-shadow: -2px -1px 8px 0px #ffffff, 2px 1px 8px 0px rgb(95 157 231 / 48%);
  }

  &:active {
    box-shadow: none;
  }
`;

const FlightDetailData = styled.div`
  margin-top: 4px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`; */
