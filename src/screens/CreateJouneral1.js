// import React, { useEffect, useState, useRef } from 'react';
// import PropTypes from 'prop-types';
// import {
//     View, ScrollView, Dimensions, Image, StyleSheet, TouchableOpacity
//     , FlatList,
//     Alert,
// } from 'react-native'
// import RBSheet from "react-native-raw-bottom-sheet";
// import DateTimePicker from '@react-native-community/datetimepicker';
// import {
//     Appbar, Card, Title, Paragraph, Button, Modal,
//     Avatar, IconButton, List, TextInput, Searchbar,
//     FAB,
//     Provider, useTheme,
//     TouchableRipple,
// } from 'react-native-paper';

// import STYLES from '../STYLES';
// import { SvgXml } from 'react-native-svg';
// import Svgs from '../assets/svgs/Svgs';
// import COLORS from '../assets/colors/Color';
// import { Chip, Text } from 'react-native-paper';
// import Button1 from '../Components/Button1';
// import TextInput1 from '../Components/TextInput1';
// import TextInputwithoutSVG from '../Components/TextInputwithoutSVG.js';
// import Entypo from 'react-native-vector-icons/Entypo'
// import AwesomeAlert from 'react-native-awesome-alerts';
// import TextArea1 from '../Components/TextArea1';
// import SweetAlert from 'react-native-sweet-alert';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import strings from '../lng/LocalizedString';
// const CreateJouneral1 = ({ route, navigation }) => {

//     var varRouteTitle, varRouteDescription;
//     // console.log(Object.keys(route.params).length)
//     if (route.params == undefined) {
//         console.log('p')

//     }
//     if (route.params != undefined) {
//         const { routeTitle, routeDescription } = route.params;
//         varRouteTitle = routeTitle
//         varRouteDescription = routeDescription
//     }


//     const [stateShowAlert, setStateShowAlert] = useState(false)
//     const refRBSheetMood = useRef();
//     const refRBSheetSleep = useRef();
//     const refRBSheetClarity = useRef();
//     const [stateTitle, setStateTitle] = useState('');
//     const [stateDescription, setStateDescription] = useState('');
//     const [stateTime, setStateTime] = useState('')
//     const [stateDate, setStateDate] = useState('')
//     const [stateDreamType, setStateDreamType] = useState("Nightmare");
//     const [stateMood, setStateMood] = useState('Mood');
//     const [stateSleep, setStateSleep] = useState('Sleep');
//     const [stateClarity, setStateClarity] = useState('Clarity');

//     const [stateSweetAlert, setStateSweetAlert] = useState(false)
//     const [state_AS_UserId, setState_AS_UserId] = useState();

//     const [isValidStateTitle, isValidSetStateTitle] = useState(true);
//     const [isValidStateDescription, isValidSetStateDescription] = useState(true);
//     const [isValidStateMood, isValidSetStateMood] = useState(true);
//     const [isValidStateSleep, isValidSetStatesleep] = useState(true);
//     const [isValidStateClarity, isValidSetStateClarity] = useState(true);
//     const [isValidStateDate, isValidSetStateDate] = useState(true);
//     const [isValidStateTime, isValidSetStateTime] = useState(true);

//     const [stateDataBaseDate, setStateDateBaseDate] = useState()


//     const { colors } = useTheme()
//     useEffect(() => {
//         getMyObject()
//     })
//     // SweetAlert.showAlertWithOptions({
//     //     title: '',
//     //     subTitle: '',
//     //     confirmButtonTitle: 'OK',
//     //     confirmButtonColor: 'red',
//     //     otherButtonTitle: 'Cancel',
//     //     otherButtonColor: '#dedede',
//     //     style: 'success',
//     //     cancellable: true
//     // },
//     //     callback => console.log('callback'));
//     const saveJournal = () => {






//         var today = new Date();


//         if (stateTitle == '') {


//             Alert.alert(strings.Enter_Valid_Title)
//             return;

//         }
//         if (stateDescription == '') {
//             Alert.alert(strings.Enter_Valid_Description)
//             return;

//         }
//         if (stateMood == 'Mood') {

//             //   console.log(stateData.email + 'emailaddress')
//             Alert.alert("Enter Valid Mood")

//             return;

//         }
//         if (stateSleep == 'Sleep') {

//             //   console.log(stateData.email + 'emailaddress')
//             Alert.alert("Enter Valid Sleep")

//             return;

//         }
//         if (stateDate == '') {

//             //   console.log(stateData.email + 'emailaddress')
//             Alert.alert(strings.Enter_Valid_Date)
//             return;

//         }
//         if (stateTime == '') {

//             //   console.log(stateData.email + 'emailaddress')
//             Alert.alert(strings.Enter_Valid_Time)
//             return;

//         }


//         // if (stateTitle == '' || stateDescription == '' || stateDate == '' || stateTime == '' ||
//         //     stateSleep == "Sleep" || stateMood == "MOOD" || stateClarity == "Clarity"
//         // ) {

//         //     //   console.log(stateData.email + 'emailaddress')
//         //     Alert.alert("Kindly Fill All Records")



//         // }






//         console.log(stateDataBaseDate)

//         console.log(stateMood)
//         if (stateTime != '' && stateDescription != '' && stateClarity != "Clarity" && stateSleep != "Sleep"
//             && stateMood != "Mood" && stateDate != "" && stateTime != ""

//         ) {
//             console.log("Valid Record")
//             console.log('https://dream-app-mtechub.herokuapp.com/api/journel/addNew'
//                 // ${` parentCate: "61f27a872385a0c86e48fe87",
//                 // user: state_AS_UserId,
//                 // clearity: "Good",//stateClarity
//                 // quality: "Good",//stateSleep
//                 // title: stateTitle,
//                 // desc: stateDescription,
//                 // dreamType: stateDreamType,
//                 // datePost: today,
//                 // timePost: stateDate,
//                 // dreamTime: stateTime,
//                 // mood: "Happy"//stateMood`}
//             )
//             console.log(typeof (stateDataBaseDate))
//             console.log('user: ' + state_AS_UserId)
//             console.log('clearity: ' + `${stateClarity}`)
//             console.log('quality: ' + `${stateSleep}`)
//             console.log('title: ' + stateTitle)
//             console.log('desc: ' + stateDescription)
//             console.log('dreamType: ' + stateDreamType)
//             console.log('datePost: ' + stateDataBaseDate)
//             console.log('searchDate: ' + stateDataBaseDate)
//             console.log('timePost: ' + stateTime)
//             console.log('dreamTime: ' + stateTime)
//             console.log('mood: ' + `${stateMood}`)
//             // console.log('https://dream-app-mtechub.herokuapp.com/api/journel/addNew' +
//             // )

//             setStateShowAlert(true)
//             fetch('https://dream-app-mtechub.herokuapp.com/api/journel/addNew', {
//                 method: 'POST',
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     /// parentCate: "61f27a872385a0c86e48fe87",
//                     user: state_AS_UserId,
//                     clearity: stateClarity,//stateClarity,//"Good"
//                     quality: stateSleep,//stateSleep,//"Good",//
//                     title: stateTitle,
//                     desc: stateDescription,
//                     dreamType: stateDreamType,
//                     datePost: stateDataBaseDate,
//                     timePost: stateTime,
//                     dreamTime: stateTime,//
//                     searchDate: stateDataBaseDate,
//                     mood: stateMood//stateMood//"Happy"//

//                 })
//             })
//                 .then((response) => response.json())
//                 .then((json) => {
//                     setStateShowAlert(false)
//                     console.log(json)
//                     if (json.success) {
//                         //  alert("Successfully Create Jouneral")

//                         SweetAlert.showAlertWithOptions({
//                             title: 'Successfully Created',
//                             //  subTitle: '',
//                             confirmButtonTitle: 'OK',

//                             confirmButtonColor: '#000',

//                             style: 'success',
//                             //cancellable: true
//                         },
//                             // callback => console.log('callback')
//                         );
//                         navigation.navigate("MyDreamRep", {
//                             state_AS_UserId: state_AS_UserId
//                         })
//                     }

//                     else {
//                         Alert.alert('plz insert valid data')
//                     }
//                 })
//                 .catch((error) => {

//                     Alert.alert(error);
//                 });
//         }



//     }

//     const getMyObject = async () => {
//         try {
//             const jsonValue = await AsyncStorage.getItem('userId')
//             return jsonValue != null ?

//                 setState_AS_UserId(jsonValue)
//                 : null
//         } catch (e) {
//             alert(e)
//         }
//     }

//     const moodList = [
//         {
//             id: 1,
//             label: "EUPHORIC",
//             value: "EUPHORIC",
//         },
//         {
//             id: 2,
//             label: "HAPPY",
//             value: "HAPPY",
//         },
//         {
//             id: 3,
//             label: "NEUTRAL",
//             value: "NEUTRAL",
//         },
//         {
//             id: 4,
//             label: "SAD",
//             value: "SAD",
//         },
//         {
//             id: 5,
//             label: "FRUSTRATED",
//             value: "FRUSTRATED",
//         },
//         {
//             id: 6,
//             label: "ANGRY",
//             value: "ANGRY",
//         },

//     ];

//     const [moodModalVisible, setMoodModalVisible] = useState(false);



//     const sleepList = [
//         {
//             id: 1,
//             label: "EXCELLENT",
//             value: "EXCELLENT",
//         },
//         {
//             id: 2,
//             label: "VERY GOOD",
//             value: "VERY GOOD",
//         },
//         {
//             id: 3,
//             label: "GOOD",
//             value: "GOOD",
//         },
//         {
//             id: 4,
//             label: "AVERAGE",
//             value: "AVERAGE",
//         },
//         {
//             id: 5,
//             label: "BAD",
//             value: "BAD",
//         },
//         {
//             id: 5,
//             label: "AWFUL",
//             value: "AWFUL",
//         },
//     ];
//     const [sleepModalVisible, setSleepModalVisible] = useState(false);




//     const clarityList = [
//         {
//             id: 1,
//             label: "CRYSTAL CLEAR",
//             value: "CRYSTAL CLEAR",
//         },
//         {
//             id: 2,
//             label: "CLEAR",
//             value: "CLEAR",
//         },
//         {
//             id: 3,
//             label: "NEUTRAL",
//             value: "NEUTRAL",
//         },
//         {
//             id: 4,
//             label: "CLOUDY",
//             value: "CLOUDY",
//         },
//         {
//             id: 5,
//             label: "NOT CLEAR",
//             value: "NOT CLEAR",
//         },
//         {
//             id: 5,
//             label: "DIDN'T DREAM",
//             value: "DIDN'T DREAM",
//         },

//     ];
//     const [clarityModalVisible, setClarityModalVisible] = useState(false);


//     const [date, setDate] = useState(new Date(1598051730000));
//     const [mode, setMode] = useState('date');
//     const [show, setShow] = useState(false);




//     const [time, setTime] = useState(new Date(1598051730000));
//     const [modeTime, setModeTime] = useState('date');
//     const [showTime, setShowTime] = useState(false);







//     const onChange = (event, selectedDate) => {
//         const currentDate = selectedDate || date;
//         setShow(Platform.OS === 'ios');
//         setDate(currentDate);

//         var d = new Date();
//         d = selectedDate
//         // console.log(d)
//         //console.log(selectedDate)
//         if (d != undefined) {

//             let year = d.getFullYear();
//             let month = (d.getMonth() + 1).toString().padStart(2, "0");
//             let day = d.getDate().toString().padStart(2, "0");

//             console.log(year + '-' + month + '-' + day);
//             console.log(typeof (year + '-' + month + '-' + day))
//             setStateDateBaseDate(year + "-" + month + "-" + day)
//             setStateDate(day + "-" + month + "-" + year)


//         }

//     };

//     const showMode = (currentMode) => {
//         setShow(true);
//         setMode(currentMode);
//     };

//     const showDatepicker = () => {
//         showMode('date');
//     };


//     const onChangeTime = (event, selectedDate) => {
//         const currentDate = selectedDate || time;
//         setShowTime(Platform.OS === 'ios');
//         setTime(currentDate);

//         var d = new Date();
//         d = selectedDate
//         console.log(selectedDate)
//         if (d != undefined) {
//             console.log(d)
//             //console.log()
//             setStateTime(d.getHours() + ":" + d.getMinutes())
//         }
//     };

//     const showModeTime = (currentMode) => {
//         setShowTime(true);
//         setModeTime(currentMode);
//     };

//     const showTimepicker = () => {
//         showModeTime('time');
//     };




//     return (
//         <ScrollView >
//             <AwesomeAlert
//                 show={stateShowAlert}
//                 showProgress={true}

//                 closeOnTouchOutside={false}
//             //  closeOnHardwareBackPress={false}
//             />
//             <View style={{
//                 flex: 1, //width: Dimensions.get('window').width,
//                 //height: Dimensions.get('window').height,
//                 // backgroundColor: COLORS.whiteFFFFFF
//                 backgroundColor: colors.background
//             }}>
//                 {/* <Provider > */}
//                 <Appbar.Header style={{
//                     // backgroundColor: COLORS.whiteFFFFFF,
//                     backgroundColor: colors.background
//                 }}>

//                     <Appbar.BackAction onPress={() => { navigation.goBack() }} />
//                     <Appbar.Content
//                         style={{

//                             alignItems: 'center'
//                         }}
//                         titleStyle={[STYLES.fontSize20_Roboto_Medium,
//                             //{ alignSelf: 'center', }
//                         ]}
//                         title={strings.Create_Jouneral} color={COLORS.blue0093F5} />


//                 </Appbar.Header >

//                 <View style={{
//                     flex: 1,
//                     paddingHorizontal: '10%',
//                     // zIndex: 0
//                     //backgroundColor: 'red'
//                 }}>


//                     <View style={{ marginTop: '7%' }}>
//                         <TextInputwithoutSVG value={varRouteTitle}
//                             //  value={varRouteDescription}
//                             placeholder={strings.Title}
//                             secureTextEntry={true}
//                             onChangeText={(text) => {
//                                 setStateTitle(text)
//                                 isValidSetStateTitle(true)
//                             }} />

//                         {isValidStateTitle == false ? <Text style={{ color: 'red' }}>valid Title Enter</Text> : null}
//                     </View>

//                     <View style={{
//                         marginTop: '7%', height: 200
//                     }}>
//                         <TextArea1
//                             value={varRouteDescription}
//                             placeholder={strings.Description}

//                             onChangeText={(text) => {
//                                 setStateDescription(text)
//                                 isValidSetStateDescription(true)
//                             }} />

//                         {isValidStateDescription == false ? <Text style={{ color: 'red' }}>valid Description Enter</Text> : null}
//                     </View>


//                     <View style={{
//                         flexDirection: 'row', justifyContent: 'space-between',
//                         marginTop: '5%'
//                     }}>

//                         <TouchableRipple

//                             onPress={() => setStateDreamType("Nightmare")}
//                             style={{
//                                 borderRadius: 20,// borderColor: COLORS.black000000_20,
//                                 borderColor: colors.border, borderWidth: 1, width: '32%',
//                                 alignItems: 'center',
//                                 justifyContent: 'center', paddingHorizontal: '3%',
//                                 paddingVertical: '1%',
//                                 backgroundColor: stateDreamType == "Nightmare" ? COLORS.blue0093F5 :
//                                     colors.background       //COLORS.whiteFFFFFF
//                             }}>
//                             <Text style={

//                                 stateDreamType == "Nightmare" ? STYLES.fontSize15_FFFFFF_Roboto_Medium
//                                     : STYLES.fontSize15_0093F5_Roboto_Medium
//                             }>Nightmare</Text>
//                         </TouchableRipple>


//                         <TouchableRipple
//                             onPress={() => setStateDreamType("Recurring")}
//                             style={{
//                                 borderRadius: 20, borderColor: colors.border,//borderColor: COLORS.black000000_20,
//                                 borderWidth: 1, width: '32%', alignItems: 'center',
//                                 justifyContent: 'center', paddingHorizontal: '3%',
//                                 paddingVertical: '1%',

//                                 backgroundColor: stateDreamType == "Recurring" ? COLORS.blue0093F5 :
//                                     colors.background     //  COLORS.whiteFFFFFF
//                             }}>
//                             <Text style={

//                                 stateDreamType == "Recurring" ? STYLES.fontSize15_FFFFFF_Roboto_Medium
//                                     : STYLES.fontSize15_0093F5_Roboto_Medium
//                             }>
//                                 Recurring</Text>
//                         </TouchableRipple>
//                         <TouchableRipple

//                             onPress={() => setStateDreamType("Lucid")}
//                             style={{
//                                 borderRadius: 20, borderColor: colors.border,//borderColor: COLORS.black000000_20,
//                                 borderWidth: 1, width: '32%', alignItems: 'center',
//                                 justifyContent: 'center', paddingHorizontal: '3%',
//                                 paddingVertical: '1%',
//                                 backgroundColor: stateDreamType == "Lucid" ? COLORS.blue0093F5 :
//                                     colors.background       //  COLORS.whiteFFFFFF
//                             }}>
//                             <Text style={

//                                 stateDreamType == "Lucid" ? STYLES.fontSize15_FFFFFF_Roboto_Medium
//                                     : STYLES.fontSize15_0093F5_Roboto_Medium
//                             }>Lucid</Text>
//                         </TouchableRipple>
//                     </View>

//                     <View style={{
//                         flexDirection: 'row',
//                         justifyContent: 'space-between',
//                         marginTop: "10%",
//                         //backgroundColor: 'red',
//                         height: '4%'
//                     }}>

//                         {/* Mood modal  open */}
//                         <View style={{
//                             width: '32%', //backgroundColor: 'red'
//                         }}>
//                             <TouchableOpacity
//                                 onPress={() => {
//                                     // setMoodModalVisible(true)
//                                     refRBSheetMood.current.open();
//                                 }}
//                                 style={{

//                                     borderWidth: 1,
//                                     borderColor: colors.border,//COLORS.black000000_20,
//                                     borderRadius: 20,
//                                     paddingHorizontal: '3%',
//                                     paddingVertical: '1%',
//                                     flexDirection: 'row',
//                                     justifyContent: 'space-between',
//                                     alignItems: 'center'
//                                 }}>
//                                 <Text style={STYLES.fontSize15_0093F5_Roboto_Medium}>{stateMood}</Text>



//                                 <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="12.039" height="6.02" viewBox="0 0 12.039 6.02">
//   <path id="Icon_ionic-md-arrow-dropdown" data-name="Icon ionic-md-arrow-dropdown" d="M9,13.5l6.02,6.02,6.02-6.02Z" transform="translate(-9 -13.5)" fill="#b2b2b2"/>
// </svg>
// `} />
//                             </TouchableOpacity>

//                             {isValidStateMood == false ? <Text style={{ color: 'red' }}>valid Mood Enter</Text> : null}
//                         </View>

//                         {/* Sleep modal open */}
//                         <TouchableOpacity
//                             onPress={() => {
//                                 // setSleepModalVisible(true)
//                                 refRBSheetSleep.current.open()
//                             }}
//                             style={{
//                                 width: '32%',
//                                 borderWidth: 1,
//                                 // borderColor: COLORS.black000000_20,
//                                 borderColor: colors.border,
//                                 borderRadius: 20,
//                                 paddingHorizontal: '3%',
//                                 paddingVertical: '1%',
//                                 flexDirection: 'row',
//                                 justifyContent: 'space-between',
//                                 alignItems: 'center'
//                             }}>
//                             <Text style={STYLES.fontSize15_0093F5_Roboto_Medium}>{stateSleep}</Text>

//                             <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="12.039" height="6.02" viewBox="0 0 12.039 6.02">
//   <path id="Icon_ionic-md-arrow-dropdown" data-name="Icon ionic-md-arrow-dropdown" d="M9,13.5l6.02,6.02,6.02-6.02Z" transform="translate(-9 -13.5)" fill="#b2b2b2"/>
// </svg>
// `} />
//                         </TouchableOpacity>
//                         {/* Clarity modal open */}
//                         <TouchableOpacity
//                             onPress={() => {
//                                 // setClarityModalVisible(true)
//                                 refRBSheetClarity.current.open()
//                             }}
//                             style={{
//                                 width: '32%',
//                                 borderWidth: 1,
//                                 // borderColor: COLORS.black000000_20,
//                                 borderColor: colors.border,
//                                 borderRadius: 20,
//                                 paddingHorizontal: '3%',
//                                 paddingVertical: '1%',
//                                 flexDirection: 'row',
//                                 justifyContent: 'space-between',
//                                 alignItems: 'center'
//                             }}>
//                             <Text style={STYLES.fontSize15_0093F5_Roboto_Medium}>{stateClarity}</Text>
//                             <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="12.039" height="6.02" viewBox="0 0 12.039 6.02">
//   <path id="Icon_ionic-md-arrow-dropdown" data-name="Icon ionic-md-arrow-dropdown" d="M9,13.5l6.02,6.02,6.02-6.02Z" transform="translate(-9 -13.5)" fill="#b2b2b2"/>
// </svg>
// `} />
//                         </TouchableOpacity>





//                     </View>
//                     <TouchableOpacity onPress={showDatepicker}
//                     >
//                         <TextInput
//                             disabled={true}

//                             style={{
//                                 marginTop: '7%', backgroundColor: //COLORS.whiteFFFFFF
//                                     colors.background
//                             }}
//                             mode='outlined'
//                             placeholder='mm/dd/yyyy'
//                             activeOutlineColor={COLORS.blue0093F5}
//                             label={strings.Enter_Date}
//                             value={stateDate}
//                             right={<TextInput.Icon name="calendar-blank" />}
//                         />

//                     </TouchableOpacity>

//                     <TouchableOpacity onPress={showTimepicker}
//                     >
//                         <TextInput
//                             disabled={true}

//                             style={{
//                                 marginTop: '7%', backgroundColor: //COLORS.whiteFFFFFF
//                                     colors.background
//                             }}
//                             mode='outlined'
//                             placeholder='00:00'
//                             activeOutlineColor={COLORS.blue0093F5}
//                             label={strings.Enter_Time}
//                             value={stateTime}
//                             right={<TextInput.Icon name="clock-outline" />}
//                         />

//                     </TouchableOpacity>
//                     <Button onPress={() => {
//                         saveJournal()
//                     }}
//                         labelStyle={[STYLES.fontSize20_FFFFFF_Roboto_Regular,
//                         { color: colors.text }]}
//                         style={{
//                             // width: '100%',
//                             // height: 80,
//                             // width: "100%",
//                             backgroundColor: COLORS.blue0093F5,
//                             // backgroundColor: 'red',

//                             marginTop: '15%',
//                             marginBottom: '10%'
//                         }}>{strings.SAVE}</Button>

//                 </View>




//                 {/* </Provider> */}
//                 {showTime && (
//                     <DateTimePicker
//                         testID="dateTimePicker"
//                         value={time}
//                         mode={modeTime}
//                         is24Hour={true}
//                         display="default"
//                         onChange={onChangeTime}
//                     />
//                 )}
//                 {show && (
//                     <DateTimePicker
//                         testID="dateTimePicker"
//                         value={date}
//                         mode={mode}
//                         is24Hour={true}
//                         display="default"
//                         onChange={onChange}
//                     />

//                 )}

//             </View>


//             {/* bottom sheet Mood */}
//             <RBSheet
//                 // closeOnDragDown={true}
//                 dragFromTopOnly={true}
//                 height={400}
//                 animationType="slide"
//                 ref={refRBSheetMood}


//                 // closeOnPressBack={false}
//                 customStyles={{
//                     container: {
//                         backgroundColor: colors.background,
//                         //borderRadius: 40,

//                         paddingVertical: "5%"
//                     },

//                 }}


//             >

//                 <View style={{ flex: 1, paddingHorizontal: '4%' }}>
//                     <View style={{
//                         flexDirection: 'row', justifyContent:
//                             'space-between',
//                         marginBottom: '5%'
//                     }}>
//                         <Text style={STYLES.fontSize16_000000_Roboto_Regular}>
//                             Select Mood</Text>

//                         <TouchableRipple
//                             onPress={() => refRBSheetMood.current.close()}

//                             style={{
//                                 height: 23.54, width: 23.54,
//                                 justifyContent: 'center', alignItems: 'center',
//                                 borderRadius: 20, backgroundColor: COLORS.black000000_33
//                             }}>
//                             <Entypo name="cross" size={20} color={COLORS.whiteFFFFFF} />
//                         </TouchableRipple>
//                     </View>
//                     <ScrollView
//                         showsVerticalScrollIndicator={false}>
//                         <View style={{
//                             flex: 1, //backgroundColor: 'green',
//                             marginTop: '3%',
//                             paddingHorizontal: '2%',
//                             justifyContent: 'space-between'
//                         }}>
//                             {moodList.map((list, index) => {
//                                 return (
//                                     <View key={index}
//                                         style={{
//                                             //  backgroundColor: COLORS.whiteFFFFFF,
//                                             backgroundColor: colors.background,
//                                             paddingVertical: '4%',

//                                             borderBottomWidth: 1,
//                                             borderBottomColor: colors.border//COLORS.black000000_20

//                                         }}>
//                                         <TouchableOpacity style={{
//                                             //height: 40,
//                                             //flex: 1,
//                                             // backgroundColor: 'red',
//                                             justifyContent: 'center'
//                                         }} onPress={() => {
//                                             refRBSheetMood.current.close()
//                                             setStateMood(list.value)
//                                         }}>
//                                             <Text style={[{
//                                                 alignSelf: 'center',
//                                             }, STYLES.fontSize20_00935_Robo1to_Medium]}>{list.value}</Text>
//                                         </TouchableOpacity>
//                                     </View>
//                                 )
//                             })}

//                         </View>
//                     </ScrollView>

//                 </View>


//             </RBSheet>


//             {/* bottom sheet   Sleep */}

//             <RBSheet
//                 // closeOnDragDown={true}
//                 dragFromTopOnly={true}
//                 height={400}
//                 animationType="slide"
//                 ref={refRBSheetSleep}


//                 // closeOnPressBack={false}
//                 customStyles={{
//                     container: {
//                         //borderRadius: 40,
//                         backgroundColor: colors.background,
//                         paddingVertical: "5%"
//                     },

//                 }}


//             >

//                 <View style={{ flex: 1, paddingHorizontal: '4%' }}>
//                     <View style={{
//                         flexDirection: 'row', justifyContent:
//                             'space-between',
//                         marginBottom: '5%'
//                     }}>
//                         <Text style={STYLES.fontSize16_000000_Roboto_Regular}>
//                             Select Sleep</Text>

//                         <TouchableRipple
//                             onPress={() => refRBSheetSleep.current.close()}

//                             style={{
//                                 height: 23.54, width: 23.54,
//                                 justifyContent: 'center', alignItems: 'center',
//                                 borderRadius: 20, backgroundColor: COLORS.black000000_33
//                             }}>
//                             <Entypo name="cross" size={20} color={COLORS.whiteFFFFFF} />
//                         </TouchableRipple>
//                     </View>
//                     <ScrollView
//                         showsVerticalScrollIndicator={false}>
//                         <View style={{
//                             flex: 1, //backgroundColor: 'green',
//                             marginTop: '3%',
//                             paddingHorizontal: '2%',
//                             justifyContent: 'space-between'
//                         }}>
//                             {sleepList.map((list, index) => {
//                                 return (
//                                     <View key={index}
//                                         style={{
//                                             // backgroundColor: COLORS.whiteFFFFFF,
//                                             // paddingVertical: '4%',
//                                             backgroundColor: colors.background,
//                                             paddingVertical: '4%',

//                                             borderBottomWidth: 1,
//                                             borderBottomColor: colors.border
//                                             // borderBottomWidth: 1,
//                                             // borderBottomColor: COLORS.black000000_20

//                                         }}>
//                                         <TouchableOpacity style={{
//                                             //height: 40,
//                                             //flex: 1,
//                                             // backgroundColor: 'red',
//                                             justifyContent: 'center'
//                                         }} onPress={() => {
//                                             refRBSheetSleep.current.close()
//                                             setStateSleep(list.value)
//                                         }}>
//                                             <Text style={[{
//                                                 alignSelf: 'center',
//                                             }, STYLES.fontSize20_00935_Robo1to_Medium]}>{list.value}</Text>
//                                         </TouchableOpacity>
//                                     </View>
//                                 )
//                             })}

//                         </View>
//                     </ScrollView>

//                 </View>


//             </RBSheet>



//             {/* bottom sheet   Clarity */}

//             <RBSheet
//                 // closeOnDragDown={true}
//                 dragFromTopOnly={true}
//                 height={400}
//                 animationType="slide"
//                 ref={refRBSheetClarity}


//                 // closeOnPressBack={false}
//                 customStyles={{
//                     container: {
//                         //borderRadius: 40,
//                         backgroundColor: colors.background,
//                         paddingVertical: "5%"
//                     },

//                 }}


//             >

//                 <View style={{ flex: 1, paddingHorizontal: '4%' }}>
//                     <View style={{
//                         flexDirection: 'row', justifyContent:
//                             'space-between',
//                         marginBottom: '5%'
//                     }}>
//                         <Text style={STYLES.fontSize16_000000_Roboto_Regular}>
//                             Select Clarity</Text>

//                         <TouchableRipple
//                             onPress={() => refRBSheetClarity.current.close()}

//                             style={{
//                                 height: 23.54, width: 23.54,
//                                 justifyContent: 'center', alignItems: 'center',
//                                 borderRadius: 20, backgroundColor: COLORS.black000000_33
//                             }}>
//                             <Entypo name="cross" size={20} color={COLORS.whiteFFFFFF} />
//                         </TouchableRipple>
//                     </View>
//                     <ScrollView showsVerticalScrollIndicator={false}>
//                         <View style={{
//                             flex: 1, //backgroundColor: 'green',
//                             marginTop: '3%',
//                             paddingHorizontal: '2%',
//                             justifyContent: 'space-between'
//                         }}>
//                             {clarityList.map((list, index) => {
//                                 return (
//                                     <View key={index}
//                                         style={{
//                                             // backgroundColor: COLORS.whiteFFFFFF,
//                                             // paddingVertical: '4%',
//                                             backgroundColor: colors.background,
//                                             paddingVertical: '4%',

//                                             borderBottomWidth: 1,
//                                             borderBottomColor: colors.border
//                                             // borderBottomWidth: 1,
//                                             // borderBottomColor: COLORS.black000000_20

//                                         }}>
//                                         <TouchableOpacity style={{
//                                             //height: 40,
//                                             //flex: 1,
//                                             // backgroundColor: 'red',
//                                             justifyContent: 'center'
//                                         }} onPress={() => {
//                                             refRBSheetClarity.current.close()
//                                             setStateClarity(list.value)
//                                         }}>
//                                             <Text style={[{
//                                                 alignSelf: 'center',
//                                             }, STYLES.fontSize20_00935_Robo1to_Medium]}>{list.value}</Text>
//                                         </TouchableOpacity>
//                                     </View>
//                                 )
//                             })}

//                         </View>
//                     </ScrollView>

//                 </View>


//             </RBSheet>
//         </ScrollView >
//     );
// };

// CreateJouneral1.propTypes = {

// };

// export default CreateJouneral1;


// const styles = StyleSheet.create({
//     fab: {
//         position: 'absolute',
//         margin: 16,
//         right: 0,
//         backgroundColor: COLORS.blue0093F5,
//         bottom: 0,
//     },
// })


// //yeh screen bad my bnany h