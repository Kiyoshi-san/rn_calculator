import { 
	CLICOU_TECLA
} from "../actions"

const INITIAL_STATE = {
	valor: 0
}

const fn_clicouReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CLICOU_TECLA:
			/*CRIANDO UM NOVO OBJETO COM TODAS AS PROPRIEDADES QUE TEM NO MEU STATE*/
			return {
				...state,
				valor: action.valor
			};
		default:
			return state;
	}
}


export default fn_clicouReducer;