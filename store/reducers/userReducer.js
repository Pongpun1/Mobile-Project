import { USER_DATA } from "../actions/userAction";
import firebase from '../database/calcalDB';

const initialState = {};

    
    
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_DATA:
            console.log(state)
            return state; // ส่งค่า state เดิมกลับ
        default:
            return state;
    }
};

    export const fetchUserData = (userID) => {
        return async (dispatch) => {
            const userDoc = firebase
                .firestore()
                .collection("accounts")
                .doc(userID);
            AccountCollection.doc(userID);
            userDoc.get().then((res) => {
                if (res.exists) {
                    const user = res.data();
                    dispatch({
                        type: USER_DATA,
                        payload: {
                            key: userID,
                            username: user.username,
                            email: user.email,
                            age: user.age,
                            gender: user.gender,
                            birthday: user.birthday,
                            weight: user.weight,
                            height: user.height,
                            activity: user.activity,
                        }
                    });
                } else {
                    console.log("Document does not exist!!");
                }
            });
        };
    };

export default userReducer;



