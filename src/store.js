import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./routeReducer";

const store = configureStore({
    reducer: rootReducer,
    devTools: import.meta.env.DEV,
})

export default store;