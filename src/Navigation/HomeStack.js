import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/Home';
import Header from '../Utils/Header';
import { Svgs } from '../StylingConstants';

const Stack = createStackNavigator();

const HomeStack = props => {
    return (
        <Stack.Navigator
            screenOptions={({ navigation }) => {
                return {
                    headerTitle: () => <Header svg={Svgs.TwBird} iconStatus={true} navigation={navigation}></Header>
                    // Header custom component

                }
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    );
};

export default HomeStack;

