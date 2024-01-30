import { createSlice } from "@reduxjs/toolkit";
import { FormValues } from "../../pages/Home/FormHome/types/FormValues";
import getCarType from "../../utils/getCarType";

interface FormState {
  isRegistering: boolean;
  successData: FormValues;
}

const initialState: FormState = {
  isRegistering: true,
  successData: {
    carType: "",
    city: "",
    code: "",
    country: "",
    email: "",
    fullName: "",
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    showFormSuccess(state) {
      state.isRegistering = false;
    },
    showFormRegister(state) {
      state.isRegistering = true;
    },
    setSuccessData(state, action: { payload: FormValues }) {
      const carTypeFormatted = getCarType(action.payload.carType) as string;
      state.successData = { ...action.payload, carType: carTypeFormatted };
    },
  },
});

export const { showFormRegister, showFormSuccess, setSuccessData } =
  formSlice.actions;
export default formSlice.reducer;
