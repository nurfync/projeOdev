import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';


import Metrics from '../constant/Metrics';
import { Svgs } from '../StylingConstants';
import Icon from '../Utils/Icon';

const Splash = props => {
    return (
        <>
            <StatusBar backgroundColor='#1DA1F2' barStyle="light-content" />
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <Icon svg={Svgs.TwBird} iconStyle={{ color: 'white' }}></Icon>
                </View>
            </View>
        </>
    );
};

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1DA1F2'
    },
    iconContainer: {
        width: Metrics.width * 0.17
    }
});


