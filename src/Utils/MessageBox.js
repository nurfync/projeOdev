import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Metrics from '../constant/Metrics';
import { sendMessage } from '../Firebase/Firebase';
import { userSelector } from '../Redux/UserRedux';


const MessageBox = props => {
    const user = useSelector(userSelector)
    const [to, setTo] = useState('')
    const [message, setMessage] = useState('')
    const userID = user.uid

    const _sendMessage = async (userID, { name: to, message }) => {

        if (to.trim() === '' || message.trim() === '') {
            alert("Kişi ve ya Mesaj boş bırakılamaz")
        }
        else {
            await sendMessage(userID, { name: to, message })
            props.visibility(false)
        }

    }
    return (
        <View
            style={styles.container}>
            <View>
                <View style={styles.rows}>
                    <Text style={styles.text}>Kime</Text>
                    <TextInput
                        style={styles.inputText}
                        value={to}
                        onChangeText={setTo}
                    ></TextInput>
                </View>

                <View style={styles.rows}>
                    <Text style={styles.text}>Mesaj</Text>
                    <TextInput
                        multiline
                        style={styles.inputText}
                        numberOfLines={10}
                        value={message}
                        onChangeText={setMessage}
                    ></TextInput>
                </View>
            </View>

            <View style={styles.buttonCont}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => _sendMessage(userID, { name: to, message })}

                >
                    <Text style={{ color: 'white' }}>Gönder</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MessageBox;

const styles = StyleSheet.create({
    container: {
        height: Metrics.width * 0.9,
        backgroundColor: 'white',
        padding: Metrics.width * 0.05,
        justifyContent: 'space-between'
    },
    rows: {
        flexDirection: 'row',
        marginBottom: Metrics.width * 0.05
    },
    inputText:
    {
        borderWidth: 1,
        flex: 0.8,
        borderRadius: Metrics.width * 0.03,
        textAlignVertical: "top",
        paddingHorizontal: Metrics.width * 0.03

    },
    text: {
        flex: 0.2,
        marginTop: Metrics.width * 0.02
    },
    buttonCont: {
        alignSelf: 'flex-end',
        width: Metrics.width * 0.2,
        justifyContent: 'center',
        alignItems: 'center',

    },
    button: {
        borderWidth: 1,
        borderRadius: Metrics.width * 0.03,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#1DA1F2',
        borderColor: '#1DA1F2'
    }
});