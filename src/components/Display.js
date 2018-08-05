import React from "react";
import { StyleSheet, View, Text } from "react-native";


import { connect } from "react-redux";

class Display extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            valor: 0,
            expressaoA: "0" ,
            expressaoB: "0",
        }
    }

    fn_expressaoB() {

    }

    fn_resultado(sinal, expressaoA, expressaoB) {
        let resultado;
        switch (sinal) {            
            case "/" :
                resultado = expressaoA / expressaoB;
                expressaoA = 0;
                expressaoB = 0;
                return resultado;
            case "X" :
                resultado = expressaoA * expressaoB;
                expressaoA = 0;
                expressaoB = 0;
                return resultado;
            case "-" :
                resultado = expressaoA - expressaoB;
                expressaoA = 0;
                expressaoB = 0;
                return resultado;
            case "+" :
                resultado = expressaoA + expressaoB;
                expressaoA = 0;
                expressaoB = 0;
                return resultado;
        }
    }

    validaNumero(valor) {
        if(/[0-9]/g.test(valor)){
            this.state.expressaoA += valor;
            return this.state.expressaoA;
        } else {
            switch (valor) {
                case "CE":
                    this.state.expressaoA = 0;
                    return this.state.expressaoA;
                case "C" :
                    this.state.expressaoA = 0;
                    return this.state.expressaoA;
                case "<-" :
                    if (this.state.expressaoA.length > 1) {
                        this.state.expressaoA = this.state.expressaoA.substring(0, this.state.expressaoA.length - 1)
                    } else {
                        this.state.expressaoA = 0;
                    }
                    return this.state.expressaoA;
                case "/" :
                    this.sinal = valor;
                    this.state.expressaoB += valor;
                    return this.state.expressaoB;
                case "X" :
                    this.sinal = valor;
                    this.state.expressaoB += valor;
                    return this.state.expressaoB;
                case "-" :
                    this.sinal = valor;
                    this.state.expressaoB += valor;
                    return this.state.expressaoB;
                case "+" :
                    this.sinal = valor;
                    this.state.expressaoB += valor;
                    return this.state.expressaoB;
                case "+/-" :
                    this.state.expressaoA *= (-1);
                    return this.state.expressaoA;
                case "," :
                    this.state.expressaoA += ",";
                    return this.state.expressaoA;
                case "=" :
                    const resultado = this.fn_resultado(this.state.sinal, this.state.expressaoA, this.state.expressaoB);
                    return resultado;
                default:
                    this.state.expressaoA = 0;
                    return this.state.expressaoA;
                
            }
        }
    }

    render() {
        // const { valor } = this.state;
        const { clicouReducerLocal } = this.props;
        /* this.setState ({
            valor: clicouReducerLocal
        }); */
        const valorNaTela = this.validaNumero(clicouReducerLocal);
        
        return(
            // <View>
            //     {// todos.map(todo => <Text key={ todo.id }>{ todo.texto }</Text>) }
            //     { todos.map(todo => (
            //         <TodoListItem 
            //             key={ todo.id }
            //             todo={todo}
            //             apertouTodo={() => dispatchToggleTodo(todo.id)}
            //             cliqueLongo={() => dispatchEditarTodo(todo)}
            //         />
            //     ))}
            // </View>

            <View style={estilo.display}>
                    <Text style={estilo.textoDisplay}>
                            { valorNaTela }
                    </Text>
                {/* { clicouReducerLocal.map (crl => (
                ))} */}
            </View>
        );
    }
};


/* const Display = ({ 
	clicouReducerLocal
}) => {
	return(
        <View style={estilo.display}>
            { clicouReducerLocal.map (crl => (
                <Text style={estilo.textoDisplay}>
                        { clicouReducerLocal }
                </Text>
            ))}
        </View>
	);
}; */


const estilo = StyleSheet.create({
    display: {
		height: 60,
        borderTopColor: "#ddd",
        borderRightColor: "#ddd",
        borderBottomColor: "#ddd",
        borderLeftColor: "#ddd",
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderStyle: "solid",
    },
    textoDisplay: {
        fontSize: 26,
        alignSelf: "stretch", // CENTRALIZA O TEXTO EIXO X - TECNICA DO FLEXBOX
    }
});

// CONECTANDO O STATE COM O COMPONENTE DISPLAY PARA TER ACESSO AOS DADOS
// CONEXÃO DO PROP LOCAL COM O REDUCER - SELECTOR
/* const mapStateToProps = state => {
    const { clicouReducerLocal } = state;
	return { clicouReducerLocal };
} */
const mapStateToProps = state => {
	return {
        clicouReducerLocal: state.clicouReducer.valor
    };
}


// export default Display;
// mapStateToProps - ACESSO AO STATE DO REDUX
// mapDispatchToProps - ENVIO DA DISPATCH PARA ALTERAR O STATE NO REDUX
export default connect(
    mapStateToProps,
    // ,{
    //     dispatchClicou: clicouTecla,
    // }
    null
)(Display);