import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/redux/reducers/user.reducer";

const reducer = {
  user: userReducer,
};

const store = configureStore({
  reducer,
});

export default store;
