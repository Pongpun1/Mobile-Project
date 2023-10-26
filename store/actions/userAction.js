export const USER_KEY = 'USER_KEY'
export const userKey = (id) => {
  return {
    type: USER_KEY,
    userID: id
  }
}

export const ADD_FOOD = 'ADD_FOOD'
export const addFood = (name, kcal, unit) => {
  return {
    type: ADD_FOOD,
    name: name,
    kcal: kcal,
    unit: unit,
  }
}

export const DEL_FOOD = 'DEL_FOOD'
export const delFood = (index) => {
  return {
    type: DEL_FOOD,
    index: index,
  }
}

export const CLEAR_DATA = 'CLEAR_DATA';
export const clearData = () => {
  return {
    type: CLEAR_DATA
  };
};
