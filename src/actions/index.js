export const CLICOU_TECLA = "CLICOU_TECLA";
export const clicouTecla = valor => {
	return ({
		type: CLICOU_TECLA,
		valor
	});
}