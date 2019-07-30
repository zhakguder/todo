import _ from "lodash";
import { CREATE_TODO, FETCH_TODOS, DELETE_TODO } from "../actions/types";

export const todoReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_TODOS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case DELETE_TODO:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
