import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  surname: "",
  amka: "",
  address: "",
  number: "",
  email: "",
  resultAllPatient: [],
  isLoadingAllPatient: false,
  isOkInsertPatient: false,
  isLoading: false,
  isRejectedInsertPatient: false,
};

export const registerPatient = createAsyncThunk(
  "/inserPatient",
  async (_, thunkAPI) => {
    try {
      await axios.post(
        `http://mypatientcare.eu/api/inserPatient`,
        {
          name: _.name,
          surname: _.surname,
          amka: _.amka,
          address: _.address,
          number: _.number,
          email: _.email,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Paziente inserito con successo");
    } catch (error) {
      return thunkAPI.rejectWithValue("Qualcosa è andato storto");
    }
  }
);

export const AllPatient = createAsyncThunk(
  "/foundAllPatient",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://mypatientcare.eu/api/foundAllPatient`,
        {},
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Qualcosa è andato storto");
    }
  }
);

const registerSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setSurname: (state, action) => {
      state.surname = action.payload;
    },
    setAMKA: (state, action) => {
      state.amka = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setNumber: (state, action) => {
      state.number = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setResult: (state, action) => {
      state.result = action.payload;
    },
    setIsRejectedInsertPatient: (state, action) => {
      state.isRejectedInsertPatient = action.payload;
    },
  },
  extraReducers: {
    [registerPatient.fulfilled]: (state, action) => {
      state.isRejectedInsertPatient = false;
      state.isOkInsertPatient = true;
      state.isLoading = false;
      state.name = "";
      state.email = "";
      state.surname = "";
      state.amka = "";
      state.address = "";
      state.number = "";
    },
    [registerPatient.pending]: (state, action) => {
      state.isLoading = true;
    },
    [registerPatient.rejected]: (state, action) => {
      state.isLoading = false;
      state.isRejectedInsertPatient = true;
    },
    [AllPatient.fulfilled]: (state, action) => {
      state.isLoadingAllPatient = false;
      state.resultAllPatient = action.payload;
    },
    [AllPatient.pending]: (state, action) => {
      state.isLoadingAllPatient = true;
    },
    [AllPatient.rejected]: (state, action) => {
      state.isLoadingAllPatient = false;
    },
  },
});

export const {
  setName,
  setSurname,
  setAMKA,
  setAddress,
  setNumber,
  setEmail,
  setIsRejectedInsertPatient,
} = registerSlice.actions;

export default registerSlice.reducer;
