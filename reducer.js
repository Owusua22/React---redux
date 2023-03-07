import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Users"


export const Store = configureStore({
    reducer: {
        users: userReducer,
      
      },
    })

