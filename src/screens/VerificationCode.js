import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Alert, Image, ScrollView, Text, View } from 'react-native'
import STYLES from '../STYLES';


import { StyleSheet } from "react-native";
import COLORS from '../assets/colors/Color'
import Button1 from '../Components/Button1';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { SvgXml } from 'react-native-svg';
import Svgs from '../assets/svgs/Svgs';
import { useTheme } from 'react-native-paper';

import AwesomeAlert from 'react-native-awesome-alerts';
import strings from '../lng/LocalizedString';

const CELL_COUNT = 4;
const VerificationCode = ({ route, navigation }) => {
    const { routeStateemail } = route.params;
    const { colors } = useTheme();
    console.log(routeStateemail)
    const [stateIsValidOTPCode, setStateIsValidOTPCode] = useState(true)
    const [stateShowAlert, setStateShowAlert] = useState(false)
    const [value, setValue] = useState('');
    const [stateAsyncEmail, setStateAsyncEmail] = useState();
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });


    useEffect(() => {
        Alert.alert('check your email')

    }, [])




    const verify = () => {

        console.log(stateAsyncEmail)
        console.log(value)


        if (value.length == 4) {
            setStateIsValidOTPCode(true)
        }

        if (value.length != 4) {
            //  console.log(stateData.password + 'password')
            setStateIsValidOTPCode(false)
        }

        let a = parseInt(value)
        console.log(typeof (a))
        console.log('https://dream-app-mtechub.herokuapp.com/api/user/checkOtp/' + routeStateemail + '/otpCode:' +
            a
        )

        if (value.length == 4) {
            console.log("call api")
            console.log(value)
            setStateShowAlert(true)
            fetch('https://dream-app-mtechub.herokuapp.com/api/user/checkOtp/' + routeStateemail, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                    otpCode: a

                })
            })
                .then((response) => response.json())
                .then((json) => {
                    setStateShowAlert(false)
                    console.log(json)
                    if (json.success) {
                        console.log(json)
                        //Alert.alert(json.message)
                        navigation.navigate("ResetPassword"
                            ,
                            {
                                rstateEmail: routeStateemail
                            }
                        )
                    }
                    else {
                        Alert.alert(json.message)
                        navigation.navigate("ForgotPassword")
                    }

                })
                .catch((error) => {

                    console.error(error);
                });
        }

    }

    return (
        <ScrollView>
            <AwesomeAlert
                show={stateShowAlert}
                showProgress={true}

                closeOnTouchOutside={false}
            //  closeOnHardwareBackPress={false}
            />
            <View style={[STYLES.container,
            { paddingHorizontal: "10%" }]}>

                <View style={{
                    flex: 0.25, //backgroundColor: 'red',
                    marginTop: '10%',
                    justifyContent: 'flex-end', alignItems: 'center',
                }}>
                    <View style={{ marginBottom: '10%' }}>
                        {/* <SvgXml xml={Svgs.logo} /> */}
                        <Image source={require('../assets/images/newLogo1.png')} style={{ height: 100, width: 100 }} />
                    </View>

                </View>
                <View style={{
                    flex: 0.55,
                    alignItems: 'center',
                    //  backgroundColor: 'green'
                }}>
                    <Text style={[STYLES.fontSize30_000000_Roboto_Regular],
                        { color: colors.text }}>{strings.Verification_Code}</Text>
                    <Text style={[STYLES.fontSize18_black000000_59_Roboto_Regular,
                    { textAlign: 'center', color: colors.text }]}>{strings.We_have_sent_you_a_code_on_your_email}</Text>
                    <Text style={[STYLES.fontSize18_black000000_59_Roboto_Regular,
                    { textAlign: 'center', marginTop: '4%', color: colors.text }]}>{strings.Enter_Code_Below}</Text>

                    <CodeField
                        ref={ref}
                        {...prop}
                        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (
                            value == '' ?

                                <Text
                                    key={index}
                                    style={[styles.cell, { borderColor: colors.border }, isFocused && styles.focusCell, {
                                        borderColor: colors.border
                                    }]}
                                    onLayout={getCellOnLayoutHandler(index)}>{console.log(index)}
                                    {console.log('a')}
                                    {console.log(symbol)}
                                    {console.log(isFocused)}
                                    {symbol || (isFocused ? <Cursor /> : null)}

                                </Text>
                                : <Text
                                    key={index}
                                    style={[styles.cell, { borderColor: colors.border, color: colors.text }, isFocused && styles.focusCell, {
                                        borderColor: colors.border
                                    }]}
                                    onLayout={getCellOnLayoutHandler(index)}>{console.log(index)}
                                    {console.log(symbol)}
                                    {console.log(isFocused)}
                                    {symbol || (isFocused ? <Cursor /> : null)}

                                </Text>

                        )}
                    />
                    {stateIsValidOTPCode == false ? <Text style={{ color: 'red' }}>{strings.Enter_Valid_OTP_Code}</Text> : null}
                </View>

                <View style={{
                    justifyContent: 'flex-end',
                    flex: 0.20,// backgroundColor: 'pink'
                }}>
                    <View style={{ marginBottom: '5%' }}>
                        <Button1 text={strings.VERIFY}
                            onPress={() => {
                                console.log(value)
                                verify()
                                //navigation.navigate("VerificationSuccessful")
                            }} />
                    </View>

                </View>
            </View>
        </ScrollView >

    );
};

VerificationCode.propTypes = {

};

export default VerificationCode;


const styles = StyleSheet.create({
    //   root: {flex: 1, padding: 20,backgroundColor:'green'},

    codeFieldRoot: {
        width: '90%', alignSelf: 'center',
        // backgroundColor: 'red',
        marginTop: '5%'
    },
    cell: {
        width: 45,

        height: 50,
        lineHeight: 48,
        fontSize: 20,
        borderWidth: 2,
        borderRadius: 5,
        // borderColor: '#00000030',
        textAlign: 'center',
        marginTop: '6%',
        //backgroundColor:'orange'
    },
    focusCell: {
        borderColor: '#000',
    },
});
