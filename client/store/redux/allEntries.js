import axios from 'axios';
const initialState = [];
const TOKEN = 'token';

const SET_ENTRIES = 'SET_ENTRIES';
const CREATE_ENTRY = 'CREATE_ENTRY';

export const setEntries = (entries) => {
  return {
    type: SET_ENTRIES,
    entries,
  };
};

export const setEntriesStats = (entries) => {
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
    const token = window.localStorage.getItem(TOKEN);
    try {
      const { data } = await axios.get(`/api/journal/${userId}`, {
        headers: {
          authorization: token,
        },
      });
      dispatch(setEntries(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchCreateEntry = (userId, entry) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN);
    const { data } = await axios.post(`/api/journal/${userId}`, entry, {
      headers: {
        authorization: token,
      },
    });
    dispatch(createEntry(data));
  };
};

export const fetchEntriesStats = (userId) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN);
    try {
      const { data } = await axios.get(`/api/journal/${userId}/stats`, {
        headers: {
          authorization: token,
        },
      });
      dispatch(setEntries(data));
    } catch (err) {
      console.log(err);
    }
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
