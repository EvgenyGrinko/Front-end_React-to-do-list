import {
  ADD_TODO_ITEM,
  DELETE_ITEM,
  MAKE_ITEM_CHECKED,
  SHOW_ITEMS_FOR_CURRENT_AREA,
  SET_SEARCHED_WORD,
} from "../constants/action-types";

export function addTodoItem(payload) {
  return { type: ADD_TODO_ITEM, payload };
}

export function deleteItem(payload) {
  return { type: DELETE_ITEM, payload };
}

export function makeItemChecked(payload) {
  return { type: MAKE_ITEM_CHECKED, payload };
}

export function showItemsForCurrentArea(payload) {
  return { type: SHOW_ITEMS_FOR_CURRENT_AREA, payload };
}

export function setSearchedWord(payload) {
  return { type: SET_SEARCHED_WORD, payload };
}
