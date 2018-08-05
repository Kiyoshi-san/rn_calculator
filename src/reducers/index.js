// COMBINE REDUCERS ESTA SERVINOD PARA DELEGAR PEDAÇOS DE ESTADOS PRA CADA REDUCER
import { combineReducers } from "redux";

import clicouReducer from "./clicouReducer";

const rootReducer = combineReducers({
	clicouReducer: clicouReducer,
});

export default rootReducer; 
