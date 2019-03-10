export const Types = {
  ADD: "todos/ADD",
  REMOVE: "todos/REMOVE"
};

const INITIAL_STATE = {
  data: []
};

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD:
      return { ...state, loading: true };
    case Types.REMOVE:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  addTodo: text => ({ type: Types.ADD, payload: { text } }),
  removeTodo: id => ({ type: Types.REMOVE, payload: { id } })
};
