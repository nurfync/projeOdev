import React from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import MyDrawer from './Drawer';
import Login from '../Screens/Login/Login';
import { userSelector } from '../Redux/UserRedux';



// uygulamanın root navigation dosyası
const MainNavigation = props => {

    const loggedInUser = useSelector(userSelector)
     
        return (   

            <NavigationContainer>
                <StatusBar backgroundColor="white" barStyle="dark-content" />

                {
                    loggedInUser ?
                        <MyDrawer />
                                          

                        :
                        <Login />
                }
                </NavigationContainer>

    )
}

export default MainNavigation;