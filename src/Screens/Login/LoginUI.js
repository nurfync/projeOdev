import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import Metrics from '../../constant/Metrics';
import { Svgs } from '../../StylingConstants';
import HideKeyboard from '../../Utils/HideKeyboard';
import Icon from '../../Utils/Icon';

const LoginUI = props => {

    const [isLogin, setIsLogin] = useState(true);

    return (
        <HideKeyboard>
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <View style={styles.icon}>
                        <Icon svg={Svgs.TwBird} iconStyle={{ color: '#1DA1F2' }} ></Icon>
                    </View>
                    <Text style={styles.loginText}>Twitter'a Giriş yap</Text>
                </View>
                <View style={styles.inputsContainer}>
                    <TextInput
                        value={props.emailValue}
                        onChangeText={props.onChangeText_Email}
                        style={styles.textInput}
                        keyboardType='email-address'
                        placeholder='e-posta'>
                    </TextInput>
                    <TextInput
                        value={props.passwordValue}
                        onChangeText={props.onChangeText_Password}
                        secureTextEntry={true}
                        style={styles.textInput}
                        placeholder='Parola'></TextInput>
                    {
                        isLogin ?
                            null
                            :
                            <TextInput
                                value={props.passwordConfirmValue}
                                onChangeText={props.onChangeText_PasswordConfirm}
                                secureTextEntry={true}
                                style={styles.textInput}
                                placeholder='Parola Tekrar'
                            ></TextInput>
                    }
                    <TouchableOpacity style={styles.loginButton}
                        onPress={isLogin ? props.onPress_SignIn : props.onPress_SignUp}
                    >
                        <Text style={styles.buttonText}>{isLogin ? 'Giriş Yap' : 'Kayıt Ol'}</Text>
                    </TouchableOpacity>
                    <View style={styles.resetRegisterContainer}>
                        <TouchableOpacity>
                            <Text style={styles.resetRegisterButton}>Şifreni mi unuttun?</Text>
                        </TouchableOpacity>
                        <View style={styles.point}>
                            <Text>.</Text>
                        </View>
                        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
                            <Text style={styles.resetRegisterButton}>{isLogin ? "Twitter'a kayıt ol" : 'Giriş'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </HideKeyboard>
    );
};

export default LoginUI;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 1
    },
    icon: {
        width: Metrics.width * 0.15,
        height: Metrics.width * 0.2
    },
    loginText: { fontSize: Metrics.width * 0.07 },
    inputsContainer: {
        flex: 0.7,
        width: Metrics.width * 0.8
    },
    textInput: {
        borderRadius: 20,
        backgroundColor: '#dde0e1',
        marginVertical: Metrics.width * 0.03,
        paddingLeft: Metrics.width * 0.05
    },
    loginButton: {
        borderRadius: 20,
        backgroundColor: '#1DA1F2',
        alignItems: 'center',
        marginVertical: Metrics.width * 0.03
    },
    buttonText: {
        padding: Metrics.width * 0.03,
        color: 'white'
    },
    resetRegisterContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: Metrics.width * 0.05,
        alignItems: 'center'
    },
    resetRegisterButton: {
        color: '#5BBBF6',
        fontSize: Metrics.width * 0.04
    },
    point: {
        marginHorizontal: Metrics.width * 0.015
    }
});