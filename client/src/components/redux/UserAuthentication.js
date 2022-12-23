import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: localStorage.getItem("auth") === "true",
  isLoading: false,
  email: localStorage.getItem("email"),
  password: "",
  token: localStorage.getItem("token"),
  name: localStorage.getItem("name"),
  isRejectedPassword: false,
};

export const logoutUser = createAsyncThunk("/logout/", async (_, thunkAPI) => {
  try {
    await axios.post(
      `http://localhost:5000/api/logout`,
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
      `http://localhost:5000/api/login`,
      { email: _.email, password: _.password },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
    localStorage.setItem("email", _.email);
    localStorage.setItem("name", response.data.name);
    localStorage.setItem("auth", true);
    localStorage.setItem("token", response.data.token);
    console.log("Login effettuato con successo, token: ", response.data.token);
    localStorage.setItem("expiry", response.data.expiry);
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
      state.token = localStorage.getItem("token");
      state.email = localStorage.getItem("email");
      state.name = localStorage.getItem("name");
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
