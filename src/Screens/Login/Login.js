import LoginUI from './LoginUI';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signUp, signIn } from '../../Firebase/Firebase'
import { setUserAC } from '../../Redux/UserRedux';
import { setIsLoadingAC } from '../Loading/LoadingRedux';


const Login = props => {

    const [isLogin, setLogin] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const dispatch = useDispatch()

    const onPress_SignUp = () => {
        dispatch(setIsLoadingAC(true)); //loading modalı açılır

        signUp(email, password)
            .then(responce => {
                alert("kayıt başarılı")
                dispatch(setIsLoadingAC(false));

            })
            .catch(reject => {
                alert(reject)
                dispatch(setIsLoadingAC(false));

            })
    }

    const onPress_SignIn = () => {
        dispatch(setIsLoadingAC(true)); //loading modalı açılır
        
        signIn(email, password)
            .then(responce => {
                // alert("giriş başarılı")
                dispatch(setUserAC(responce.user))
                dispatch(setIsLoadingAC(false));

            })
            .catch(reject => {
                alert(reject)
                dispatch(setIsLoadingAC(false)); 
            })
    }
    return (
        <LoginUI
            emailValue={email}
            passwordValue={password}
            passwordConfirmValue={passwordConfirm}
            onChangeText_Email={setEmail}
            onChangeText_Password={setPassword}
            onChangeText_PasswordConfirm={setPasswordConfirm}
            onPress_SignUp={onPress_SignUp}
            onPress_SignIn={onPress_SignIn}

        />
    );
};

export default Login;
