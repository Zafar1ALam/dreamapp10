import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
    View, ScrollView, Dimensions, Image, StyleSheet, TouchableOpacity
    , FlatList, Alert, Linking
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import {
    Appbar, Card, Title, Paragraph, Button,
    Avatar, IconButton, List, TextInput, Searchbar,
    FAB, Modal,
    Provider,
    TouchableRipple, useTheme
} from 'react-native-paper';
import STYLES from '../STYLES';
import { SvgXml } from 'react-native-svg';
import Svgs from '../assets/svgs/Svgs';
import COLORS from '../assets/colors/Color';
import { Chip, Text, } from 'react-native-paper';
import Button1 from '../Components/Button1';
import TextInput1 from '../Components/TextInput1';
import TextInputwithoutSVG from '../Components/TextInputwithoutSVG.js';
import DropDown from "react-native-paper-dropdown";
import TextArea1 from '../Components/TextArea1';
import RBSheet from "react-native-raw-bottom-sheet";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import TextInputwithoutsvgheight from '../Components/TextInputwithoutsvgheight';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Checkbox } from 'react-native-paper';
import AwesomeAlert from 'react-native-awesome-alerts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme as navigationusetheme } from '@react-navigation/native';
import RNRestart from 'react-native-restart';
import { useDispatch, useSelector } from 'react-redux';
import changeCheck from '../../redux/actions/counts'
import { changeLanguage } from '../../redux/actions/counts'
import strings from '../lng/LocalizedString';
const Settings = ({ navigation }) => {
    const dispatch = useDispatch();
    const reduxValue = useSelector(val => val.checkValue.check)
    const reduxGetLanguage = useSelector(val => val.checkValue.language)//val my hmesha pura store ayga // val.reducer.initial value
    console.log(reduxGetLanguage + "redux language")
    const [isDarkThemeChecked, setIsDarkThemeChecked] = useState(false);
    const [stateTitle, setStateTitle] = useState()
    const [stateDescription, setStateDescription] = useState()
    const [stateEmail, setStateEmail] = useState()
    const [stateCardHolderName, setStateCardHolderName] = useState()
    const [stateTotalAmount, setStateTotalAmount] = useState()
    const [stateCardNo, setStateCardNo] = useState()
    const [stateMonth, setStateMonth] = useState()
    const [stateYear, setStateYear] = useState()
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



    const { colors } = navigationusetheme()



    const languageList = [
        {
            id: 1,
            label: "English",
            value: "English",
        },
        {
            id: 2,
            label: "Spanish",
            value: "Spanish",
        },
    ];

    const buyABookListModernDreamDictionary = [
        {
            id: 1,
            label: "Amazon USA",
            link: "https://www.amazon.com/dp/1670252124"
        },
        {
            id: 2,
            label: "Amazon UK",
            link: "https://www.amazon.co.uk/dp/1670252124"
        },
        {
            id: 3,
            label: "Amazon Deutschland",
            link: "https://www.amazon.de/dp/1670252124"
        },
        {
            id: 4,
            label: "Amazon France",
            link: "https://www.amazon.fr/dp/1670252124"
        },
        {
            id: 5,
            label: "Amazon España",
            link: "https://www.amazon.es/dp/1670252124",
        },
        {
            id: 6,
            label: "Amazon Italia",
            link: "https://www.amazon.it/dp/1670252124"
        },
        {
            id: 7,
            label: "Amazon Japan",
            link: "https://www.amazon.co.jp/dp/1670252124"
        },
        {
            id: 8,
            label: "Amazon Canada",
            link: "https://www.amazon.ca/dp/1670252124",
        },
        {
            id: 9,
            label: "Amazon Australia",
            link: "https://www.amazon.com.au/dp/1670252124",
        },
    ];

    const buyABookListModernDreamTheory = [
        {
            id: 1,
            label: "Amazon USA",
            link: "https://www.amazon.com/dp/1478384891"
        },
        {
            id: 2,
            label: "Amazon UK",
            link: "https://www.amazon.co.uk/dp/1478384891"
        },
        {
            id: 3,
            label: "Amazon Deutschland",
            link: "https://www.amazon.de/dp/1478384891"
        },
        {
            id: 4,
            label: "Amazon France",
            link: "https://www.amazon.fr/dp/1478384891"
        },
        {
            id: 5,
            label: "Amazon España",
            link: "https://www.amazon.es/dp/1478384891",
        },
        {
            id: 6,
            label: "Amazon Italia",
            link: "https://www.amazon.it/dp/1478384891"
        },
        {
            id: 7,
            label: "Amazon Japan",
            link: "https://www.amazon.co.jp/dp/1478384891"
        },
        {
            id: 8,
            label: "Amazon Canada",
            link: "https://www.amazon.ca/dp/1478384891",
        },
        {
            id: 9,
            label: "Amazon Australia",
            link: "https://www.amazon.com.au/dp/1478384891",
        },
    ];

    const [languageModalVisible, setLanguageModalVisible] = useState(false);
    const [stateLanguage, setStateLanguage] = useState('Select Language');

    const refRBSheetExpertDreamRetation = useRef();
    const refRBSheetSelectLanguage = useRef();
    const refRBSheetBuyABook = useRef();

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

                        console.log(json)
                        if (json.message == "Payment Charged Successfully and also a mail has been sent to Admin.") {
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


        else {
            Alert.alert("plz enter data")
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


    const removeAsyncStorageDate = async () => {
        const keys = ['userId', 'userEmail']
        try {
            await AsyncStorage.multiRemove(keys)
            navigation.navigate("App")
        } catch (e) {
            Alert.alert(e)
        }
        // try {
        //     await AsyncStorage.removeItem(key);
        //     return true;
        // }
        // catch(exception) {
        //     return false;
        // }
        //console.log('Done')
    }


    // const onChangeLanguage = (lng) => {
    //     if (lng == "En") {
    //         strings.setLanguage(lng)
    //     } else {
    //         console.log("Sp")
    //         strings.setLanguage(lng)
    //     }
    // }

    if (reduxGetLanguage == 1) {
        strings.setLanguage("Sp")

    }
    if (reduxGetLanguage == 0) {
        strings.setLanguage("En")

    }
    return (

        <View style={STYLES.withoutpaddingcontainer}>
            <Appbar.Header style={{
                backgroundColor: colors.background,
                //justifyContent: 'center',
                //alignItems: 'center',

            }}>

                <Appbar.BackAction onPress={() => {
                    navigation.navigate("AppName")
                }} />
                <Appbar.Content
                    style={{

                        alignItems: 'center'
                    }}
                    titleStyle={[STYLES.fontSize20_Roboto_Medium,
                        //{ alignSelf: 'center', }
                    ]}
                    title={strings.Setting} color={COLORS.blue0093F5} />


            </Appbar.Header >


            {/* dark mode */}
            <View style={STYLES.container}>
                <TouchableRipple style={{
                    borderWidth: 1,
                    marginTop: '10%',
                    height: 50,
                    justifyContent: 'center',
                    //borderColor: COLORS.grey707070_52,
                    borderColor: colors.border,
                    borderRadius: 10
                }}

                    onPress={() => {

                        // paperTheme.dark

                        //RNRestart.Restart();
                        if (reduxValue == 0)
                            dispatch(changeCheck(1));
                        else
                            dispatch(changeCheck(0));
                    }}
                    rippleColor="rgba(0, 0, 0, .32)"
                >
                    <View style={{
                        flexDirection: 'row', marginHorizontal: '5%',
                        alignItems: 'center', justifyContent: 'space-between'
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{
                                width: 40, height: 40, backgroundColor: COLORS.grey505050_07,
                                borderRadius: 40, justifyContent: 'center', alignItems: 'center'
                            }}>

                                <SvgXml

                                    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="18.278" height="23.5" viewBox="0 0 18.278 23.5">
  <g id="Group_10965" data-name="Group 10965" transform="translate(-26.861 -16.25)">
    <path id="Icon_material-swap-vert" data-name="Icon material-swap-vert" d="M21.861,22.791V13.639H19.25v9.152H15.333L20.556,28l5.222-5.209ZM12.722,4.5,7.5,9.709h3.917v9.152h2.611V9.709h3.917Z" transform="translate(19.361 11.75)" fill="#0093f5"/>
  </g>
</svg>
`} />
                            </View>
                            <Text style={[{ marginLeft: '10%' }, STYLES.fontSize16_000000_Roboto_Regular]}>
                                {strings.Dark_Mode}</Text>
                        </View>
                        <View style={{

                            backgroundColor: COLORS.black000000_30,
                            height: 24, width: 24, borderRadius: 4,
                            alignItems: 'center', justifyContent: 'center'

                        }}>
                            <Checkbox
                                uncheckedColor={COLORS.black000000_30}
                                color={COLORS.black000000_30}
                                status={isDarkThemeChecked ? 'checked' : 'unchecked'}

                            />
                            {/* <AntDesign name="check" color={COLORS.whiteFFFFFF} size={20} /> */}
                        </View>
                    </View>
                </TouchableRipple>


                {/* select language */}
                <TouchableRipple style={{
                    borderWidth: 1,
                    marginTop: '10%',
                    height: 50,
                    justifyContent: 'center',
                    // borderColor: COLORS.grey707070_52
                    borderColor: colors.border,
                    borderRadius: 10
                }}

                    onPress={() => refRBSheetSelectLanguage.current.open()}
                    rippleColor="rgba(0, 0, 0, .32)"
                >

                    <View style={{
                        flexDirection: 'row', marginHorizontal: '5%',
                        alignItems: 'center', justifyContent: 'space-between',
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{
                                width: 40, height: 40,
                                backgroundColor: COLORS.grey505050_07,
                                borderRadius: 40, justifyContent: 'center', alignItems: 'center'
                            }}>

                                <SvgXml

                                    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="17.05" height="15.5" viewBox="0 0 17.05 15.5">
                                        <path id="Icon_material-translate" data-name="Icon material-translate" d="M10.7,13.129,8.731,11.184l.023-.023A13.577,13.577,0,0,0,11.629,6.1H13.9V4.55H8.475V3H6.925V4.55H1.5V6.092h8.657A12.177,12.177,0,0,1,7.7,10.246a12.125,12.125,0,0,1-1.79-2.6H4.36a13.61,13.61,0,0,0,2.309,3.534L2.724,15.075l1.1,1.1L7.7,12.3l2.41,2.41.589-1.581ZM15.063,9.2h-1.55l-3.488,9.3h1.55l.868-2.325h3.681L17,18.5h1.55Zm-2.031,5.425,1.256-3.356,1.255,3.356Z" transform="translate(-1.5 -3)" fill="#0093f5"/>
                                      </svg>
                                      
                                      
`} />
                            </View>
                            <Text style={[{ marginLeft: '10%' }, STYLES.fontSize16_000000_Roboto_Regular]}>{stateLanguage}</Text>
                        </View>

                        <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="12.039" height="6.02" viewBox="0 0 12.039 6.02">
  <path id="Icon_ionic-md-arrow-dropdown" data-name="Icon ionic-md-arrow-dropdown" d="M9,13.5l6.02,6.02,6.02-6.02Z" transform="translate(-9 -13.5)" fill="#b2b2b2"/>
</svg>
`} />

                    </View>

                </TouchableRipple>



                {/* rate us  */}

                <TouchableRipple style={{
                    borderWidth: 1,
                    marginTop: '8%',
                    height: 50,
                    justifyContent: 'center',
                    // borderColor: COLORS.grey707070_52,
                    borderColor: colors.border,

                    borderRadius: 10
                }}

                    //onPress={() => Linking.openURL('https://www.ukpressureradio.com/')}
                    rippleColor="rgba(0, 0, 0, .32)"
                >
                    <View style={{
                        flexDirection: 'row', marginHorizontal: '5%',
                        alignItems: 'center', justifyContent: 'space-between'
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{
                                width: 40, height: 40,
                                backgroundColor: COLORS.grey505050_07,
                                borderRadius: 40, justifyContent: 'center', alignItems: 'center'
                            }}>

                                <SvgXml

                                    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="18.397" height="17.609" viewBox="0 0 18.397 17.609">
                                        <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M9.653.612,7.408,5.165,2.384,5.9a1.1,1.1,0,0,0-.609,1.878L5.41,11.317l-.86,5a1.1,1.1,0,0,0,1.6,1.159l4.494-2.362,4.494,2.362a1.1,1.1,0,0,0,1.6-1.159l-.86-5,3.635-3.542A1.1,1.1,0,0,0,18.9,5.9l-5.024-.732L11.627.612a1.1,1.1,0,0,0-1.974,0Z" transform="translate(-1.441 0.001)" fill="#0093f5"/>
                                      </svg>
                                      
`} />
                            </View>
                            <Text style={[{ marginLeft: '10%' }, STYLES.fontSize16_000000_Roboto_Regular]}>{strings.Rate_Us}

                            </Text>
                        </View>

                    </View>
                </TouchableRipple>



                {/* Buy a Book */}

                <TouchableRipple style={{
                    borderWidth: 1,
                    marginTop: '8%',
                    height: 50,
                    justifyContent: 'center',
                    borderColor: colors.border,
                    borderRadius: 10
                }}

                    onPress={() => refRBSheetBuyABook.current.open()}//Linking.openURL('https://www.amazon.com/dp/1670252124')}
                    rippleColor="rgba(0, 0, 0, .32)"
                >
                    <View style={{
                        flexDirection: 'row', marginHorizontal: '5%',
                        alignItems: 'center', justifyContent: 'space-between'
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{
                                width: 40, height: 40, backgroundColor: COLORS.grey505050_07,
                                borderRadius: 40, justifyContent: 'center', alignItems: 'center'
                            }}>

                                <SvgXml

                                    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="18.788" height="14.613" viewBox="0 0 18.788 14.613">
  <path id="Icon_awesome-book-open" data-name="Icon awesome-book-open" d="M17.687,2.251c-1.788.1-5.34.471-7.534,1.813a.5.5,0,0,0-.237.43V16.363a.516.516,0,0,0,.759.44,19.9,19.9,0,0,1,7.134-1.53,1.017,1.017,0,0,0,.979-1V3.253a1.023,1.023,0,0,0-1.1-1ZM8.635,4.065C6.442,2.722,2.889,2.353,1.1,2.251a1.023,1.023,0,0,0-1.1,1v11.02a1.017,1.017,0,0,0,.979,1A19.892,19.892,0,0,1,8.115,16.8a.515.515,0,0,0,.757-.439V4.488A.491.491,0,0,0,8.635,4.065Z" transform="translate(0 -2.25)" fill="#0093f5"/>
</svg>

`} />
                            </View>
                            <Text style={[{ marginLeft: '10%' }, STYLES.fontSize16_000000_Roboto_Regular]}>
                                {strings.Buy_a_Book}</Text>
                        </View>

                    </View>
                </TouchableRipple>


                {/* Expert Dream Interpretation*/}

                <TouchableRipple
                    onPressIn={() => navigation.navigate("ExpertDreamInterPretation")
                    }
                    style={{
                        borderWidth: 1,
                        marginTop: '8%',
                        height: 50,
                        justifyContent: 'center',
                        // borderColor: COLORS.grey707070_52,
                        borderColor: colors.border,
                        borderRadius: 10
                    }}

                    onPress={() => console.log('Pressed')}
                    rippleColor="rgba(0, 0, 0, .32)"
                >
                    <View style={{
                        flexDirection: 'row', marginHorizontal: '5%',
                        alignItems: 'center',
                    }}>

                        <View style={{
                            width: 40, height: 40, backgroundColor: COLORS.grey505050_07,
                            borderRadius: 40, justifyContent: 'center', alignItems: 'center'
                        }}>

                            <SvgXml

                                xml={`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                        <path id="Icon_awesome-user-alt" data-name="Icon awesome-user-alt" d="M9,10.125A5.063,5.063,0,1,0,3.938,5.063,5.064,5.064,0,0,0,9,10.125Zm4.5,1.125H11.563a6.12,6.12,0,0,1-5.126,0H4.5A4.5,4.5,0,0,0,0,15.75v.563A1.688,1.688,0,0,0,1.688,18H16.313A1.688,1.688,0,0,0,18,16.313V15.75A4.5,4.5,0,0,0,13.5,11.25Z" fill="#0093f5"/>
                                      </svg>
                                      
`} />
                        </View>
                        <Text style={[{ marginLeft: '5%' },
                        STYLES.fontSize16_000000_Roboto_Regular]}>{strings.Expert_Dream_interPretation}</Text>


                    </View>
                </TouchableRipple>


                {/* Logout*/}
                <TouchableRipple style={{
                    borderWidth: 1,
                    marginTop: '8%',
                    height: 50,
                    justifyContent: 'center',
                    //   borderColor: COLORS.grey707070_52,
                    borderColor: colors.border,
                    borderRadius: 10
                }}

                    onPress={() => {
                        removeAsyncStorageDate()
                        // 


                    }

                    }
                    rippleColor="rgba(0, 0, 0, .32)"
                >
                    <View style={{
                        flexDirection: 'row', marginHorizontal: '5%',
                        alignItems: 'center', justifyContent: 'space-between'
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{
                                width: 40, height: 40, backgroundColor: COLORS.grey505050_07,
                                borderRadius: 40, justifyContent: 'center', alignItems: 'center'
                            }}>

                                <SvgXml

                                    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="18.003" height="15.105" viewBox="0 0 18.003 15.105">
                                        <path id="Icon_open-account-login" data-name="Icon open-account-login" d="M6.751,0V2.158h9V12.947h-9v2.158H18V0ZM9,4.316V6.474H0V8.631H9v2.158l4.5-3.237Z" fill="#0093f5"/>
                                      </svg>
                                      
`} />
                            </View>
                            <Text style={[{ marginLeft: '10%' }, STYLES.fontSize16_000000_Roboto_Regular]}>
                                {strings.Logout}</Text>
                        </View>

                    </View>
                </TouchableRipple>



            </View>

            {/* Bottom sheet Extreme Dream iNTERPRETATION*/}

            <RBSheet
                // closeOnDragDown={true}
                dragFromTopOnly={true}
                height={400}
                animationType="slide"
                ref={refRBSheetExpertDreamRetation}


                // closeOnPressBack={false}
                customStyles={{
                    container: {
                        //borderRadius: 40,

                        paddingVertical: "5%"
                    },

                }}


            >

                <View style={{ flex: 1, paddingHorizontal: '4%' }}>
                    <View style={{
                        flexDirection: 'row', justifyContent:
                            'space-between',
                        marginBottom: '5%'
                    }}>
                        <Text style={STYLES.fontSize16_000000_Roboto_Regular}>Expert Dream Interpretation</Text>

                        <TouchableRipple
                            onPress={() => refRBSheetExpertDreamRetation.current.close()}

                            style={{
                                height: 23.54, width: 23.54,
                                justifyContent: 'center', alignItems: 'center',
                                borderRadius: 20, backgroundColor: COLORS.black000000_33
                            }}>
                            <Entypo name="cross" size={20} color={COLORS.whiteFFFFFF} />
                        </TouchableRipple>
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}>
                        <View style={{
                            flex: 1, //backgroundColor: 'green',
                            marginTop: '3%',
                            paddingHorizontal: '2%',
                            justifyContent: 'space-between'
                        }}>

                            <TextInputwithoutsvgheight
                                placeholder="Title"
                                onChangeText={(text) => {
                                    console.log(text)
                                    setStateTitle(text)
                                    setStateIsValidTitle(true)
                                }}
                            />
                            {stateIsValidTitle == false ? <Text style={{ color: 'red' }}>valid Title Enter</Text> : null}
                            <View style={{ height: 100 }}>
                                <TextArea1 placeholder="Description"
                                    onChangeText={(text) => {
                                        console.log(text)
                                        setStateDescription(text)
                                        setStateIsValidDescription(true)
                                    }}
                                />
                                {stateIsValidDescription == false ? <Text style={{ color: 'red' }}>valid Description Enter</Text> : null}
                            </View>
                            <TextInputwithoutsvgheight
                                placeholder="Your Email"
                                onChangeText={(text) => {
                                    console.log(text)
                                    setStateEmail(text)
                                    setStateIsValidEmail(true)
                                }}
                            />
                            {stateIsValidEmail == false ? <Text style={{ color: 'red' }}>valid Email Enter</Text> : null}
                            <TextInputwithoutsvgheight
                                placeholder="Card Holder Name"
                                onChangeText={(text) => {
                                    console.log(text)
                                    setStateCardHolderName(text)
                                    setStateIsValidCardHolderName(true)
                                }}
                            />
                            {stateIsValidCardHolderName == false ? <Text style={{ color: 'red' }}>valid Card Holder Name Enter</Text> : null}
                            <TextInputwithoutsvgheight
                                placeholder="Total Amount"
                                keyboardType="numeric"
                                onChangeText={(text) => {
                                    console.log(text)
                                    setStateTotalAmount(text)
                                    setStateIsValidTotalAmount(true)
                                }}
                            />
                            {stateIsValidTotalAmount == false ? <Text style={{ color: 'red' }}>valid Total Amount Enter</Text> : null}
                            <TextInputwithoutsvgheight
                                placeholder="Card No"
                                keyboardType="numeric"
                                onChangeText={(text) => {
                                    console.log(text)
                                    setStateCardNo(text)
                                    setStateIsValidCardNo(true)
                                }}
                            />
                            {stateIsValidCardNo == false ? <Text style={{ color: 'red' }}>valid Card NO Enter</Text> : null}

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                                <View style={{ width: '30%' }}>
                                    <TextInputwithoutsvgheight
                                        placeholder="MM"
                                        keyboardType="numeric"
                                        onChangeText={(text) => {
                                            console.log(text)
                                            setStateMonth(text)
                                            setStateIsValidMonth(true)
                                        }} />
                                    {stateIsValidMonth == false ? <Text style={{ color: 'red' }}>valid MM Enter</Text> : null}
                                </View>

                                <View style={{ width: '30%' }}>
                                    <TextInputwithoutsvgheight
                                        placeholder="YYYY"
                                        keyboardType="numeric"
                                        onChangeText={(text) => {
                                            console.log(text)
                                            setStateYear(text)
                                            setStateIsValidYear(true)
                                        }} />
                                    {stateIsValidYear == false ? <Text style={{ color: 'red' }}>valid YYYY Enter</Text> : null}
                                </View>
                                <View style={{ width: '30%' }}>
                                    <TextInputwithoutsvgheight
                                        placeholder="CVV"
                                        keyboardType="numeric"
                                        onChangeText={(text) => {
                                            console.log(text)
                                            setStateCVV(text)
                                            setStateIsValidCVV(true)
                                        }}
                                    />
                                    {stateIsValidCVV == false ? <Text style={{ color: 'red' }}>valid CVV Enter</Text> : null}
                                </View>
                            </View>

                            <View style={{ paddingHorizontal: '4%', marginTop: '5%' }}>
                                <Button onPress={() => { payNow() }}
                                    uppercase={false}
                                    style={{
                                        height: 50,
                                        justifyContent: 'center'
                                    }}
                                    labelStyle={STYLES.fontSize20_FFFFFF_Roboto_Regular}
                                    color={COLORS.blue0093F5}
                                    mode='contained'>PAY NOW</Button>

                            </View>
                        </View>
                    </ScrollView>

                </View>


            </RBSheet>


            {/* Bottom sheet Select Language*/}
            <RBSheet
                // closeOnDragDown={true}
                dragFromTopOnly={true}
                height={250}
                animationType="slide"
                ref={refRBSheetSelectLanguage}


                // closeOnPressBack={false}
                customStyles={{
                    container: {
                        backgroundColor: colors.background,
                        //borderRadius: 40,

                        paddingVertical: "5%"
                    },

                }}


            >

                <View style={{ flex: 1, paddingHorizontal: '4%' }}>
                    <View style={{
                        flexDirection: 'row', justifyContent:
                            'space-between',
                        marginBottom: '5%'
                    }}>
                        <Text style={STYLES.fontSize16_000000_Roboto_Regular}>Select Language</Text>

                        <TouchableRipple
                            onPress={() => refRBSheetSelectLanguage.current.close()}

                            style={{
                                height: 23.54, width: 23.54,
                                justifyContent: 'center', alignItems: 'center',
                                borderRadius: 20, backgroundColor: COLORS.black000000_33
                            }}>
                            <Entypo name="cross" size={20} color={COLORS.whiteFFFFFF} />
                        </TouchableRipple>
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}>
                        <View style={{
                            flex: 1, //backgroundColor: 'green',
                            marginTop: '3%',
                            paddingHorizontal: '2%',
                            justifyContent: 'space-between'
                        }}>
                            {languageList.map((list, index) => {
                                return (
                                    <View key={index}
                                        style={{
                                            //backgroundColor: COLORS.whiteFFFFFF,
                                            backgroundColor: colors.background,
                                            paddingVertical: '7%',

                                            borderBottomWidth: 1,
                                            //borderBottomColor: COLORS.black000000_20
                                            borderBottomColor: colors.border

                                        }}>
                                        <TouchableOpacity style={{
                                            //height: 40,
                                            //flex: 1,
                                            // backgroundColor: 'red',
                                            justifyContent: 'center'
                                        }} onPress={() => {
                                            setLanguageModalVisible(false);
                                            setStateLanguage(list.value)
                                            refRBSheetSelectLanguage.current.close()
                                            if (index == 0)
                                                dispatch(changeLanguage(0))
                                            // onChangeLanguage('Sp')
                                            else {
                                                dispatch(changeLanguage(1))
                                                //  onChangeLanguage('En')
                                            }
                                        }}>
                                            <Text style={[{
                                                alignSelf: 'center',
                                            }, STYLES.fontSize20_00935_Robo1to_Medium]}>{list.value}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}

                        </View>
                    </ScrollView>

                </View>


            </RBSheet>


            {/* Bottom sheet Buy a Book*/}
            <RBSheet
                // closeOnDragDown={true}
                dragFromTopOnly={true}
                height={450}
                animationType="slide"
                ref={refRBSheetBuyABook}


                // closeOnPressBack={false}
                customStyles={{
                    container: {
                        //borderRadius: 40,
                        backgroundColor: colors.background,
                        paddingVertical: "5%"
                    },

                }}


            >

                <View style={{ flex: 1, paddingHorizontal: '4%' }}>
                    <View style={{
                        flexDirection: 'row', justifyContent:
                            'space-between',
                        marginBottom: '5%'
                    }}>
                        <Text style={STYLES.fontSize16_000000_Roboto_Regular}>Buy a Book</Text>

                        <TouchableRipple
                            onPress={() => refRBSheetBuyABook.current.close()}

                            style={{
                                height: 23.54, width: 23.54,
                                justifyContent: 'center', alignItems: 'center',
                                borderRadius: 20, backgroundColor: COLORS.black000000_33
                            }}>
                            <Entypo name="cross" size={20} color={COLORS.whiteFFFFFF} />
                        </TouchableRipple>
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}>
                        <View style={{
                            flex: 1, //backgroundColor: 'green',
                            marginTop: '3%',
                            paddingHorizontal: '2%',
                            justifyContent: 'space-between'
                        }}>
                            <Text style={[STYLES.fontSize25_000000_Roboto_Regular, { color: COLORS.blue0093F5, fontWeight: '900' }]}>Modern Dream Dictionary</Text>
                            {buyABookListModernDreamDictionary.map((list, index) => {
                                return (
                                    <View key={index}
                                        style={{
                                            //  backgroundColor: COLORS.whiteFFFFFF,
                                            backgroundColor: colors.background,
                                            paddingVertical: '4%',
                                            // flexDirection: 'row',
                                            borderBottomWidth: 1,
                                            //   borderBottomColor: COLORS.black000000_20
                                            borderBottomColor: colors.border

                                        }}>
                                        <TouchableRipple onPress={() => { Linking.openURL(list.link) }}>
                                            <Text style={[{
                                                //   alignSelf: 'center',
                                            }, STYLES.fontSize20_00935_Robo1to_Medium]}
                                            >{list.label}</Text>
                                        </TouchableRipple>

                                    </View>
                                )
                            })}

                            <Text style={[STYLES.fontSize25_000000_Roboto_Regular,
                            { marginTop: '3%', color: COLORS.blue0093F5, fontWeight: '900' }]}>Modern Dream Theory</Text>
                            {buyABookListModernDreamTheory.map((list, index) => {
                                return (
                                    <View key={index}
                                        style={{
                                            /// backgroundColor: COLORS.whiteFFFFFF,
                                            backgroundColor: colors.background,
                                            paddingVertical: '4%',
                                            // flexDirection: 'row',
                                            borderBottomWidth: 1,
                                            //  borderBottomColor: COLORS.black000000_20
                                            borderBottomColor: colors.border

                                        }}>

                                        <TouchableRipple onPress={() => { Linking.openURL(list.link) }}>
                                            <Text style={[{
                                                //   alignSelf: 'center',
                                            }, STYLES.fontSize20_00935_Robo1to_Medium]}
                                            >{list.label}</Text>
                                        </TouchableRipple>
                                    </View>
                                )
                            })}

                        </View>
                    </ScrollView>

                </View>


            </RBSheet >


            {/* language MODAL */}

            {/* <Modal
                // dismissable={false}
                visible={languageModalVisible}
                onDismiss={() => {

                    setLanguageModalVisible(!languageModalVisible);
                }}
                contentContainerStyle={{
                    flex: 1, paddingHorizontal: '10%',

                    justifyContent: 'center'
                }}
            >

                <View style={{
                    flex: 1, //paddingHorizontal: '10%',

                    justifyContent: 'center'
                }}>
                    <TouchableRipple
                        onPress={() => setLanguageModalVisible(!languageModalVisible)}

                        style={{
                            alignSelf: 'flex-end',
                            //marginTop: '5%',
                            height: 23.54, width: 23.54,
                            justifyContent: 'center', alignItems: 'center',
                            borderRadius: 20, backgroundColor: COLORS.black000000_20
                        }}>
                        <Entypo name="cross" size={20} color={COLORS.whiteFFFFFF} />
                    </TouchableRipple>
                    {languageList.map((list, index) => {
                        return (
                            <View key={index}
                                style={{
                                    backgroundColor: COLORS.whiteFFFFFF,
                                    paddingVertical: '15%',

                                    borderBottomWidth: 1,
                                    borderBottomColor: COLORS.black000000_20

                                }}>
                                <TouchableOpacity style={{
                                    //height: 40,
                                    //flex: 1,
                                    // backgroundColor: 'red',
                                    justifyContent: 'center'
                                }} onPress={() => {
                                    setLanguageModalVisible(false);
                                    setStateLanguage(list.value)
                                }}>
                                    <Text style={[{
                                        alignSelf: 'center',
                                    }, STYLES.fontSize20_00935_Robo1to_Medium]}>{list.value}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </View>

            </Modal> */}
        </View >


    );
};



export default Settings;