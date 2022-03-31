import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    View, ScrollView, Dimensions, Image, StyleSheet, TouchableOpacity
    , FlatList, Share, Alert
} from 'react-native'
import {
    Appbar, Card, Title, Paragraph, Button,
    Avatar, IconButton, List, TextInput, Searchbar,
    FAB, TouchableRipple, Modal, useTheme
} from 'react-native-paper';
import STYLES from '../STYLES';
import { SvgXml } from 'react-native-svg';
import Svgs from '../assets/svgs/Svgs';
import COLORS from '../assets/colors/Color';
import { Chip, Text } from 'react-native-paper';
import Button1 from '../Components/Button1';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AwesomeAlert from 'react-native-awesome-alerts';
import strings from '../lng/LocalizedString';
import { useSelector } from 'react-redux';

const MyDreamRep = ({ route, navigation }) => {
    const { colors } = useTheme()
    const [state_AS_UserId, setState_AS_UserId] = useState();
    const [stateDeleteJouneralId, setStateDeleteJouneralId] = useState()
    const isFocused = useIsFocused();
    const [stateShowAlert, setStateShowAlert] = useState(true)
    // console.log(state_AS_UserId)
    useEffect(() => {
        getMyObject()
    }, [isFocused])


    const getMyObject = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('userId')
            if (jsonValue != null) {
                return (
                    setState_AS_UserId(jsonValue),
                    //  console.log('appname'),
                    fetch('https://dream-app-mtechub.herokuapp.com/api/journel/getAll/' + jsonValue)
                        .then((response) => response.json())
                        .then((json) => {
                            /// console.log(json.allJournels)
                            setStateListAlphabet(json.allJournels)
                            setStateShowAlert(false)
                            //console.log(json.allDreams)
                            // setStateListAlphabet(json.allDreams)
                            //console.log(json.singleSubCate[0].dreams)
                            //setStateListAlphabet(json.singleSubCate[0].dreams)
                        })
                        .catch((error) => console.error(error))
                )
            }
            else {
                return (
                    null
                )
            }
        } catch (e) {
            alert(e)
        }
    }


    const [stateListAlphabet, setStateListAlphabet] = useState(
        [

            // {
            //     id: 1,
            //     date: '01-01-2022',
            //     title: 'Title here', data: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et'
            // },

        ]);


    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {
        //backgroundColor: 'white', 
        alignItems: 'center', width: '75%',
        height: '25%', //justifyContent: 'center',5
        justifyContent: 'flex-start',
        paddingTop: '2%',
        borderColor: colors.border,
        borderWidth: 1,
        alignSelf: 'center'
    };





    const allJouneralGet = () => {
        //console.log('allJouneralGet')
        setStateShowAlert(true)
        fetch('https://dream-app-mtechub.herokuapp.com/api/journel/getAll/' + state_AS_UserId)
            .then((response) => response.json())
            .then((json) => {
                // console.log(json.allJournels)
                setStateListAlphabet(json.allJournels)
                setStateShowAlert(false)
                //console.log(json.allDreams)
                // setStateListAlphabet(json.allDreams)
                //console.log(json.singleSubCate[0].dreams)
                //setStateListAlphabet(json.singleSubCate[0].dreams)
            })
            .catch((error) => console.error(error))
    }

    // const reduxGetLanguage = useSelector(val => val.checkValue.language)//val my hmesha pura store ayga // val.reducer.initial value

    // if (reduxGetLanguage == 1) {
    //     strings.setLanguage("Sp")

    // }
    // if (reduxGetLanguage == 0) {
    //     strings.setLanguage("En")

    // }
    return (
        <View style={STYLES.withoutpaddingcontainer}>
            <AwesomeAlert
                show={stateShowAlert}
                showProgress={true}

                closeOnTouchOutside={false}
            //  closeOnHardwareBackPress={false}
            />
            <Appbar.Header style={{
                backgroundColor: colors.background,
                //justifyContent: 'center',
                //alignItems: 'center',

            }}>

                <Appbar.BackAction onPress={() => { navigation.goBack() }} />
                <Appbar.Content
                    style={{

                        alignItems: 'center'
                    }}
                    titleStyle={[STYLES.fontSize20_Roboto_Medium
                        //{ alignSelf: 'center', }
                    ]}
                    title={strings.My_Dream_Rep} color={COLORS.blue0093F5} />


            </Appbar.Header >

            <View style={STYLES.container}>



                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{ marginTop: '5%', }}
                    data={stateListAlphabet}
                    renderItem={({ item }) => {
                        // console.log(item.datePost)
                        //  console.log(item)
                        //  console.log(typeof (item.datePost))
                        var arraystringd = item.datePost.split("T")

                        var dd = arraystringd[0].split(`"`);
                        //  console.log(dd)
                        var rightdate = dd[0].split("-")
                        var de = rightdate[2] + "-" + rightdate[1] + "-" + rightdate[0]
                        // console.log(typeof (item.createdAt))
                        //  let text = "How are you doing today?";
                        // const myArray = item.createdAt.split("T");
                        // console.log(typeof (myArray))
                        // //  console.log(myArray)
                        // let date = myArray[0];
                        // //   console.log(typeof (date))
                        // let dateInPieces = date.split("-")
                        // //   console.log(dateInPieces)
                        // //   console.log(typeof (dateInPieces))
                        // const finalDate = dateInPieces[2] + "-" + dateInPieces[1] + "-" + dateInPieces[0]

                        return (

                            <Card style={{
                                marginBottom: '4%',
                                borderWidth: 1,
                                // backgroundColor: COLORS.whiteFFFFFF,
                                borderColor: colors.border, //COLORS.black000000_20,
                                borderRadius: 6
                            }} onPress={() => {
                                console.log(item.clearity)
                                navigation.navigate("Jouneral",
                                    {
                                        routeId: item._id,
                                        routeTitle: item.title,
                                        routeDescription: item.desc,
                                        routeDreamType: item.dreamType,
                                        routeDate: de,
                                        routeClarity: item.clearity,
                                        routeMood: item.mood,
                                        routeSleep: item.quality,
                                        routeTime: item.dreamTime,
                                        routestate_AS_UserId: state_AS_UserId

                                    })

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
                                            paddingRight: '2%', paddingVertical: '1%'
                                        }}>
                                            <Text>{item.quality}</Text>
                                        </View>
                                        <View style={{
                                            borderColor: colors.border,
                                            paddingLeft: '2%',
                                            paddingVertical: '1%'
                                        }}>
                                            <Text>{item.clearity}</Text>
                                        </View>

                                    </View>

                                </Card.Content>

                            </Card>
                        )
                    }}

                    keyExtractor={item => item._id}
                />

                <FAB
                    onPress={() => { navigation.navigate("CreateJouneral") }}
                    // onLongPress={() => {
                    //     navigation.navigate("CreateJouneral")
                    // }}
                    style={styles.fab}
                    color={COLORS.whiteFFFFFF}
                    icon="plus"
                // onPress={() => console.log('Pressed')}
                />
            </View>
            <Appbar.Header style={{
                backgroundColor: colors.background,
                justifyContent: 'space-between',
                paddingHorizontal: '5%'
            }}>

                <Appbar.Action icon={() =>
                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="21.179" height="17.208" viewBox="0 0 21.179 17.208">
                <path id="Icon_awesome-list" data-name="Icon awesome-list" d="M3.309,16.612H.662A.662.662,0,0,0,0,17.273v2.647a.662.662,0,0,0,.662.662H3.309a.662.662,0,0,0,.662-.662V17.273A.662.662,0,0,0,3.309,16.612Zm0-13.237H.662A.662.662,0,0,0,0,4.037V6.684a.662.662,0,0,0,.662.662H3.309a.662.662,0,0,0,.662-.662V4.037A.662.662,0,0,0,3.309,3.375Zm0,6.618H.662A.662.662,0,0,0,0,10.655V13.3a.662.662,0,0,0,.662.662H3.309a.662.662,0,0,0,.662-.662V10.655A.662.662,0,0,0,3.309,9.993Zm17.208,7.28H7.28a.662.662,0,0,0-.662.662v1.324a.662.662,0,0,0,.662.662H20.517a.662.662,0,0,0,.662-.662V17.935A.662.662,0,0,0,20.517,17.273Zm0-13.237H7.28a.662.662,0,0,0-.662.662V6.022a.662.662,0,0,0,.662.662H20.517a.662.662,0,0,0,.662-.662V4.7A.662.662,0,0,0,20.517,4.037Zm0,6.618H7.28a.662.662,0,0,0-.662.662v1.324a.662.662,0,0,0,.662.662H20.517a.662.662,0,0,0,.662-.662V11.317A.662.662,0,0,0,20.517,10.655Z" transform="translate(0 -3.375)" fill="#0093f5"/>
              </svg>
              `} />}



                    color={COLORS.blue0093F5} />
                <Appbar.Action icon="magnify"
                    onPress={() => navigation.navigate("SearchDream", { state_AS_UserId: state_AS_UserId })} />
                <Appbar.Action icon={() =>
                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="19.808" height="14.856" viewBox="0 0 19.808 14.856">
                    <path id="Icon_awesome-chart-bar" data-name="Icon awesome-chart-bar" d="M12.875,14.4h1.486a.533.533,0,0,0,.5-.5v-5.2a.533.533,0,0,0-.5-.5H12.875a.533.533,0,0,0-.5.5v5.2A.533.533,0,0,0,12.875,14.4Zm3.714,0h1.486a.533.533,0,0,0,.5-.5V5a.533.533,0,0,0-.5-.5H16.59a.533.533,0,0,0-.5.5v8.914a.533.533,0,0,0,.5.5Zm-11.142,0H6.933a.533.533,0,0,0,.5-.5V11.185a.533.533,0,0,0-.5-.5H5.447a.533.533,0,0,0-.5.5v2.724a.533.533,0,0,0,.5.5Zm3.714,0h1.486a.533.533,0,0,0,.5-.5V6.233a.533.533,0,0,0-.5-.5H9.161a.533.533,0,0,0-.5.5v7.676A.533.533,0,0,0,9.161,14.4ZM19.189,16.88H2.476V5.119A.619.619,0,0,0,1.857,4.5H.619A.619.619,0,0,0,0,5.119v13a1.238,1.238,0,0,0,1.238,1.238H19.189a.619.619,0,0,0,.619-.619V17.5A.619.619,0,0,0,19.189,16.88Z" transform="translate(0 -4.5)" fill="#7f7f7f"/>
                  </svg>
                  
              `} />} onPress={() => navigation.navigate("Reports")} />

            </Appbar.Header>


            {/* <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <Text style={STYLES.fontSize25_000000_Roboto_Regular}>Delete Journal</Text>
                <Text style={[STYLES.fontSize17_000000_Roboto_Regular,
                { marginTop: '5%' }]}>Are you sure you want to delete?</Text>

                <View style={{
                    flexDirection: 'row', marginTop: '15%', //backgroundColor: 'green',
                    justifyContent: 'space-between', width: '70%'

                }}>
                    <TouchableRipple style={{
                        backgroundColor: COLORS.red, paddingHorizontal: '10%',
                        paddingVertical: '5%', //marginRight: '15%'
                    }} onPress={() => jouneralDelete(stateDeleteJouneralId)
                        // hideModal()
                    }>
                        <Text>Yes</Text>
                    </TouchableRipple>
                    <TouchableRipple style={{
                        backgroundColor: COLORS.blue0093F5, paddingHorizontal: '10%',
                        paddingVertical: '5%',// marginRight: '15%'
                    }} onPress={() => hideModal()}>
                        <Text>No</Text>
                    </TouchableRipple>
                </View>
            </Modal > */}
        </View >
    );
};



export default MyDreamRep;


const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        backgroundColor: COLORS.blue0093F5,
        bottom: 0,
    },
})
