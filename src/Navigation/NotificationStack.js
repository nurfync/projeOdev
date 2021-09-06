import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import NotificationsScreen from '../Screens/Notifications';
import Header from '../Utils/Header';
import { Svgs } from '../StylingConstants';

const Stack = createStackNavigator();

const HomeStack = props => {
    return (
        <Stack.Navigator
            // navigation object değeri ile mevcut durumda geliştirme yapamadım şu an işlevsiz ama kullanmaya çalışıyodum.
            // headerTitle prop u ile header kısmını özelleştiriyorum.
            screenOptions={({ navigation }) => {
                return {

                    headerTitle: () => <Header svg={Svgs.TwBird} iconStatus={false} text={'Bildirimler'} navigation={navigation}></Header>
                    // Header custom component
                }
            }}
        >
            <Stack.Screen name="NotificationsScreen" component={NotificationsScreen}

            />
        </Stack.Navigator>
    );
};

export default HomeStack;

