import { USER_KEY, CLEAR_DATA, ADD_FOOD, DEL_FOOD} from "../actions/userAction";
import { FOODS } from "../../data/dummy-data";
import { ACTIVITYS } from "../../data/dummy-data";

const initialState = {
    key: '',
    foods: FOODS,
    activitys: ACTIVITYS,
    todayfoods: [],
    todayactivitys: [],
};

    
const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_KEY:
        return {
          ...state,
          key: action.userID,
        };
      case ADD_FOOD:
          state.todayfoods.push({
          name: action.name,
          kcal: action.kcal,
          unit: action.unit,
          totalcal: action.kcal*action.unit
        })
        console.log(state.todayfoods)
        return JSON.parse(JSON.stringify(state))
      case DEL_FOOD:
        const updatedMenuList = [...state.todayfoods];
        updatedMenuList.splice(action.index, 1);
        console.log(state.todayfoods)
        return {
          ...state,
          todayfoods: updatedMenuList,
        };
      case CLEAR_DATA:
        return initialState; // กลับไปยังค่าเริ่มต้น
      default:
        return state;
    }
  };


export default userReducer;



