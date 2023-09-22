import { create } from "zustand";

const useFlightStore = create((set) => ({
  flightsForToday: [],

  setFlightsForToday: (flights) => {
    set({ flightsForToday: flights });
  },
}));

export default useFlightStore;
