import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Dimensions, TouchableOpacity, Alert } from 'react-native'
import TextInput1 from '../Components/TextInput1';
import Button1 from '../Components/Button1';
import { Text } from 'react-native-paper';
import STYLES from '../STYLES';
import AntDesign from 'react-native-vector-icons/AntDesign'
import COLORS from '../assets/colors/Color';
import { SvgXml } from 'react-native-svg';
import Svgs from '../assets/svgs/Svgs';
import TextInputUserName from '../Components/TextInputUserName';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AwesomeAlert from 'react-native-awesome-alerts';
import SweetAlert from 'react-native-sweet-alert';
import strings from '../lng/LocalizedString';
const SignUp = ({ navigation }) => {
    const [stateShowAlert, setStateShowAlert] = useState(false)
    const [stateIsValidUserName, setStateIsValidUserName] = useState(true);
    const [stateIsValidEmail, setStateIsValidEmail] = useState(true);
    const [stateIsValidPassword, setStateIsValidPassword] = useState(true);

    const [stateData, setStataData] = useState({
        userName: '',
        email: '',
        password: '',
    }
    )

    const multiSet = async (userId, userEmail, userName) => {
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

    const signUp = () => {
        console.log(stateData.email)
        console.log(stateData.password)
        console.log(stateData.userName)
        if (!handleValidEmail(stateData.email) && stateData.email != '') {
            // setStateIsValidEmail(false)
            console.log('a')
            Alert.alert("Enter Valid Email")
        }


        if (stateData.userName == '') {
            //console.log(stateData.userName + 'userName')
            setStateIsValidUserName(false)




        }
        if (stateData.email == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidEmail(false)



        }

        if (stateData.password == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidPassword(false)
        }


        if (stateData.userName != '' && stateData.emailAddress != '' && stateData.password != ''

            && handleValidEmail(stateData.email)) {
            setStateShowAlert(true)
            fetch('https://dream-app-mtechub.herokuapp.com/api/user/register', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: stateData.email,
                    username: stateData.userName,
                    password: stateData.password

                })
            })
                .then((response) => response.json())
                .then((json) => {
                    setStateShowAlert(false)
                    console.log(json)
                    if (json.success) {
                        SweetAlert.showAlertWithOptions({
                            title: 'Account Successfully Created',
                            //  subTitle: '',
                            confirmButtonTitle: 'OK',

                            confirmButtonColor: '#000',

                            style: 'success',
                            //cancellable: true
                        },
                            // callback => console.log('callback')
                        );
                        console.log(json.addedUser._id + " or " + json.addedUser.email
                            + " or " + json.addedUser.username)
                        multiSet(json.addedUser._id, json.addedUser.email, json.addedUser.username)
                        navigation.navigate("SignIn")
                    }

                    else {
                        Alert.alert('Email Already Exist')
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

                paddingHorizontal: '8%',
                // backgroundColor: COLORS.whiteFFFFFF,
                flex: 1,
                //justifyContent: "space-evenly"
                //backgroundColor: 'yellow'
            }}>

                <View >
                    <View style={{ marginTop: '20%' }}>
                        <TextInputUserName


                            placeholder={strings.Username}
                            onChangeText={(text) => {
                                setStateIsValidUserName(true)
                                setStataData({
                                    ...stateData, userName: text
                                })
                            }}
                        />
                        {stateIsValidUserName == false ? <Text style={{ color: 'red' }}>{strings.Enter_Valid_Username}</Text> : null}

                    </View>
                    <View style={{ marginTop: '10%' }}>
                        <TextInput1

                            Svgs={Svgs.userNameLogo}
                            name="email"
                            placeholder={strings.Email}

                            onChangeText={(text) => {
                                setStateIsValidEmail(true)
                                setStataData({
                                    ...stateData, email: text
                                })
                            }}
                        />
                        {stateIsValidEmail == false ? <Text style={{ color: 'red' }}>{strings.Enter_Valid_Email} </Text> : null}

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

                </View>
                <View >
                    <Button1 text={strings.SIGNUP}
                        onPress={() => {
                            signUp()
                        }}
                    />
                    <TouchableOpacity onPress={() => {

                        navigation.navigate("SignIn")
                    }}>

                        <Text style={[{
                            marginVertical: '8%',
                            alignSelf: 'center'
                        }, STYLES.fontSize15_1C1A1A_Roboto_Regular]}>{strings.Have_an_account_Sign_In}</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>
    );
};

SignUp.propTypes = {

};

export default SignUp;