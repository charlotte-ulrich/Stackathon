import axios from 'axios';
const initialState = [];

const SET_ENTRIES = 'SET_ENTRIES';
const CREATE_ENTRY = 'CREATE_ENTRY';

export const setEntries = (entries) => {
  return {
    type: SET_ENTRIES,
    entries,
  };
};

export const createEntry = (createdEntry) => {
  return {
    type: CREATE_ENTRY,
    createdEntry,
  };
};

export const fetchEntries = (userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/journal/${userId}`);
      dispatch(setEntries(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchCreateEntry = (userId, entry) => {
  return async (dispatch) => {
    const { data } = await axios.post(`/api/journal/${userId}`, entry);
    dispatch(createEntry(data));
  };
};

export default function entriesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ENTRIES:
      return action.entries;
    case CREATE_ENTRY:
      return [...state, action.createdEntry];
    default:
      return state;
  }
}
