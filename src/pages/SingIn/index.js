import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import * as Animatable from 'react-native-animatable'
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";


export default function SingIn(){
    const navigation = useNavigation();
    return(
        <View style={Styles.container}>

            <Animatable.View animation="fadeInLeft" delay={600} style={Styles.containerHeader}>
                <Text style={Styles.message}>Bem-vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={Styles.containerForm}>

                <Text style={Styles.title}>E-mail</Text>
                <TextInput
                placeholder="Digite seu email..."
                style={Styles.input}
                />

                <Text style={Styles.title}>Senha</Text>
                <TextInput
                placeholder="Digite sua senha..."
                secureTextEntry={true}
                style={Styles.input}
                />

                    <TouchableOpacity style={Styles.button}>
                        <Text style={Styles.buttonText}>Acessar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.register} onPress={() => navigation.navigate('Register')}>
                        <Text style={Styles.registerText}>Não tem uma conta? Cadastre-se</Text>
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
    register: {
        marginTop: 14,
    },
    registerText: {
        color: '#a1a1a1',
    },
})