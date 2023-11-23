import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    status: "",
    personDetails: [],
  },
  reducers: {
    fetchPopularPeople: (state) => { },
    fetchSearchResults: (state) => { },
    fetchPersonDetails: (state) => { },

    setPersonDetails: (state, { payload }) => {
      state.personDetails = payload;
    },
    setPeople: (state, { payload }) => {
      state.people = payload;
    },
    setStatus: (state, { payload }) => {
      state.status = payload;
    },
  },
});

export const { setPeople, setStatus, fetchPersonDetails, setPersonDetails, fetchSearchResults, fetchPopularPeople } =
  peopleSlice.actions;

export const selectPeopleState = (state) => state.people;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectStatus = (state) => selectPeopleState(state).status;
export const selectSearchQuery = (state) =>
  selectPeopleState(state).searchQuery;

export default peopleSlice.reducer;
