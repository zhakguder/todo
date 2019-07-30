import todos from "../apis/todos";
import { CREATE_TODO, FETCH_TODOS, DELETE_TODO } from "./types";

export const createTodo = formValue => async (dispatch, getState) => {
  const response = await todos.post("/todos", { toro: formValue });
  dispatch({
    type: CREATE_TODO,
    payload: response.data
  });
};

export const fetchTodos = () => async dispatch => {
  const response = await todos.get("/todos");
  dispatch({
    type: FETCH_TODOS,
    payload: response.data
  });
};
export const deleteTodo = id => async dispatch => {
  await todos.delete(`/todos/${id}`);
  dispatch({ type: DELETE_TODO, payload: id });
};
