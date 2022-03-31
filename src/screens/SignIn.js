import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, ScrollView, TouchableOpacity, ActivityIndicator, View, Alert } from 'react-native'
import { SvgXml } from 'react-native-svg';
import Svgs from '../assets/svgs/Svgs'
import TextInput1 from '../Components/TextInput1';
import { Button, Text } from 'react-native-paper';
import Button1 from '../Components/Button1';
import STYLES from '../STYLES';
import AsyncStorage from '@react-native-async-storage/async-storage';
import COLORS from '../assets/colors/Color';
import AwesomeAlert from 'react-native-awesome-alerts';
import SweetAlert from 'react-native-sweet-alert';
import strings from '../lng/LocalizedString';
const SignIn = ({ navigation }) => {
    const [stateShowAlert, setStateShowAlert] = useState(false)
    const [stateIsValidEmail, setStateIsValidEmail] = useState(true);
    const [stateIsValidPassword, setStateIsValidPassword] = useState(true);

    const [stateData, setStataData] = useState({

        email: '',
        password: '',
    }
    )

    const multiSet = async (userId, userEmail, userName) => {
        console.log(userId)
        console.log(userEmail)
        console.log(userName)
        const firstPair = ["userId", userId]
        const secondPair = ["userEmail", userEmail]
        const thirdPair = ["userName", userName]
        try {
            await AsyncStorage.multiSet([firstPair, secondPair, thirdPair])
        } catch (e) {
            Alert.alert(e)
        }


    }
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

    const login = () => {
        console.log(stateData.email)
        console.log(stateData.password)

        if (!handleValidEmail(stateData.email)) {
            setStateIsValidEmail(false)
        }


        if (stateData.email == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidEmail(false)



        }

        if (stateData.password == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidPassword(false)
        }


        if (stateData.emailAddress != '' && stateData.password != ''

            && handleValidEmail(stateData.email)) {
            setStateShowAlert(true)
            //     console.log("a")
            fetch('https://dream-app-mtechub.herokuapp.com/api/user/signin', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: stateData.email,
                    password: stateData.password

                })
            })
                .then((response) => response.json())
                .then((json) => {
                    setStateShowAlert(false)
                    console.log(json)
                    if (json.success) {

                        console.log(json.myResult._id)
                        console.log(json.myResult.email)
                        multiSet(json.myResult._id, json.myResult.email, json.myResult.username)
                        navigation.navigate("AppName")
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
            <View style={{
                flex: 1, //width: Dimensions.get('window').width,
                // height: Dimensions.get('window').height,
                paddingHorizontal: '8%',
                // backgroundColor: COLORS.whiteFFFFFF
            }}>





                <View >
                    <View style={{ marginTop: '20%' }}>
                        <TextInput1
                            name="email"
                            placeholder={strings.Email}
                            onChangeText={(text) => {
                                setStateIsValidEmail(true)
                                setStataData({
                                    ...stateData, email: text
                                })
                            }}
                        />
                        {stateIsValidEmail == false ? <Text style={{ color: 'red' }}>{strings.Enter_Valid_Password}</Text> : null}

                    </View>
                    <View style={{ marginTop: '10%' }}>
                        <TextInput1
                            name="lock"
                            placeholder={strings.Password}
                            secureTextEntry={true}
                            onChangeText={(text) => {
                                setStateIsValidPassword(true)
                                setStataData({
                                    ...stateData, password: text
                                })
                            }}
                        />
                        {stateIsValidPassword == false ? <Text style={{ color: 'red' }}>{strings.Enter_Valid_Password}</Text> : null}
                    </View>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate("ForgotPassword") }}>
                        <Text style={[{
                            alignSelf: 'flex-end',
                            marginTop: '5%'
                        }, STYLES.fontSize12_1C1A1A_Roboto_Regular]}>{strings.Forgot_Password}</Text>
                    </TouchableOpacity>
                </View>
                <View >
                    {/* <View style={{ height: 40 }}> */}
                    <Button1 text={strings.LOGIN} onPress={() => {
                        login()
                        // navigation.navigate("AppName")
                    }} />
                    {/* </View> */}
                    <TouchableOpacity onPress={() => { navigation.navigate("SignUp") }}>
                        <Text style={[{
                            marginVertical: '8%',
                            alignSelf: 'center'
                        }, STYLES.fontSize15_1C1A1A_Roboto_Regular]}>{strings.Dont_have_an_account_Sign_Up}</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </ScrollView>




    );
};

SignIn.propTypes = {

};

export default SignIn;