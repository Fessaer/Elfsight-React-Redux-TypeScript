import { RickAction, RickActionTypes, RickFilters } from "../../types/rick";
import axios from "axios";
import { Dispatch } from "redux";

const REST_API = "https://rickandmortyapi.com/api/character";

export const changeFilters = (filters: RickFilters) => {
  return ({
    type: RickActionTypes.FETCH_CHARACTER_FILTERS,
    payload: filters,
  });
};

export const fetchCharacter = (page: number = 1, filter: RickFilters) => {
  return async (dispatch: Dispatch<RickAction>) => {
    try {
      dispatch({ type: RickActionTypes.FETCH_CHARACTER });
      const response = await axios.get(REST_API, {
        params: {
          page: page,
          ...filter,
        },
      });
      dispatch({
        type: RickActionTypes.FETCH_CHARACTER_SUCCESS,
        payload: response.data.results,
      });
      dispatch({
        type: RickActionTypes.FETCH_CHARACTER_INFO,
        payload: response.data.info,
      });
    } catch (error) {
      dispatch({
        type: RickActionTypes.FETCH_CHARACTER_ERROR,
        payload: "Ошибка при загрузке",
      });
    }
  };
};

