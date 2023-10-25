import { USER_KEY, CLEAR_DATA  } from "../actions/userAction";
import { FOODS } from "../../data/dummy-data";
import { ACTIVITYS } from "../../data/dummy-data";

const initialState = {
    key: '',
    foods: FOODS,
    activitys: ACTIVITYS,
};

    
    
const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_KEY:
        return {
          ...state,
          key: action.userID,
        };
      case CLEAR_DATA:
        return initialState; // กลับไปยังค่าเริ่มต้น
      default:
        return state;
    }
  };


export default userReducer;



