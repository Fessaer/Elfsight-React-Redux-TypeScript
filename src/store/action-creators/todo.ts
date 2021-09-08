import { TodoAction, TodoActionTypes } from './../../types/todo';
import axios from "axios";
import { Dispatch } from "redux";

const REST_API = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = (page: number = 1, limit: number = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODO });
      const response = await axios.get(REST_API, {
        params: { _page: page, _limit: limit }
      });
      setTimeout(() => {
        dispatch({
          type: TodoActionTypes.FETCH_TODO_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (error) {
      dispatch({
        type: TodoActionTypes.FETCH_TODO_ERROR,
        payload: "Ошибка при загрузке списка дел",
      });
    }
  };
};

export function setTodoPage(page: number): TodoAction {
  return { type: TodoActionTypes.FETCH_TODO_PAGE, payload: page };
}
