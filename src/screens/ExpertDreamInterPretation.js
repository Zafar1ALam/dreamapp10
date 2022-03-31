import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
    View, ScrollView, Dimensions, Image, StyleSheet, TouchableOpacity
    , FlatList, Alert, Linking
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import {
    Appbar,
    Button,

    TouchableRipple
} from 'react-native-paper';
import STYLES from '../STYLES';

import COLORS from '../assets/colors/Color';
import { Chip, Text, useTheme } from 'react-native-paper';


import TextArea1 from '../Components/TextArea1';

import TextInputwithoutsvgheight from '../Components/TextInputwithoutsvgheight';
import AwesomeAlert from 'react-native-awesome-alerts';
import strings from '../lng/LocalizedString';
const ExpertDreamInterPretation = ({ navigation }) => {
    const [stateShowAlert, setStateShowAlert] = useState(false)
    const [stateTitle, setStateTitle] = useState()
    const [stateDescription, setStateDescription] = useState()
    const [stateEmail, setStateEmail] = useState()
    const [stateCardHolderName, setStateCardHolderName] = useState()
    const [stateTotalAmount, setStateTotalAmount] = useState()
    const [stateCardNo, setStateCardNo] = useState()
    const [stateMonth, setStateMonth] = useState('')
    const [stateYear, setStateYear] = useState('')
    const [stateCVV, setStateCVV] = useState()

    const [stateIsValidTitle, setStateIsValidTitle] = useState(true);
    const [stateIsValidDescription, setStateIsValidDescription] = useState(true);
    const [stateIsValidEmail, setStateIsValidEmail] = useState(true);
    const [stateIsValidCardHolderName, setStateIsValidCardHolderName] = useState(true);
    const [stateIsValidTotalAmount, setStateIsValidTotalAmount] = useState(true);
    const [stateIsValidCardNo, setStateIsValidCardNo] = useState(true);
    const [stateIsValidMonth, setStateIsValidMonth] = useState(true);
    const [stateIsValidYear, setStateIsValidYear] = useState(true);
    const [stateIsValidCVV, setStateIsValidCVV] = useState(true);

    const { colors } = useTheme();


    const payNow = () => {
        // console.log(stateTitle)
        // console.log(stateDescription)
        // console.log(stateEmail)
        // console.log(stateCardHolderName)
        // console.log(stateTotalAmount)
        // console.log(stateCardNo)
        // console.log(stateMonthYear)
        // console.log(stateCVV)
        if (stateTitle == undefined || stateTitle == '') {
            setStateIsValidTitle(false)
        }
        if (stateDescription == undefined || stateDescription == '') {
            setStateIsValidDescription(false)
        }
        if (stateEmail == undefined || stateEmail == '') {
            setStateIsValidEmail(false)
        }
        if (stateCardHolderName == undefined || stateCardHolderName == '') {
            setStateIsValidCardHolderName(false)
        }
        if (stateTotalAmount == undefined || stateTotalAmount == '') {
            setStateIsValidTotalAmount(false)
        }
        if (stateCardNo == undefined || stateCardNo == '' || stateCardNo.length != 16) {
            setStateIsValidCardNo(false)
            console.log(stateMonth.length + "error")
        }
        if (stateMonth == undefined || stateMonth == '' || stateMonth.length != 2) {
            setStateIsValidMonth(false)
        }
        if (stateYear == undefined || stateYear == '' || stateYear.length != 4) {
            setStateIsValidYear(false)
        }
        if (stateCVV == undefined || stateCVV == '' || stateCVV.length != 3) {
            setStateIsValidCVV(false)
        }
        if (!handleValidEmail(stateEmail)) {
            setStateIsValidEmail(false)

        }

        if (typeof (stateYear) == "string" && typeof (stateMonth) == "string"
            && typeof (stateCardNo) == "string" && typeof (stateCVV) == "string") {


            if (stateTitle != '' && stateDescription != '' && stateEmail != '' &&
                stateCardHolderName != '' && stateTotalAmount != '' && stateCardNo != ''
                && stateMonth != '' && stateCVV != '' && stateYear != '' && stateMonth.length == 2 &&
                stateYear.length == 4 &&
                stateCVV.length == 3 &&
                stateCardNo.length == 16



                && handleValidEmail(stateEmail)) {
                console.log(`title: ${stateTitle},
desc: ${stateDescription},
cardNumber: ${stateCardNo},
expMM: ${parseInt(stateMonth)},
expYY: ${parseInt(stateYear)},
cvv: ${parseInt(stateCVV)},
email: ${stateEmail},
name: ${stateCardHolderName},
amount: ${stateTotalAmount}`)
                console.log(parseInt(stateCVV))
                console.log(parseInt(stateYear))
                console.log(parseInt(stateMonth))
                console.log("valid record")
                setStateShowAlert(true)
                fetch('https://dream-app-mtechub.herokuapp.com/api/user/makeStipePay', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        title: stateTitle,
                        desc: stateDescription,
                        cardNumber: stateCardNo,
                        expMM: parseInt(stateMonth),
                        expYY: parseInt(stateYear),
                        cvv: parseInt(stateCVV),
                        email: stateEmail,
                        name: stateCardHolderName,
                        amount: stateTotalAmount
                    })
                })
                    .then((response) => response.json())
                    .then((json) => {

                        setStateShowAlert(false)
                        if (json.success) {
                            Alert.alert("Payment Charged Successfully")
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



    }

    const handleValidEmail = (val) => {
        let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
        if (reg.test(val)) {
            // console.log('true')
            return true;

        }
        else {
            // console.log('false')
            return false;
        }
    }



    return (
        <View style={{
            flex: 1, //backgroundColor: COLORS.whiteFFFFFF,
        }}>
            <Appbar.Header style={{
                backgroundColor: colors.background,
                //justifyContent: 'center',
                //alignItems: 'center',

            }}>

                <Appbar.BackAction onPress={() => {
                    navigation.goBack()
                }} />
                <Appbar.Content
                    style={{

                        alignItems: 'center'
                    }}
                    titleStyle={[STYLES.fontSize20_Roboto_Medium,
                        //{ alignSelf: 'center', }
                    ]}
                    title={strings.Expert_Dream_interPretation} color={COLORS.blue0093F5} />


            </Appbar.Header >
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <View style={{
                    flex: 1, //backgroundColor: 'green',
                    marginTop: '3%',

                    paddingHorizontal: '6%',
                    justifyContent: 'space-between'
                }}>

                    <View style={{
                        marginTop: '4%', borderWidth: 1, borderColor: colors.border,
                        marginBottom: '7%',
                        backgroundColor: COLORS.blue0093F5, paddingVertical: '1%', paddingHorizontal: '3%'
                    }} >
                        <Text style={{ textAlign: 'center' }}>{strings.msg}</Text>
                    </View>
                    <TextInputwithoutsvgheight
                        placeholder={strings.Title}
                        onChangeText={(text) => {
                            console.log(text)
                            setStateTitle(text)
                            setStateIsValidTitle(true)
                        }}
                    />
                    {stateIsValidTitle == false ? <Text style={{ color: 'red' }}>{strings.Enter_Valid_Title}</Text> : null}
                    <View style={{ height: 200 }}>
                        <TextArea1 placeholder={strings.Description}
                            onChangeText={(text) => {
                                console.log(text)
                                setStateDescription(text)
                                setStateIsValidDescription(true)
                            }}
                        />
                        {stateIsValidDescription == false ? <Text style={{ color: 'red' }}>{strings.Enter_Valid_Description} </Text> : null}
                    </View>
                    <TextInputwithoutsvgheight
                        placeholder={strings.Your_Email}
                        onChangeText={(text) => {
                            console.log(text)
                            setStateEmail(text)
                            setStateIsValidEmail(true)
                        }}
                    />
                    {stateIsValidEmail == false ? <Text style={{ color: 'red' }}>{strings.Enter_Valid_Email}</Text> : null}
                    <TextInputwithoutsvgheight
                        placeholder={strings.Total_Amount}
                        keyboardType="numeric"
                        onChangeText={(text) => {
                            console.log(text)
                            setStateTotalAmount(text)
                            setStateIsValidTotalAmount(true)
                        }}
                    />
                    {stateIsValidTotalAmount == false ? <Text style={{ color: 'red' }}>{strings.Enter_Valid_Total_Amount}</Text> : null}

                    <TextInputwithoutsvgheight
                        placeholder={strings.Card_Holder_Name}
                        onChangeText={(text) => {
                            console.log(text)
                            setStateCardHolderName(text)
                            setStateIsValidCardHolderName(true)
                        }}
                    />

                    {stateIsValidCardHolderName == false ? <Text style={{ color: 'red' }}>{strings.Enter_Valid_Card_Holder_Name}</Text> : null}

                    <TextInputwithoutsvgheight
                        placeholder={strings.Card_No}
                        keyboardType="numeric"
                        onChangeText={(text) => {
                            console.log(text)
                            setStateCardNo(text)
                            setStateIsValidCardNo(true)
                        }}
                    />
                    {stateIsValidCardNo == false ? <Text style={{ color: 'red' }} >{strings.Enter_Valid_Card_No}</Text> : null}

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                        <View style={{ width: '30%' }}>
                            <TextInputwithoutsvgheight
                                placeholder={strings.MM}
                                keyboardType="numeric"
                                onChangeText={(text) => {
                                    console.log(text)
                                    setStateMonth(text)
                                    setStateIsValidMonth(true)
                                }} />
                            {stateIsValidMonth == false ? <Text style={{ color: 'red' }}>{strings.Enter_Valid_MM}</Text> : null}
                        </View>

                        <View style={{ width: '30%' }}>
                            <TextInputwithoutsvgheight
                                placeholder={strings.YYYY}
                                keyboardType="numeric"
                                onChangeText={(text) => {
                                    console.log(text)
                                    setStateYear(text)
                                    setStateIsValidYear(true)
                                }} />
                            {stateIsValidYear == false ? <Text style={{ color: 'red' }}>{strings.Enter_Valid_YYYY} </Text> : null}
                        </View>
                        <View style={{ width: '30%' }}>
                            <TextInputwithoutsvgheight
                                placeholder={strings.CVV}
                                keyboardType="numeric"
                                onChangeText={(text) => {
                                    console.log(text)
                                    setStateCVV(text)
                                    setStateIsValidCVV(true)
                                }}
                            />
                            {stateIsValidCVV == false ? <Text style={{ color: 'red' }}>{strings.Enter_Valid_CVV} </Text> : null}
                        </View>
                    </View>

                    <View style={{ paddingHorizontal: '4%', marginTop: '5%', marginBottom: "10%" }}>
                        <Button onPress={() => { payNow() }}
                            uppercase={false}
                            style={{
                                height: 50,
                                justifyContent: 'center'
                            }}
                            labelStyle={[STYLES.fontSize20_FFFFFF_Roboto_Regular, { color: colors.background }]}
                            color={COLORS.blue0093F5}
                            mode='contained'>{strings.PAYNOW}</Button>

                    </View>
                </View>
            </ScrollView>
            <AwesomeAlert
                show={stateShowAlert}
                showProgress={true}

                closeOnTouchOutside={false}
            //  closeOnHardwareBackPress={false}
            />
        </View>
    );
};

ExpertDreamInterPretation.propTypes = {

};

export default ExpertDreamInterPretation;