import axios from 'axios';
const initialState = [];

const GET_SINGLE_ENTRY = 'GET_SINGLE_ENTRY';
const EDIT_ENTRY = 'EDIT_ENTRY';
const DELETE_ENTRY = 'DELETE_ENTRY';

export const getSingleEntry = (entry) => {
  return {
    type: GET_SINGLE_ENTRY,
    entry,
  };
};

export const editEntry = (editingEntry) => {
  return {
    type: EDIT_ENTRY,
    editingEntry,
  };
};

export const deleteEntry = (deletingEntry) => {
  return {
    type: DELETE_ENTRY,
    deletingEntry,
  };
};

export const fetchSingleEntry = (userId, entryId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/journal/${userId}/${entryId}`);
      dispatch(getSingleEntry(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchEditEntry = (userId, entryId, entry) => {
  return async (dispatch) => {
    const { data } = await axios.put(
      `/api/journal/${userId}/${entryId}`,
      entry
    );
    dispatch(editEntry(data));
  };
};

export const fetchDeleteEntry = (userId, entryId, entry) => {
  return async (dispatch) => {
    const { data } = await axios.delete(
      `/api/journal/${userId}/${entryId}`,
      entry
    );
    dispatch(deleteEntry(data));
  };
};

export default function singleEntryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_ENTRY:
      return action.entry;
    case EDIT_ENTRY:
      return action.editingEntry;
    case DELETE_ENTRY:
      return action.deletingEntry;
    default:
      return state;
  }
}
