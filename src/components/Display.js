import React from "react";
import { StyleSheet, View, Text } from "react-native";


import { connect } from "react-redux";

class Display extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            valor: 0
        }
    }

    render() {
        // const { valor } = this.state;
        const { clicouReducerLocal } = this.props;
        /* this.setState ({
            valor: clicouReducerLocal
        }); */
        console.log(this.props);
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
                            { clicouReducerLocal }
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