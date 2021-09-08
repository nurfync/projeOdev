import React from 'react';
import { Text, View } from 'react-native';
import LottieView from 'lottie-react-native'
import Metrics from '../constant/Metrics';


const HeartBox = props => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%',width:'100%',flex: 1,}}>
            <LottieView
                style={{
                    width: Metrics.width * 1,
                    height: Metrics.width * 1,

                }}

                source={require('../StylingConstants/animation/hearth.json')}
                key={props.key}
                autoPlay={false}
                loop={false}
            />
        </View>
    );
};

export default HeartBox;
