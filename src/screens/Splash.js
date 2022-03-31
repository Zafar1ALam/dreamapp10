import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';
import STYLES from '../STYLES';
import { SvgXml } from 'react-native-svg';
import Svgs from '../assets/svgs/Svgs';
import { Text } from 'react-native-paper';
import strings from '../lng/LocalizedString';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Splash = ({ navigation }) => {
    const [stateIsVisible, setStateIsVisible] = useState(true)

    // useEffect(() => {
    //     getMyObject()

    // }, [])
    const getMyObject = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('userId')
            if (jsonValue != null) {
                return (
                    navigation.navigate("AppName")

                    // setState_AS_UserId(jsonValue),
                    // setStateActivityIndicator(false),
                    // console.log(jsonValue)

                )
            }
            else {
                return (
                    navigation.navigate("App")
                    // console.log(jsonValue),
                    // setStateActivityIndicator(false),
                    // setState_AS_UserId('a')
                )
            }
        } catch (e) {
            alert(e)
        }
    }


    useEffect(() => {
        {
            if (!stateIsVisible) {
                //  navigation.navigate("App")
                getMyObject()
            }
            else {
                setTimeout(() => {
                    setStateIsVisible(false)
                }
                    , 4000);
            }
        }

    }, [stateIsVisible])

    return (
        <View style={STYLES.withoutpaddingcontainer}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                {/* <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="91.968" height="91.968" viewBox="0 0 81.968 81.968">
  <path id="Path_421" data-name="Path 421" d="M43.231,2.25,2.25,16.887l8.438,49.767L43.234,84.218,75.756,66.654l8.462-49.767ZM59.335,60.8,54.47,50.553H32L27.133,60.8H19.815l23.42-51.23L66.654,60.8Z" transform="translate(-2.25 -2.25)" fill="#0093f5"/>
</svg>
`} /> */}
                <Image source={require('../assets/images/splashlogo.png')} style={{ height: "100%", width: "100%" }} />
                {/* <Text style={[STYLES.fontSize21_1C1A1A_Roboto_Regular,
                { marginTop: '8%' }]} >MY LOGO HERE</Text> */}
            </View>

        </View>
    );
};

Splash.propTypes = {

};

export default Splash;