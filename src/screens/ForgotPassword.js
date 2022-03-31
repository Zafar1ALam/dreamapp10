import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Dimensions, Alert, Image } from 'react-native'
import TextInput1 from '../Components/TextInput1';
import Button1 from '../Components/Button1';
import { Text } from 'react-native-paper';
import STYLES from '../STYLES';
import { SvgXml } from 'react-native-svg';
import Svgs from '../assets/svgs/Svgs';
import AwesomeAlert from 'react-native-awesome-alerts';
import strings from '../lng/LocalizedString';
const ForgotPassword = ({ navigation }) => {
    const [stateShowAlert, setStateShowAlert] = useState(false)
    const [stateIsValidEmail, setStateIsValidEmail] = useState(true);
    const [stateData, setStataData] = useState({
        email: '',

    }
    )

    const handleValidEmail = (val) => {
        let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
        if (reg.test(val)) {
            console.log('true')
            return true;

        }
        else {
            console.log('falsse')
            return false;
        }
    }

    const sendCode = () => {
        console.log(stateData.email)

        if (!handleValidEmail(stateData.email)) {
            setStateIsValidEmail(false)
        }


        if (stateData.email == '') {
            console.log(stateData.email + 'emailaddress')
            setStateIsValidEmail(false)



        }




        if (stateData.email != '' && handleValidEmail(stateData.email)) {
            setStateShowAlert(true)
            fetch('https://dream-app-mtechub.herokuapp.com/api/user/sendMail/' + stateData.email, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                // body: JSON.stringify({

                //     Email: stateData.email

                // })
            })
                .then((response) => response.json())
                .then((json) => {

                    console.log(json)
                    setStateShowAlert(false)
                    if (json.success) {

                        navigation.navigate("VerificationCode"
                            , {
                                routeStateemail: stateData.email
                            }
                        )
                    }

                    else {
                        Alert.alert('plz insert valid data')
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
            <View style={STYLES.container}>
                <View style={{
                    flex: 0.3, //backgroundColor: 'red',
                    alignItems: 'center', justifyContent: 'center'
                }}>
                    {/* <SvgXml xml={Svgs.logo} /> */}
                    <Image source={require('../assets/images/newLogo1.png')} style={{ height: 100, width: 100 }} />
                    {/* <Text style={[STYLES.fontSize12_1C1A1A_Roboto_Regular,
                    { marginTop: '3%' }]}>{strings.MY_LOGO_HERE}</Text> */}
                </View>
                <View style={{
                    flex: 0.25,// backgroundColor: 'green',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        flex: 0.3, alignItems: 'center',
                        //backgroundColor: 'yellow'
                    }}>
                        <Text style={[STYLES.fontSize21_1C1A1A_Roboto_Regular]}>{strings.Forgot_Password}</Text>

                    </View>

                    <View style={{
                        flex: 0.5, //backgroundColor: 'orange',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={[{
                            // marginBottom: '10%',
                            alignSelf: 'center',
                            textAlign: 'center'
                        }, STYLES.fontSize13_1C1A1A_Roboto_Regular]}>{strings.Enter_Email_for_Verification_Code}</Text>


                        <TextInput1 name="email"
                            placeholder={strings.Email}
                            onChangeText={(text) => {
                                setStateIsValidEmail(true)
                                setStataData({
                                    ...stateData, email: text
                                })
                            }} />

                        {stateIsValidEmail == false ? <Text style={{ color: 'red' }}>{strings.Enter_Valid_Email}</Text> : null}
                    </View>
                </View>
                <View style={{
                    flex: 0.45, //backgroundColor: 'blue',
                    justifyContent: 'flex-end'
                }}>
                    <View style={{ marginBottom: '10%' }}>
                        <Button1 text={strings.SEND_CODE} onPress={() => {
                            sendCode()
                            // navigation.navigate("ResetPassword")
                        }} />
                    </View>
                </View>


            </View >
        </ScrollView>
    );
};



export default ForgotPassword;