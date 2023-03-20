import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  name: "",
  email: "",
  password: "",
  token: "",
  isRejectedPassword: false,
};

export const logoutUser = createAsyncThunk("/logout/", async (_, thunkAPI) => {
  try {
    await axios.post(
      `http://mypatientcare.eu/api/logout`,
      { token: `${localStorage.getItem("token")}` },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
    localStorage.setItem("email", "");
    localStorage.setItem("auth", false);
    localStorage.setItem("token", "");
  } catch (error) {
    return thunkAPI.rejectWithValue("Qualcosa è andato storto");
  }
});

export const loginUser = createAsyncThunk("/login", async (_, thunkAPI) => {
  try {
    const response = await axios.post(
      `http://mypatientcare.eu/api/login`,
      { email: _.email, password: _.password },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
    localStorage.setItem("token", response.data.token);
    console.log("Login effettuato con successo, token: ", response.data.token);
    localStorage.setItem("expiry", response.data.expiry);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Qualcosa è andato storto");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.name = action.payload.name;
      state.token = localStorage.getItem("token");
    },
    [loginUser.pending]: (state, action) => {
      state.isLoading = true;
    },
    [loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
    },
    [logoutUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.token = "";
      state.email = "";
      state.password = "";
      state.name = "";
    },
    [logoutUser.pending]: (state, action) => {
      state.isLoading = true;
    },
    [logoutUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
    },
  },
});

export const { setEmail, setPassword } = authSlice.actions;

export default authSlice.reducer;
