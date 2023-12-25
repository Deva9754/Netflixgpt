
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Userslice";
import moviesReducer from  "./Movieslice";
import gptReducer from "./GptSlice";
import configReducer from "./ConfigSlice"


const appStore = configureStore({
    reducer : {
        user :userReducer,
        movies: moviesReducer,
        gpt:gptReducer,
        config: configReducer,
    },
});
export default appStore;