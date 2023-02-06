import {createSlice, PayloadAction, AnyAction} from '@reduxjs/toolkit';

export type CounterState = {
  value: number;
};

const initialState = {
  value: 10,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: CounterState, _: AnyAction) => {
      state.value++;
    },
    decrement: (state: CounterState, _: AnyAction) => {
      state.value--;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      console.log(action.payload);
      state.value += action.payload;
    },
  },
});

export const {decrement, increment, incrementByAmount} = counterSlice.actions;
export const selectCount = (state: any) => state.counter.value;
export default counterSlice.reducer;
