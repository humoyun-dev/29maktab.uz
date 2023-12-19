import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [] as any,
  token: "" as string,
  massage: "" as string,
};

const userReducer = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setMassage: (state, action) => {
      state.massage = action.payload;
    },
  },
});

export const { setUserData, setMassage, setToken } = userReducer.actions;
export default userReducer.reducer;
