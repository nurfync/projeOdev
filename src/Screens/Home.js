import React from 'react';
import { FlatList, Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Metrics from '../constant/Metrics';
import { Svgs } from '../StylingConstants';
import Icon from '../Utils/Icon';
import DummyData from './Data/DummyData';

const renderItem = ({ item }) => {

    return (
        <View style={styles.tweetContainer}>
            <View style={styles.tweetContent}>
                <View style={styles.imageContainer} >
                    <View >
                        <Image
                            style={styles.image}
                            source={item.img}
                        ></Image>
                    </View>
                </View>
                <View style={styles.tweetInfoCont}>
                    <View style={styles.userTimeInfo}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>{item.name}</Text>
                            <Text style={ styles.nicnameTimeText}> @{item.nickname}</Text>
                        </View>
                        <Text style={ [styles.nicnameTimeText,{paddingRight: 10}]} >{item.time}</Text>
                    </View>
                    <View >
                        <Text>{item.tweet}</Text>
                    </View>
                    <View style={styles.iconsContainer}>

                        <TouchableOpacity style={styles.icon}>
                            <Icon svg={Svgs.Comment} iconStyle={styles.iconColor}></Icon>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.icon}>
                            <Icon svg={Svgs.Heart} iconStyle={styles.iconColor}></Icon>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.icon}>
                            <Icon svg={Svgs.Retweet} iconStyle={styles.iconColor}></Icon>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.icon}>
                            <Icon svg={Svgs.Upload} iconStyle={styles.iconColor}></Icon>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </View>
    )
}
const Home = props => {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={DummyData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
            />
        </View>
    );
};

export default Home;
const styles = StyleSheet.create({
    icon: {
        width: Metrics.width * 0.04,
        aspectRatio: 1
    },
    iconColor: {
        color: '#6F6F6F'
    },
    nicnameTimeText: {
        color: '#6F6F6F'
    },
    tweetContainer: {
        flex: 0,
        marginVertical: Metrics.width * 0.01
    },
    tweetContent: {
        flex: 1,
        flexDirection: 'row'
    },
    imageContainer: {
        flex: 0.2,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    image: {
        width: Metrics.width * 0.15,
        height: Metrics.width * 0.15,
        borderRadius:100
    },
    tweetInfoCont: {
        flex: 0.8
    },
    userTimeInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: Metrics.width * 0.03
    }
});