import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/* 
npm install --save redux react-redux
npm install --save-dev remote-redux-devtools
*/
// CRIANDO A STORE - VAMOS PASSAR TODAS AS NOSSAS REDUCERS AQUI NA CREATE STORE
import { createStore } from "redux";
import { Provider } from "react-redux";
import devToolsEnhancer from "remote-redux-devtools";
import rootReducer from "./reducers";

import Display from "./components/Display";
import Botao from "./components/Botao";


const store = createStore(rootReducer, devToolsEnhancer());

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <View style={estilo.container}>
                    <View style={estilo.display}>
                        <Display />
                    </View>

                    <View style={estilo.containerBotoes}>
                        <View style={estilo.linha}>
                            <Botao style={estilo.botao}
                                valor={"CE"}
                                largura={1}
                                cor={"#D0D0D0"}
                            />
                            <Botao style={estilo.botao}
                                valor={"C"}
                                largura={1}
                                cor={"#D0D0D0"}
                            />
                            <Botao style={estilo.botao}
                                valor={"<-"}
                                largura={1}
                                cor={"#D0D0D0"}
                            />
                            <Botao style={estilo.botao}
                                valor={"/"}
                                largura={1}
                                cor={"#D0D0D0"}
                            />
                        </View>
                        <View style={estilo.linha}>
                            <Botao style={estilo.botao}
                                valor={"7"}
                                largura={1}
                                cor={"#D0D0D0"}
                            />
                            <Botao style={estilo.botao}
                                valor={"8"}
                                largura={1}
                                cor={"#D0D0D0"}
                            />
                            <Botao style={estilo.botao}
                                valor={"9"}
                                largura={1}
                                cor={"#D0D0D0"}
                            />
                            <Botao style={estilo.botao}
                                valor={"X"}
                                largura={1}
                                cor={"#D0D0D0"}
                            />
                        </View>
                        <View style={estilo.linha}>
                            <Botao style={estilo.botao}
                                valor={"4"}
                                largura={1}
                                cor={"#D0D0D0"}
                            />
                            <Botao style={estilo.botao}
                                valor={"5"}
                                largura={1}
                                cor={"#D0D0D0"}
                            />
                            <Botao style={estilo.botao}
                                valor={"6"}
                                largura={1}
                                cor={"#D0D0D0"}
                            />
                            <Botao style={estilo.botao}
                                valor={"-"}
                                largura={1}
                                cor={"#D0D0D0"}
                            />
                        </View>
                        <View style={estilo.linha}>
                            <Botao style={estilo.botao}
                                valor={"1"}
                                largura={1}
                                cor={"#D0D0D0"}
                            />
                            <Botao style={estilo.botao}
                                valor={"2"}
                                largura={1}
                                cor={"#D0D0D0"}
                            />
                            <Botao style={estilo.botao}
                                valor={"3"}
                                largura={1}
                                cor={"#D0D0D0"}
                            />
                            <Botao style={estilo.botao}
                                valor={"+"}
                                largura={1}
                                cor={"#D0D0D0"}
                            />
                        </View>
                        <View style={estilo.linha}>
                            <Botao style={estilo.botao}
                                valor={"+/-"}
                                largura={1}
                                cor={"#D0D0D0"}
                            />
                            <Botao style={estilo.botao}
                                valor={"0"}
                                largura={1}
                                cor={"#D0D0D0"}
                            />
                            <Botao style={estilo.botao}
                                valor={","}
                                largura={1}
                                cor={"#D0D0D0"}
                            />
                            <Botao style={estilo.botao}
                                valor={"="}
                                largura={1}
                                cor={"#D0D0D0"}
                            />
                        </View>
                    </View>
                </View>
            </Provider>
        );
    }
}

const estilo = StyleSheet.create({
    container: {
        marginTop: 30,
        backgroundColor: '#fff',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    },
    display: {
        alignSelf: 'stretch',
    },
    containerBotoes: {
        
    },
    linha: {
        flexDirection: "row",
    },
    botao: {
        // flex: 7
    }
});
