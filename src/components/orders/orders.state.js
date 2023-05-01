import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
  restaurants: [],
  offers: [],
  steps: {
    currentStep: 0,
  },
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    saveOrders: (state, action) => {
      state.orders = action.payload;
    },
    saveRestaurants: (state, action) => {
      state.restaurants = action.payload;
    },
    saveOffers: (state, action) => {
      state.offers = action.payload;
    },
    setCurrentStep: (state, action) => {
      state.steps.currentStep = action.payload;
    },
    updateStep: (state, action) => {
      const { stepId, value, isValid } = action.payload;
      const openedStep = state.steps[stepId];
      if (!openedStep) {
        state.steps[stepId] = {};
      }

      state.steps[stepId].value = value;
      state.steps[stepId].isValid = isValid;
    },
    clearNewOrderModalData: (state) => {
      state.restaurants = initialState.restaurants;
      state.offers = initialState.offers;
      state.steps = initialState.steps;
      state.chosenRestaurant = state.chosenOffers = undefined;
    },
    setChosenRestaurant: (state, action) => {
      state.chosenRestaurant = action.payload;
    },
    setChosenOffers: (state, action) => {
      state.chosenOffers = action.payload;
    },
  },
});

export const {
  saveOrders,
  saveRestaurants,
  saveOffers,
  setCurrentStep,
  updateStep,
  clearNewOrderModalData,
  setChosenRestaurant,
  setChosenOffers,
} = ordersSlice.actions;

export default ordersSlice.reducer;
