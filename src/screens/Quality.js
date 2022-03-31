import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    Card, Chip, FAB, Text, Modal, TouchableRipple, Button,
    ActivityIndicator, useTheme
} from 'react-native-paper'
import STYLES from '../STYLES';
import {
    View, StyleSheet, FlatList, TouchableOpacity,
    Share,
    ScrollView, Alert
} from 'react-native';
import COLORS from '../assets/colors/Color';
import { SvgXml } from 'react-native-svg';
import Entypo from 'react-native-vector-icons/Entypo'
import RBSheet from "react-native-raw-bottom-sheet";
import Button1 from '../Components/Button1';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import strings from '../lng/LocalizedString';
// import AwesomeAlert from 'react-native-awesome-alerts';
const Quality = ({ route }) => {
    const state_AS_UserId = route.params.state_AS_UserId;
    const [stateButtonShow, setStateButtonShow] = useState(true)
    const [stateServerData, setStateServerData] = useState([]);
    const moodList = [
        {
            id: 1,
            label: "EUPHORIC",
            value: "EUPHORIC",
        },
        {
            id: 2,
            label: "HAPPY",
            value: "HAPPY",
        },
        {
            id: 3,
            label: "NEUTRAL",
            value: "NEUTRAL",
        },
        {
            id: 4,
            label: "SAD",
            value: "SAD",
        },
        {
            id: 5,
            label: "FRUSTRATED",
            value: "FRUSTRATED",
        },
        {
            id: 6,
            label: "ANGRY",
            value: "ANGRY",
        },

    ];

    const [moodModalVisible, setMoodModalVisible] = useState(false);
    const [stateMood, setStateMood] = useState('Mood');



    const qualityList = [
        {
            id: 1,
            label: "EXCELLENT",
            value: "EXCELLENT",
        },
        {
            id: 2,
            label: "VERY GOOD",
            value: "VERY GOOD",
        },
        {
            id: 3,
            label: "GOOD",
            value: "GOOD",
        },
        {
            id: 4,
            label: "AVERAGE",
            value: "AVERAGE",
        },
        {
            id: 5,
            label: "BAD",
            value: "BAD",
        },
        {
            id: 5,
            label: "AWFUL",
            value: "AWFUL",
        },
    ];
    const [qualityModalVisible, setQualityModalVisible] = useState(false);
    const [stateQuality, setStateQuality] = useState('Quality');



    const clarityList = [
        {
            id: 1,
            label: "CRYSTAL CLEAR",
            value: "CRYSTAL CLEAR",
        },
        {
            id: 2,
            label: "CLEAR",
            value: "CLEAR",
        },
        {
            id: 3,
            label: "NEUTRAL",
            value: "NEUTRAL",
        },
        {
            id: 4,
            label: "CLOUDY",
            value: "CLOUDY",
        },
        {
            id: 5,
            label: "NOT CLEAR",
            value: "NOT CLEAR",
        },
        {
            id: 5,
            label: "DIDN'T DREAM",
            value: "DIDN'T DREAM",
        },
    ];
    const [clarityModalVisible, setClarityModalVisible] = useState(false);
    const [stateClarity, setStateClarity] = useState('Clarity');



    const [stateQualityFlatList, setStateQualityFlatlist] = useState([
        // {
        //     id: 1,
        //     date: '01-01-2022',
        //     title: 'Title here', data: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et'
        // },
    ])



    const onShare = async (data) => {
        try {
            const result = await Share.share({
                message:
                    data,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    const refRBSheetMood = useRef();
    const refRBSheetQuality = useRef();
    const refRBSheetClarity = useRef();

    const { colors } = useTheme()


    const callApi = () => {
        // console.log(stateServerData)
        console.log(stateMood)
        console.log(stateQuality)
        console.log(stateClarity)
        //console.log("data:" + [stateMood, stateQuality, stateClarity])
        //console.log("data:" + [stateMood, stateQuality, "Good"])
        // setStateShowAlert(true)

        setStateButtonShow(false)
        fetch('https://dream-app-mtechub.herokuapp.com/api/journel/getAllBymultFactors/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: [stateMood, stateQuality, stateClarity],
                id: state_AS_UserId
            })

        })
            .then((response) => response.json())
            .then((json) => {
                setStateButtonShow(true)
                console.log(json.allJournels)
                if (json.success) {

                    setStateQualityFlatlist(json.allJournels)
                    // navigation.navigate("SignIn")
                }

                else {
                    // setStateShowAlert(false)
                    Alert.alert('plz insert valid data')
                }
            })
            .catch((error) => {

                console.error(error);
            });
    }
    return (
        <>

            <View style={STYLES.container}>
                {/* <AwesomeAlert
                    show={stateShowAlert}
                    showProgress={true}

                    closeOnTouchOutside={false}
                //  closeOnHardwareBackPress={false}
                /> */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: "5%", height: '5%'
                }}>

                    {/* Mood modal  open */}
                    <TouchableOpacity
                        onPress={() => {
                            // setMoodModalVisible(true)
                            refRBSheetMood.current.open()
                        }}
                        style={{
                            width: '32%',
                            borderWidth: 1,
                            borderColor: colors.border,//COLORS.black000000_20,
                            borderRadius: 20,
                            paddingHorizontal: '3%',
                            paddingVertical: '1%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                        <Text style={STYLES.fontSize15_0093F5_Roboto_Medium}>{stateMood}</Text>

                        <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="12.039" height="6.02" viewBox="0 0 12.039 6.02">
  <path id="Icon_ionic-md-arrow-dropdown" data-name="Icon ionic-md-arrow-dropdown" d="M9,13.5l6.02,6.02,6.02-6.02Z" transform="translate(-9 -13.5)" fill="#b2b2b2"/>
</svg>
`} />
                    </TouchableOpacity>

                    {/* Quality modal open */}
                    <TouchableOpacity
                        onPress={() => {
                            //setQualityModalVisible(true)
                            refRBSheetQuality.current.open()
                        }}
                        style={{
                            width: '32%',
                            borderWidth: 1,
                            borderColor: colors.border,//COLORS.black000000_20,
                            borderRadius: 20,
                            paddingHorizontal: '3%',
                            paddingVertical: '1%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                        <Text style={STYLES.fontSize15_0093F5_Roboto_Medium}>{stateQuality}</Text>
                        <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="12.039" height="6.02" viewBox="0 0 12.039 6.02">
  <path id="Icon_ionic-md-arrow-dropdown" data-name="Icon ionic-md-arrow-dropdown" d="M9,13.5l6.02,6.02,6.02-6.02Z" transform="translate(-9 -13.5)" fill="#b2b2b2"/>
</svg>
`} />
                    </TouchableOpacity>
                    {/* Clarity modal open */}
                    <TouchableOpacity
                        onPress={() => {
                            // setClarityModalVisible(true)
                            refRBSheetClarity.current.open()
                        }}
                        style={{
                            width: '32%',
                            borderWidth: 1,
                            borderColor: colors.border,//COLORS.black000000_20,
                            borderRadius: 20,
                            paddingHorizontal: '3%',
                            paddingVertical: '1%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                        <Text style={STYLES.fontSize15_0093F5_Roboto_Medium}>{stateClarity}</Text>

                        <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="12.039" height="6.02" viewBox="0 0 12.039 6.02">
  <path id="Icon_ionic-md-arrow-dropdown" data-name="Icon ionic-md-arrow-dropdown" d="M9,13.5l6.02,6.02,6.02-6.02Z" transform="translate(-9 -13.5)" fill="#b2b2b2"/>
</svg>
`} />
                    </TouchableOpacity>
                </View>


                {stateButtonShow ?
                    <Button

                        style={[{
                            marginTop: 40,
                            height: 50,
                            //paddingVertical: '0%',
                            // flex: 1,
                            justifyContent: 'center',
                            backgroundColor: '#0093F5',
                        }, STYLES.fontSize20_FFFFFF_Roboto_Regular]}

                        mode="contained" onPress={() => { callApi() }} >{strings.FILTER_NOW}</Button> : null}



                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{ marginTop: '5%' }}
                    data={stateQualityFlatList}
                    renderItem={({ item }) => {
                        // console.log(item.dreamTime)
                        // console.log(typeof (item.dreamTime))
                        var arraystringd = item.datePost.split("T")

                        var dd = arraystringd[0].split(`"`);
                        // console.log(dd)
                        var rightdate = dd[0].split("-")
                        var de = rightdate[2] + "-" + rightdate[1] + "-" + rightdate[0]
                        return (

                            <Card style={{
                                marginBottom: '4%',
                                borderWidth: 1,
                                borderColor: COLORS.black000000_20,
                                borderRadius: 6
                            }}>
                                <Card.Content>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        marginBottom: '4%'
                                    }}>
                                        <Text style={STYLES.fontSize16_000000_Roboto_Regular}>{item.title}</Text>

                                        <View style={{
                                            backgroundColor: COLORS.blue0093F5,
                                            borderRadius: 20,
                                            paddingVertical: '2%',
                                            paddingHorizontal: '3%'
                                        }}>
                                            <Text style={[STYLES.fontSize9_Roboto_Medium,
                                            ]}>{de}</Text>
                                        </View>
                                        {/* <TouchableRipple onPress={() => {
                                                //console.log('ffffffffffff')
                                                onShare(item.data)
                                            }}>
                                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="14.026" height="16.03" viewBox="0 0 14.026 16.03">
  <path id="Icon_awesome-share-alt" data-name="Icon awesome-share-alt" d="M11.021,10.019a2.993,2.993,0,0,0-1.872.654L5.94,8.668a3.023,3.023,0,0,0,0-1.305L9.149,5.357a3,3,0,1,0-1.062-1.7L4.878,5.664a3.006,3.006,0,1,0,0,4.7l3.209,2.005a3.006,3.006,0,1,0,2.934-2.353Z" fill="#0093f5"/>
</svg>

`} />
                                            </TouchableRipple> */}

                                    </View>
                                    <Text numberOfLines={5}
                                        style={STYLES.fontSize13_000000_Roboto_Regular_59}
                                    >{item.desc}</Text>
                                    <View style={{
                                        flexDirection: 'row',

                                        marginTop: '5%',
                                        alignItems: 'center',
                                        //paddingHorizontal: '3%',
                                        justifyContent: 'space-between'
                                    }}>
                                        <View style={{
                                            borderRightWidth: 1,
                                            borderColor: colors.border,
                                            paddingRight: '2%', paddingVertical: '1%'
                                        }}>
                                            <Text>{item.mood}</Text>
                                        </View>

                                        <View style={{
                                            borderRightWidth: 1, borderColor: colors.border,
                                            paddingHorizontal: '2%', paddingVertical: '1%'
                                        }}>
                                            <Text>{item.quality}</Text>
                                        </View>
                                        <View style={{
                                            borderColor: colors.border,
                                            paddingLeft: '2%', paddingVertical: '1%'
                                        }}>
                                            <Text>{item.clearity}</Text>
                                        </View>
                                    </View>
                                    {/* <View style={{
                                        flexDirection: 'row',
                                        width: '30%',
                                        //  backgroundColor: 'red',
                                        alignSelf: 'flex-end',
                                        justifyContent: 'space-between',
                                        marginTop: '5%',
                                        alignItems: 'center',
                                        paddingHorizontal: '3%',
                                        // justifyContent: 'space-between'
                                    }}>

                                        <TouchableRipple onPress={() => {
                                            //console.log('ffffffffffff')
                                            onShare(item.desc)
                                        }}>
                                            <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="14.026" height="16.03" viewBox="0 0 14.026 16.03">
  <path id="Icon_awesome-share-alt" data-name="Icon awesome-share-alt" d="M11.021,10.019a2.993,2.993,0,0,0-1.872.654L5.94,8.668a3.023,3.023,0,0,0,0-1.305L9.149,5.357a3,3,0,1,0-1.062-1.7L4.878,5.664a3.006,3.006,0,1,0,0,4.7l3.209,2.005a3.006,3.006,0,1,0,2.934-2.353Z" fill="#0093f5"/>
</svg>

`} />
                                        </TouchableRipple>




                                    </View> */}
                                </Card.Content>
                            </Card>
                        )
                    }}
                    keyExtractor={item => item._id}
                />


            </View>

            {/* MOOD MODAL */}
            {/* <Modal
                dismissable={false}
                visible={moodModalVisible}
                onDismiss={() => {

                    setMoodModalVisible(!moodModalVisible);
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
                        onPress={() => setMoodModalVisible(!moodModalVisible)}

                        style={{
                            alignSelf: 'flex-end',
                            //marginTop: '5%',
                            height: 23.54, width: 23.54,
                            justifyContent: 'center', alignItems: 'center',
                            borderRadius: 20, backgroundColor: COLORS.black000000_20
                        }}>
                        <Entypo name="cross" size={20} color={COLORS.whiteFFFFFF} />
                    </TouchableRipple>
                    {moodList.map((list, index) => {
                        return (
                            <View key={index}
                                style={{
                                    backgroundColor: COLORS.whiteFFFFFF,
                                    paddingVertical: '10%',

                                    borderBottomWidth: 1,
                                    borderBottomColor: COLORS.black000000_20

                                }}>
                                <TouchableOpacity style={{
                                    height: 40,
                                    // backgroundColor: 'red',
                                    justifyContent: 'center'
                                }} onPress={() => {
                                    setMoodModalVisible(false);
                                    setStateMood(list.value)
                                    setStateServerData([...stateServerData, list.value])
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

            {/* Quality MODAL */}
            {/* <Modal
                dismissable={false}
                visible={qualityModalVisible}
                onDismiss={() => {

                    setQualityModalVisible(!qualityModalVisible);
                }}
                contentContainerStyle={{
                    flex: 1, paddingHorizontal: '10%',

                    justifyContent: 'center'
                }}

            >

                <View style={{
                    flex: 1,// paddingHorizontal: '10%',

                    justifyContent: 'center'
                }}>
                    <TouchableRipple
                        onPress={() => setQualityModalVisible(!qualityModalVisible)}

                        style={{
                            alignSelf: 'flex-end',
                            //marginTop: '5%',
                            height: 23.54, width: 23.54,
                            justifyContent: 'center', alignItems: 'center',
                            borderRadius: 20, backgroundColor: COLORS.black000000_20
                        }}>
                        <Entypo name="cross" size={20} color={COLORS.whiteFFFFFF} />
                    </TouchableRipple>
                    {qualityList.map((list, index) => {
                        return (
                            <View key={index}
                                style={{
                                    backgroundColor: COLORS.whiteFFFFFF,
                                    paddingVertical: '10%',

                                    borderBottomWidth: 1,
                                    borderBottomColor: COLORS.black000000_20


                                }}>
                                <TouchableOpacity style={{
                                    height: 40,
                                    //  backgroundColor: 'red',
                                    justifyContent: 'center'
                                }} onPress={() => {
                                    setQualityModalVisible(false);
                                    setStateQuality(list.value)
                                    setStateServerData([...stateServerData, list.value])
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


            {/* Clarity MODAL */}
            {/* <Modal
                dismissable={false}
                visible={clarityModalVisible}
                onDismiss={() => {

                    setMoodModalVisible(!clarityModalVisible);
                }}
                contentContainerStyle={{
                    flex: 1, paddingHorizontal: '10%',

                    justifyContent: 'center'
                }}

            >

                <View style={{
                    flex: 1,// paddingHorizontal: '10%',

                    justifyContent: 'center'


                }}>
                    <TouchableRipple
                        onPress={() => setClarityModalVisible(!clarityModalVisible)}

                        style={{
                            alignSelf: 'flex-end',
                            //marginTop: '5%',
                            height: 23.54, width: 23.54,
                            justifyContent: 'center', alignItems: 'center',
                            borderRadius: 20, backgroundColor: COLORS.black000000_20
                        }}>
                        <Entypo name="cross" size={20} color={COLORS.whiteFFFFFF} />
                    </TouchableRipple>
                    {clarityList.map((list, index) => {
                        return (
                            <View key={index}
                                style={{
                                    backgroundColor: COLORS.whiteFFFFFF,
                                    paddingVertical: '10%',

                                    borderBottomWidth: 1,
                                    borderBottomColor: COLORS.black000000_20
                                }}>
                                <TouchableOpacity style={{
                                    height: 40,
                                    //   backgroundColor: 'red',
                                    justifyContent: 'center'
                                }} onPress={() => {
                                    setClarityModalVisible(false);
                                    setStateClarity(list.value)
                                    setStateServerData([...stateServerData, list.value])
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



            {/* bottom sheet Mood */}
            <RBSheet
                // closeOnDragDown={true}
                dragFromTopOnly={true}
                height={400}
                animationType="slide"
                ref={refRBSheetMood}


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
                        <Text style={STYLES.fontSize16_000000_Roboto_Regular}>
                            Select Mood</Text>

                        <TouchableRipple
                            onPress={() => refRBSheetMood.current.close()}

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
                            {moodList.map((list, index) => {
                                return (
                                    <View key={index}
                                        style={{
                                            backgroundColor: colors.background,//COLORS.whiteFFFFFF,
                                            paddingVertical: '4%',

                                            borderBottomWidth: 1,
                                            borderBottomColor: colors.border //COLORS.black000000_20

                                        }}>
                                        <TouchableOpacity style={{
                                            //height: 40,
                                            //flex: 1,
                                            // backgroundColor: 'red',
                                            justifyContent: 'center'
                                        }} onPress={() => {
                                            refRBSheetMood.current.close()
                                            setStateMood(list.value)
                                            //     setStateServerData([...stateServerData, list.value])
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


            {/* bottom sheet   Quality */}

            <RBSheet
                // closeOnDragDown={true}
                dragFromTopOnly={true}
                height={400}
                animationType="slide"
                ref={refRBSheetQuality}


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
                        <Text style={STYLES.fontSize16_000000_Roboto_Regular}>
                            Select Quality</Text>

                        <TouchableRipple
                            onPress={() => refRBSheetQuality.current.close()}

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
                            {qualityList.map((list, index) => {
                                return (
                                    <View key={index}
                                        style={{
                                            backgroundColor: colors.background,//COLORS.whiteFFFFFF,
                                            paddingVertical: '4%',

                                            borderBottomWidth: 1,
                                            borderBottomColor: colors.border//COLORS.black000000_20

                                        }}>
                                        <TouchableOpacity style={{
                                            //height: 40,
                                            //flex: 1,
                                            // backgroundColor: 'red',
                                            justifyContent: 'center'
                                        }} onPress={() => {
                                            refRBSheetQuality.current.close()
                                            setStateQuality(list.value)
                                            //setStateServerDate(stateServerData.push(list.value))
                                            //setStateServerData([...stateServerData, list.value])
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



            {/* bottom sheet   Clarity */}

            <RBSheet
                // closeOnDragDown={true}
                dragFromTopOnly={true}
                height={400}
                animationType="slide"
                ref={refRBSheetClarity}


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
                        <Text style={STYLES.fontSize16_000000_Roboto_Regular}>
                            Select Clarity</Text>

                        <TouchableRipple
                            onPress={() => refRBSheetClarity.current.close()}

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
                            {clarityList.map((list, index) => {
                                return (
                                    <View key={index}
                                        style={{
                                            backgroundColor: colors.background,
                                            paddingVertical: '4%',

                                            borderBottomWidth: 1,
                                            borderBottomColor: colors.border//COLORS.grey707070//colors.border
                                            //COLORS.black000000_20

                                        }}>
                                        <TouchableOpacity style={{
                                            //height: 40,
                                            //flex: 1,
                                            // backgroundColor: 'red',
                                            justifyContent: 'center'
                                        }} onPress={() => {
                                            refRBSheetClarity.current.close()
                                            setStateClarity(list.value)
                                            //setStateServerDate(stateServerData.push(list.value))
                                            //  setStateServerData([...stateServerData, list.value])
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

        </>
    );
};



export default Quality;

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        backgroundColor: COLORS.blue0093F5,
        bottom: 0,
    },
})