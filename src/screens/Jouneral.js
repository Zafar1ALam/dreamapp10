import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
    View, ScrollView, Dimensions, Image, StyleSheet, TouchableOpacity
    , FlatList,
    Alert,
} from 'react-native'
import RBSheet from "react-native-raw-bottom-sheet";
import DateTimePicker from '@react-native-community/datetimepicker';
import {
    Appbar, Card, Title, Paragraph, Button, Modal,
    Avatar, IconButton, List, TextInput, Searchbar,
    FAB,
    Provider, useTheme,
    TouchableRipple,
} from 'react-native-paper';

import STYLES from '../STYLES';
import { SvgXml } from 'react-native-svg';
import Svgs from '../assets/svgs/Svgs';
import COLORS from '../assets/colors/Color';
import { Chip, Text } from 'react-native-paper';
import Button1 from '../Components/Button1';
import TextInput1 from '../Components/TextInput1';
import TextInputwithoutSVG from '../Components/TextInputwithoutSVG.js';
import Entypo from 'react-native-vector-icons/Entypo'
import AwesomeAlert from 'react-native-awesome-alerts';
import TextArea1 from '../Components/TextArea1';
import SweetAlert from 'react-native-sweet-alert';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import strings from '../lng/LocalizedString';







const Jouneral = ({ route, navigation }) => {
    const [stateShowAlert, setStateShowAlert] = useState(false)
    const [stateSweetAlert, setStateSweetAlert] = useState(false)
    const { colors } = useTheme()
    const { routeId, routeTitle, routeDescription, routeDreamType, routestate_AS_UserId,
        routeSleep, routeClarity, routeMood, routeDate, routeTime } = route.params;




    const jouneralDelete = () => {
        // console.log(id)

        setStateShowAlert(true)
        fetch('https://dream-app-mtechub.herokuapp.com/api/journel/deleteJournel/' + routeId + '/' + routestate_AS_UserId, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((json) => {

                console.log(json)
                if (json.success) {
                    setStateShowAlert(false)
                    SweetAlert.showAlertWithOptions({
                        title: 'Successfully Delete',
                        //  subTitle: '',
                        confirmButtonTitle: 'OK',

                        confirmButtonColor: '#000',

                        style: 'success',
                        //cancellable: true
                    },
                        // callback => console.log('callback')
                    );
                    navigation.navigate("MyDreamRep"

                    )

                }


            })
            .catch((error) => {

                console.error(error);
            });
    }


    const jouneralEdit = () => {
        navigation.navigate("EditJournal",
            {
                rId: routeId,
                rTitle: routeTitle,
                rDescription: routeDescription,
                rDreamType: routeDreamType,
                rDate: routeDate,
                rClarity: routeClarity,
                rMood: routeMood,
                rSleep: routeSleep,
                rTime: routeTime,
                rstate_AS_UserId: routestate_AS_UserId

            })
    }
    return (
        <View style={STYLES.withoutpaddingcontainer}>
            <Appbar.Header style={{
                // backgroundColor: COLORS.whiteFFFFFF,
                backgroundColor: colors.background
            }}>

                <Appbar.BackAction onPress={() => { navigation.goBack() }} />
                <Appbar.Content
                    style={{

                        alignItems: 'center'
                    }}
                    titleStyle={[STYLES.fontSize20_Roboto_Medium,
                        //{ alignSelf: 'center', }
                    ]}
                    title={strings.Jouneral} color={COLORS.blue0093F5} />


            </Appbar.Header >

            <View style={{
                flex: 1,
                paddingHorizontal: '5%',
                // zIndex: 0
                //backgroundColor: 'red'
            }}>


                <View style={{
                    flex: 0.87, //backgroundColor: 'green'
                }}>
                    <View style={{
                        marginTop: '15%', flexDirection: 'row',
                        justifyContent: 'space-between',
                        //  backgroundColor: 'red'
                    }}>
                        <Text>{strings.Title}</Text>

                    </View>
                    <View style={{
                        borderWidth: 1, paddingLeft: '3%',
                        paddingVertical: '5%', marginTop: '2%', borderColor: colors.border
                    }}>
                        <Text>{routeTitle}</Text>
                    </View>


                    <Text style={{ marginTop: '5%' }}>{strings.Description}</Text>

                    <View style={{
                        borderWidth: 1, paddingLeft: '3%', marginTop: '2%',
                        paddingVertical: '5%', borderColor: colors.border
                    }}>
                        <Text numberOfLines={4}>{routeDescription}</Text>
                    </View>


                    <TouchableRipple



                        style={{
                            borderRadius: 20,// borderColor: COLORS.black000000_20,
                            borderColor: colors.border, borderWidth: 1, width: '32%',
                            alignItems: 'center',
                            justifyContent: 'center', paddingHorizontal: '3%',
                            paddingVertical: '1%',
                            backgroundColor: COLORS.blue0093F5,
                            marginTop: '10%'

                        }}>


                        <Text style={


                            STYLES.fontSize15_0093F5_Roboto_Medium
                        }>{routeDreamType}</Text>
                    </TouchableRipple>
                    <View style={{
                        marginTop: '10%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        //backgroundColor: 'red'
                    }}>

                        <View  >
                            <View style={{
                                borderWidth: 1,
                                borderColor: colors.border,
                                paddingVertical: '2%',
                                paddingHorizontal: '10%',
                                borderRadius: 10, alignItems: 'center',
                                marginBottom: '15%'
                            }}>
                                <Text>{routeMood}</Text>
                            </View>
                            <View style={{
                                borderWidth: 1,
                                borderColor: colors.border,
                                paddingVertical: '2%',
                                paddingHorizontal: '10%',
                                borderRadius: 10, alignItems: 'center',
                                marginBottom: '15%'
                            }}>
                                <Text>{routeClarity}</Text>
                            </View>
                            <View style={{
                                borderWidth: 1,
                                borderColor: colors.border,
                                paddingVertical: '2%',
                                paddingHorizontal: '10%',
                                borderRadius: 10, alignItems: 'center',
                                marginBottom: '15%'
                            }}>
                                <Text>{routeSleep}</Text>
                            </View>
                        </View>

                        <View >
                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesome name="calendar-o"
                                    size={20} style={{ marginRight: '15%' }} />
                                <View>

                                    <Text>
                                        {strings.Date}
                                    </Text>
                                    <Text>
                                        {routeDate}
                                    </Text>

                                </View>


                            </View>
                            <View style={{ flexDirection: 'row', marginTop: '10%' }}>
                                <MaterialCommunityIcons name="clock-time-four-outline"
                                    size={20} style={{ marginRight: '15%' }} />

                                <View>
                                    <Text>
                                        {strings.Time}
                                    </Text>
                                    <Text>
                                        {routeTime}
                                    </Text>
                                </View>
                                <View>



                                </View>
                            </View>

                        </View>
                    </View>

                </View>

                <View style={{
                    flex: 0.1, //justifyContent: 'center',
                    flexDirection: 'row',
                    // backgroundColor: 'green', 
                    justifyContent: 'space-between'
                }}>

                    <Button
                        style={[{
                            height: 50,
                            //paddingVertical: '0%',
                            // flex: 1,
                            flex: 0.4,
                            justifyContent: 'center',
                            backgroundColor: '#0093F5'
                        }, STYLES.fontSize20_FFFFFF_Roboto_Regular]}
                        mode="contained" onPress={() => {
                            jouneralEdit()
                        }}>
                        {strings.Edit}
                    </Button>
                    <Button
                        style={[{
                            height: 50,
                            //paddingVertical: '0%',
                            // flex: 1,
                            flex: 0.4,
                            justifyContent: 'center',
                            backgroundColor: '#0093F5'
                        }, STYLES.fontSize20_FFFFFF_Roboto_Regular]}
                        mode="contained" onPress={() => {
                            jouneralDelete()
                        }}>
                        {strings.Delete}
                    </Button>

                </View>

            </View >

            <AwesomeAlert
                show={stateShowAlert}
                showProgress={true}

                closeOnTouchOutside={false}
            //  closeOnHardwareBackPress={false}
            />
        </View>
    );
};

Jouneral.propTypes = {

};

export default Jouneral;