import { configureStore } from "@reduxjs/toolkit";
import caseReducer from "./UseSlice"

export default configureStore({
    reducer:{
        case : caseReducer
    }
})