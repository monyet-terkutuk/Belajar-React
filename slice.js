import toolkit from "@reduxjs/toolkit";

const { configureStore, createSlice } = toolkit;

const cartSLice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

// store
const store = configureStore({
  reducer: {
    cart: cartSLice.reducer,
  },
});

// subscribe
console.log("oncreate store : ", store.getState());
store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

// dispatch
store.dispatch(cartSLice.actions.addToCart({ id: 1, qty: 20 }));
