import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';


import HomeStack from '../Navigation/HomeStack';
import SearchStack from '../Navigation/SearchStack';
import NotificationStack from '../Navigation/NotificationStack';
import MessagesStack from '../Navigation/MessagesStack';

import Icon from '../Utils/Icon';
import { Svgs } from '../StylingConstants';
import Metrics from '../constant/Metrics'

// Her bir tab, ismi yazan stack i tutuyor.

const Tabs = createBottomTabNavigator();

const TabNavigation = props => {
    return (
        <Tabs.Navigator
           // Sadece ikonların gösterilmesi için tabbarda textin görünmesi false yapılıyor.
            tabBarOptions={{
                showLabel: false,
            }}

        >
            <Tabs.Screen name="HomeStack" component={HomeStack}
                options={{
                    // tabBarIcon: fonksiyon isteyen bu prop tabbarın ikonlarını özelleştirmek için kullanılıyor.
                    // focused: aktif ve pasif olma durumuna göre ikon renginin ayarlanmasını sağlıyor.
                    tabBarIcon: ({ focused }) => (
                        <View style= { styles.tabBarIcon } >
                            <Icon svg={Svgs.Home} iconStyle={{ color: focused ? '#1DA1F2' : '#808080' }} ></Icon>
                            {/*  Icon Componenti custom component  */}
                        </View>
                    )
                }}

            />
            <Tabs.Screen name="Search" component={SearchStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIcon}>
                            <Icon svg={Svgs.Search} iconStyle={{ color: focused ? '#1DA1F2' : '#808080' }} ></Icon>
                        </View>
                    )
                }} />
            <Tabs.Screen name="Notifications" component={NotificationStack} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarIcon}>
                        <Icon svg={Svgs.Ring} iconStyle={{ color: focused ? '#1DA1F2' : '#808080' }} ></Icon>
                    </View>
                )
            }} />
            <Tabs.Screen name="Messages" component={MessagesStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={ styles.tabBarIcon}>
                            <Icon svg={Svgs.Envelope} iconStyle={{ color: focused ? '#1DA1F2' : '#808080' }} ></Icon>
                        </View>
                    )
                }} />
        </Tabs.Navigator>
    );
}
export default TabNavigation;

const styles = StyleSheet.create({
    tabBarIcon: {
        width: Metrics.width * 0.06
    },
});