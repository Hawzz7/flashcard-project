import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./slice/CardSlice";

const store = configureStore({
  reducer: {
    cards: CardSlice,
  },
});

export default store;
