export const USER_KEY = 'USER_KEY'

export const userKey = (id) => {
  return {
    type: USER_KEY,
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
