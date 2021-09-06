import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native';

import Metrics from '../constant/Metrics'
import { Svgs } from '../StylingConstants';
import Icon from './Icon';

const Header = (props) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.icon}
                onPress={() => props.navigation.toggleDrawer()}
            >
                <Icon svg={Svgs.MenuLines} iconStyle={{ color: '#1DA1F2' }} ></Icon>
            </TouchableOpacity>
            {
                props.iconStatus ?
                    <TouchableOpacity style={styles.iconBig}>
                        <Icon svg={props.svg} iconStyle={{ color: '#1DA1F2' }} ></Icon>
                    </TouchableOpacity>
                    :
                    <Text style={styles.text}>{props.text}</Text>

            }

            <TouchableOpacity style={styles.icon}
                onPress={() => props.navigation.navigate('settings')}
            >
                <Icon svg={Svgs.Settings} iconStyle={{ color: '#1DA1F2' }} ></Icon>
            </TouchableOpacity>

        </View>
    );
};



export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
        width: Metrics.width * 0.06,
        aspectRatio: 1

    },
    iconBig: {
        width: Metrics.width * 0.085,
        aspectRatio: 1
    },
    text: {
        fontWeight: 'bold',
        fontSize: Metrics.width * 0.05
    }
});