import { UserActionTypes, UserAction } from '../../types/user';
import axios from "axios";
import { Dispatch } from 'redux';

const REST_API = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: UserActionTypes.FETCH_USERS});
      const response = await axios.get(REST_API);
      setTimeout(() => {
        dispatch({
          type: UserActionTypes.FETCH_USERS_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (error) {
      dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: "Ошибка при загрузке" });
    }
  }
}