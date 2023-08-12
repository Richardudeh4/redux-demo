const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  numofCakes: 0,
  list: [],
};

const Cake_Slice = createSlice({
  name: 'cake_slice',
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      state.numofCakes=payload;
    },
    decrement: (state, { payload }) => {
      state.numofCakes--;
    },
    addList:(state,{payload})=>{
    state.list.push(payload)

    }
  },
});

module.exports = Cake_Slice.reducer;
module.exports.cakeActions = Cake_Slice.actions;
