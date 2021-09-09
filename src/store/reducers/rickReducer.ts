/* eslint-disable import/no-anonymous-default-export */
import { RickAction, RickState, RickActionTypes } from "../../types/rick";

const initialState: RickState = {
  character: [],
  loading: false,
  error: null,
  info: {},
  filters: {
    name: "",
    type: "",
    status:  "",
    species: "",
    gender: "",
  },
};

export default (state = initialState, action: RickAction): RickState => {
  switch (action.type) {
    case RickActionTypes.FETCH_CHARACTER:
      return {
        ...state,
        loading: true,
        error: null,
        character: [],
        info: {},
      };

    case RickActionTypes.FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        character: action.payload,
      };

    case RickActionTypes.FETCH_CHARACTER_INFO:
      return { ...state, info: action.payload };

    case RickActionTypes.FETCH_CHARACTER_FILTERS:
      return { ...state, filters: action.payload };

    case RickActionTypes.FETCH_CHARACTER_ERROR:
      return {
        loading: false,
        error: action.payload,
        character: [],
        info: {},
        filters: initialState.filters,
      };

    default:
      return state;
  }
};
