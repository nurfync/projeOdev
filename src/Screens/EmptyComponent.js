import React from 'react';
import { Text, View,StyleSheet} from 'react-native';
import Metrics from '../constant/Metrics';


const EmptyComponent = props => {

    const message ='Mesaj kutunuz boş :)'
    return (
        <View >
            <Text style={styles.text }>{ message}</Text>
        </View>
    )
}
export default EmptyComponent

const styles = StyleSheet.create({
    text: {
        fontSize:Metrics.width*0.05
    }
});