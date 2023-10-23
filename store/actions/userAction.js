export const USER_DATA = 'USER_DATA'

export const userData = (id) => {
  return {
    type: USER_DATA,
    userID: id
  }
}
