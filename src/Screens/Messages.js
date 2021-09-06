import React, { useState,useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList ,Text} from 'react-native';
import Metrics from '../constant/Metrics'
import { Svgs } from '../StylingConstants';
import Icon from '../Utils/Icon';
import Modal from 'react-native-modal';
import MessageBox from '../Utils/MessageBox';


import { getMessages } from '../Firebase/Firebase';

const Messages = props => {
    const [messageList, setMessageList] = useState([]); 

    const [isVisible, setVisible] = useState(false)
    const _visibility = val => {
        setVisible(val)
    }

    useEffect(() => {
        // subscribe
        const off = getMessages(data => {
            setMessageList(data);
        });

        // unsubscribe
        return () => {
            off();
        }
    }, []);

    const _render_Item = ({ item }) => {
        // item'e basıldığında id'sini gönderiyoruz
        return (
            <TouchableOpacity style={{ flex: 1,borderColor:'black',borderWidth:1,margin:Metrics.width*0.03,borderRadius:Metrics.width*0.03 }}
            >
                <Text>{ item.to}</Text>
                <Text
                    numberOfLines={2}
                >{item.message}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                style={{ flexGrow: 0,marginBottom:80 }}
                data={messageList}
                renderItem={_render_Item }
                keyExtractor={(item, index) => item.key+index}
                inverted
            />

            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.circle}
                    onPress={() => _visibility(true)}>
                    <Icon svg={Svgs.NewMessage} iconStyle={{ color: 'white' }}></Icon>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                isVisible={isVisible}
                backdropColor='black'
                backdropOpacity={0.5}
                onBackdropPress={() => _visibility(false)}
                style={{
                    justifyContent: "flex-end",
                    margin: 0
                }}
            >
                <MessageBox
                    visibility={(val) => _visibility(val)}
                />
            </Modal>
        </View>
    );
};
export default Messages;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    iconContainer: {
        flex: 0.15,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        right:Metrics.width*0.003,
        bottom: Metrics.width * 0.03
    },
    circle: {
        height: Metrics.width * 0.15,
        width: Metrics.width * 0.15,
        borderRadius: 100,
        backgroundColor: '#1DA1F2',
        marginRight: Metrics.width * 0.02,
        padding: Metrics.width * 0.03,
        paddingBottom: 0,
    }
});