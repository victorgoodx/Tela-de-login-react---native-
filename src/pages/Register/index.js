import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import * as Animatable from 'react-native-animatable'
import { TextInput } from "react-native-gesture-handler";


import { useNavigation } from "@react-navigation/native";

export default function Register(){
    const navigation = useNavigation();
    return(
        <View style={Styles.container}>

            <Animatable.View animation="fadeInLeft" delay={600} style={Styles.containerHeader}>
                <Text style={Styles.message}>Bem-vindo(a), Cadastre-se</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={Styles.containerForm}>

                <Text style={Styles.title}>E-mail</Text>
                <TextInput
                placeholder="Digite um email..."
                style={Styles.input}
                />

                <Text style={Styles.title}>Senha</Text>
                <TextInput
                secureTextEntry={true}
                placeholder="Digite uma senha..."
                style={Styles.input}
                />

                    <TouchableOpacity style={Styles.button}>
                        <Text style={Styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.retornaButton} onPress={() => navigation.navigate('SingIn')}>
                        <Text style={Styles.retornaText}>Já tem uma conta ? clique aqui para ir para página de login</Text>
                    </TouchableOpacity>

            </Animatable.View>

        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DA291C',
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    containerForm: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
    },
    button: {
        backgroundColor: '#DA291C',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    retornaButton: {
        marginTop: 14,
    },
    retornaText: {
        color: '#a1a1a1',
    },
})
