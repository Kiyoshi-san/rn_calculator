import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"


import { connect } from "react-redux";
import { clicouTecla } from "../actions";


// const valor = this.props.valor;
// const { valor } = this.props;

// const Botao = ( props ) => {
class Botao extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cor: props.cor,
            largura: props.largura,
        }
    }
    
    fn_valor_digitado(valor) {
        // clicouTecla(valor);
        if ( valor !== "" ) {
            return this.props.dispatchClicou(valor);			
        }
    }
    
    render() {
        const { valor, largura, cor } = this.props;

        var cor1 = this.state.cor;
        
        const estilo = StyleSheet.create ({
            linha: {
                borderTopColor: "#000",
                borderRightColor: "#000",
                borderBottomColor: "#000",
                borderLeftColor: "#000",
                borderTopWidth: 1,
                borderRightWidth: 1,
                borderBottomWidth: 1,
                borderLeftWidth: 1,
                borderStyle: "solid",
            },
            botao: {
                backgroundColor: cor1,
                height: 65,
                width:65,
                paddingLeft:20,
                paddingTop:20,
                fontSize: 18
                /* alignItems: 'center',
                justifyContent: 'center',
                alignSelf: "center", // CENTRALIZA EIXO X - TECNICA DO FLEXBOX */
            }
        });
        
        return (
            <TouchableOpacity onPress={() => {
                    // console.log("aa");
                    this.fn_valor_digitado(valor)
                }}>
                <View style={estilo.linha}>
				    <Text style={estilo.botao}>{ valor }</Text>
                </View>
            </TouchableOpacity>
        );

    }
}

// CONEXÃO DO PROP LOCAL COM O REDUCER - SELECTOR
// export default Botao;
const mapStateToProps = state => {
	return {
		clicouReducerLocal: state.clicouReducer
	}
}

// CONEXÃO DO PROP LOCAL COM A ACTION
export default connect(
	mapStateToProps,
	{
		dispatchClicou: clicouTecla
	}
)(Botao);