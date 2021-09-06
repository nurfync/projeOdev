import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import TabNavigation from './TabNavigation';
import Settings from '../Screens/Setting'
import { Svgs } from '../StylingConstants';
import Header from '../Utils/Header';

function Feed({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Feed Screen</Text>
            <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
            <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
        </View>
    );
}

function Notifications({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Notifications Screen</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('HomeTab')}>
                <Text>kapat</Text>
            </TouchableOpacity>
        </View>
    );
}
 const Stack=createStackNavigator()
const SettingStack = () => {
    return (
        <Stack.Navigator
            screenOptions={({ navigation }) => {
                return {

                    headerTitle: () => <Header svg={Svgs.Settings} iconStatus={false} text={'Ayarlar'} navigation={navigation}></Header>
                    // Header custom component
                }
            }}
        >
            
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    )
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator
        initialRouteName={'HomeTab'}
        >
            <Drawer.Screen name="HomeTab" component={TabNavigation} options={{title:'Home'}} />
            <Drawer.Screen name="Notifications" component={Notifications} />
            <Drawer.Screen name="feed" component={Feed} />
            <Drawer.Screen name="settings" component={SettingStack} />
        </Drawer.Navigator>
        
    );
}

export default MyDrawer;