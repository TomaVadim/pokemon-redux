import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "@/stores/redux/root-reducer/root-reducer";

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDicpatch = typeof store.dispatch;
