import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as TodosActions } from "../ducks/todos";

export default function* addTodo() {
  try {
    const response = yield call(api.get, "/todos");

    yield put(TodosActions.addTodo(response.data));
  } catch (err) {}
}
