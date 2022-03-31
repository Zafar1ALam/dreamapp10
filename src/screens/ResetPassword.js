import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Dimensions, Alert } from 'react-native'
import TextInput1 from '../Components/TextInput1';
import Button1 from '../Components/Button1';
import { Text } from 'react-native-paper';
import STYLES from '../STYLES';
import { SvgXml } from 'react-native-svg';
import Svgs from '../assets/svgs/Svgs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AwesomeAlert from 'react-native-awesome-alerts';
import strings from '../lng/LocalizedString';
const ResetPassword = ({ route, navigation }) => {
    const { rstateEmail } = route.params;
    useEffect(() => {
        getMyObject()
    })
    const [stateShowAlert, setStateShowAlert] = useState(false)
    const [stateIsValidPassword, setStateIsValidPassword] = useState(true);
    const [stateIsValidConfirmPassword, setStateIsValidConfirmPassword] = useState(true);
    const [stateAsyncEmail, setStateAsyncEmail] = useState();
    const [stateData, setStataData] = useState({

        password: '',
        confirmPassword: ''
    }
    )



    const getMyObject = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('userEmail')
            console.log(jsonValue)
            if (jsonValue != null) {
                console.log(jsonValue),
                    setStateAsyncEmail(jsonValue)
            }
            else { return null }
        } catch (e) {
            alert(e)
        }
    }

    const passwordCheck = () => {
        if (stateData.password === stateData.confirmPassword) {
            return true;
        }
        else {
            return false;
        }
    }

    const continue1 = () => {

        console.log(stateData.password)
        console.log(stateData.confirmPassword)



        if (stateData.password == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidPassword(false)
        }

        if (stateData.confirmPassword == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidConfirmPassword(false)



        }
        console.log(passwordCheck())
        if (!passwordCheck()) {
            console.log('a')
            alert("enter same password and confirm password")
        }
        console.log(rstateEmail)
        console.log('https://dream-app-mtechub.herokuapp.com/api/user/updatePass/' + rstateEmail)
        if (stateData.password != '' && stateData.confirmPassword != '' && passwordCheck()) {
            console.log("a")
            setStateShowAlert(true)
            fetch('https://dream-app-mtechub.herokuapp.com/api/user/updatePass/' + rstateEmail, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                    password: stateData.password,
                    confirmPassword: stateData.confirmPassword

                })
            })
                .then((response) => response.json())
                .then((json) => {
                    setStateShowAlert(false)
                    console.log(json)
                    if (json.success) {
                        // Alert.alert(json.message)
                        navigation.navigate("SignIn")
                    }

                    // else {
                    //     Alert.alert()
                    // }
                })
                .catch((error) => {

                    console.error(error);
                });
        }
    }

    return (
        <ScrollView>
            <View style={STYLES.container}>
                <View style={{
                    flex: 0.3, //backgroundColor: 'red',
                    alignItems: 'center', justifyContent: 'center'
                }}>
                    <SvgXml xml={Svgs.logo} />
                    <Text style={[STYLES.fontSize12_1C1A1A_Roboto_Regular,
                    { marginTop: '3%' }]}>{strings.MY_LOGO_HERE}</Text>
                </View>
                <View style={{
                    flex: 0.32, //backgroundColor: 'green',
                    // justifyContent: 'space-between'
                }}>
                    <View style={{
                        flex: 0.25, alignItems: 'center',
                        // backgroundColor: 'yellow'
                    }}>
                        <Text style={[STYLES.fontSize21_1C1A1A_Roboto_Regular]}>{strings.Reset_Password}</Text>

                    </View>

                    <View style={{
                        flex: 0.65,// backgroundColor: 'orange',
                        justifyContent: 'space-between'
                    }}>

                        <TextInput1 name="lock"
                            placeholder={strings.Password}
                            secureTextEntry={true}
                            onChangeText={(text) => {
                                setStateIsValidPassword(true)
                                setStataData({
                                    ...stateData, password: text
                                })
                            }}
                        />
                        {stateIsValidPassword == false ? <Text style={{ color: 'red' }}>valid Password Password Enter</Text> : null}
                        <TextInput1 name="lock"

                            placeholder={strings.Confirm_Password}
                            secureTextEntry={true}
                            onChangeText={(text) => {
                                setStateIsValidConfirmPassword(true)
                                setStataData({
                                    ...stateData, confirmPassword: text
                                })
                            }}
                        />
                        {stateIsValidConfirmPassword == false ? <Text style={{ color: 'red' }}>valid Confirm Password Enter</Text> : null}

                    </View>
                </View>
                <View style={{
                    flex: 0.38, //backgroundColor: 'blue',
                    justifyContent: 'flex-end'
                }}>
                    <View style={{ marginBottom: '10%' }}>
                        <Button1 text={strings.CONTINUE}
                            onPress={() => { continue1() }} />
                        {/* navigation.navigate("SignIn") */}
                    </View>
                </View>


            </View >
        </ScrollView>
    );
};



export default ResetPassword;