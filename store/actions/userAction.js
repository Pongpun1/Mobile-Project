export const USER_DATA = 'USER_DATA'

export const userData = (id) => {
  return {
    type: USER_DATA,
    userID: id
  }
}


export const CLEAR_DATA = 'CLEAR_DATA';
// action creators
export const clearData = () => {
  return {
    type: CLEAR_DATA
  };
};
