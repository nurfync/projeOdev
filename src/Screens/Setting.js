import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Metrics from '../constant/Metrics';
import { signOut } from '../Firebase/Firebase';
import { setUserOutAC, userSelector } from '../Redux/UserRedux';

const Settings = props => {
    const user = useSelector(userSelector)
    const dispatch = useDispatch()
    
    const _onPress_SignOut = () => {
        console.log('çıkış')
       dispatch(setUserOutAC())
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ justifyContent: 'space-between', flex: 1 }}>
                <Text
                    style={styles.mailText}
                >e-posta = {user.email}</Text>
                <View style={styles.buttonCont}>
                    <TouchableOpacity style={styles.button}
                        onPress={_onPress_SignOut}
                    >
                        <Text style={styles.logOutText}>Çıkış</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Settings;

const styles = StyleSheet.create({
    mailText: {
        margin: Metrics.width * 0.05,
        fontSize: Metrics.width * 0.05,
        color: '#14a6ff'
    },
    logOutText: {
        color: 'white',
        fontSize: Metrics.width * 0.045,
        margin: Metrics.width * 0.02,


    },
    buttonCont: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: Metrics.width * 0.05,
        padding: Metrics.width * 0.05,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        width: '80%',
        borderRadius: 20,
        backgroundColor: '#1DA1F2',
        borderColor: '#1DA1F2'
    }
});