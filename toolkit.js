import toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

const addToCart = createAction("ADD_TO_CART");

// reducer
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const login = createAction("CREATE_SESSION");
const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

// store
const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});

// subscribe
console.log("oncreate store : ", store.getState());
store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

// dispatch
store.dispatch(addToCart({ id: 1, qty: 34 }));
store.dispatch(addToCart({ id: 1, qty: 37 }));

store.dispatch(login());
