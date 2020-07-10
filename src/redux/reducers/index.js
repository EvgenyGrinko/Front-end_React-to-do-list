import {
  ADD_TODO_ITEM,
  DELETE_ITEM,
  MAKE_ITEM_CHECKED,
  SHOW_ITEMS_FOR_CURRENT_AREA,
  SET_SEARCHED_WORD,
} from "../constants/action-types";

const initialState = {
  items: [],
  searchedWord: "",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_ITEM:
      return { ...state, items: state.items.concat(action.payload) };

    case DELETE_ITEM:
      return { ...state, items: onDelete(state.items, action.payload) };

    case MAKE_ITEM_CHECKED:
      return { ...state, items: onChecked(state.items, action.payload) };

    case SET_SEARCHED_WORD:
      return { ...state, searchedWord: action.payload };

    case SHOW_ITEMS_FOR_CURRENT_AREA:
      return {
        ...state,
        items: showSpecificItems(state.items, action.payload),
      };

    default:
      return state;
  }
}

//Function handles click on the item text
function onChecked(items, id) {
  return items.map((item) => {
    if (item.id === id) {
      item.completed = true;
      return item;
    } else return item;
  });
}

//Function handles click on the "trash bin" icon and deletes this item
function onDelete(items, id) {
  return items.filter((item) => {
    return item.id !== id ? item : null;
  });
}

//Function handles items visibility
const showSpecificItems = (items, area) => {
  return items.map((item) => {
    switch (area) {
      case "allItems":
        item.display = true;
        return item;
      case "notCompletedItems":
        item.completed ? (item.display = false) : (item.display = true);
        return item;
      case "completedItems":
        item.completed ? (item.display = true) : (item.display = false);
        return item;
      default:
        return;
    }
  });
};

export default rootReducer;
