import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../Screens/Search';
import Header from '../Utils/Header';
import { Svgs } from '../StylingConstants';

const Stack = createStackNavigator();

const SearchStack = props => {
    return (
        <Stack.Navigator
            // navigation object değeri ile mevcut durumda geliştirme yapamadım şu an işlevsiz ama kullanmaya çalışıyodum.
            // headerTitle prop u ile header kısmını özelleştiriyorum.

            screenOptions={({ navigation }) => {
                return {
             
                headerTitle: () => <Header svg={Svgs.TwBird} iconStatus={false} text={'Arama'} navigation={navigation} ></Header>
                // Header custom component
                }
            }}
        >
        

            <Stack.Screen name="SearchScreen" component={SearchScreen} />
        </Stack.Navigator>
    );
};

export default SearchStack;

