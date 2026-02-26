import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    updateUserStart: (state) => {
      state.loading = true;
    },

    deleteUserStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.currentUser = null;
    },
    successfulUserUpdate: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    updateUserFalure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteUserSuccess: (state) => {
      state.error = null;
      state.loading = false;
      state.currentUser = null;
    },
    deleteUserFalure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    logoutUserSuccess: (state) => {
      state.error = null;
      state.loading = false;
      state.currentUser = null;
    },
    logoutUserFalure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

  },
});

export const {
  signInFailure,
  signInSuccess,
  signInStart,
  successfulUserUpdate,
  updateUserFalure,
  deleteUserSuccess,
  deleteUserFalure,
  logoutUserSuccess,
  logoutUserFalure,
} = userSlice.actions;
export default userSlice.reducer;
