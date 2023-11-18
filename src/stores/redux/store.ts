import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore();

export type AppDicpatch = typeof store.dispatch;
