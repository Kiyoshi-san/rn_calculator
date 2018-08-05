// COMBINE REDUCERS ESTA SERVINOD PARA DELEGAR PEDAÇOS DE ESTADOS PRA CADA REDUCER
import { combineReducers } from "redux";

import fn_clicouReducer from "./clicouReducer";

const rootReducer = combineReducers({
	clicouReducer: fn_clicouReducer,
});

export default rootReducer; 
