import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, FAB, Text, TextInput, TouchableRipple, useTheme } from 'react-native-paper'
import STYLES from '../STYLES';
import {
    View, Button, FlatList, StyleSheet, TouchableOpacity,
    Share
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import COLORS from '../assets/colors/Color';
import { SvgXml } from 'react-native-svg';
// import AwesomeAlert from 'react-native-awesome-alerts';
import strings from '../lng/LocalizedString';
const Calender = ({ route }) => {
    const state_AS_UserId = route.params.state_AS_UserId;
    const { colors } = useTheme();
    console.log(state_AS_UserId)

    const [stateFlatList, setStateFlatList] = useState([


    ])
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [stateDate, setStateDate] = useState()

    const [stateDataBaseDate, setStateDataBaseDate] = useState()
    var z;
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        // var date = new Date(selectedDate);
        // var b = date.setDate(date.getDate() + 1);
        //d = selectedDate
        //console.log(currentDate)
        // console.log(selectedDate)

        let date = new Date();
        date = selectedDate
        // console.log(date)
        if (date != undefined) {
            let year = date.getFullYear();
            let month = (date.getMonth() + 1).toString().padStart(2, "0");
            let day = date.getDate().toString().padStart(2, "0");

            let q = year + '-' + month + '-' + day
            console.log(typeof (year + '-' + month + '-' + day))

            setStateDate(day + "-" + month + "-" + year)

            //  setStateDataBaseDate(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate())
            console.log('https://dream-app-mtechub.herokuapp.com/api/journel/getAllByDate/' + q + "/" + state_AS_UserId)
            fetch('https://dream-app-mtechub.herokuapp.com/api/journel/getAllByDate/' + q + "/" + state_AS_UserId)
                .then((response) => response.json())
                .then((json) => {
                    console.log(json.allJournels)
                    setStateFlatList(json.allJournels)

                    // setStateListAlphabet(json.allSounds)
                })
                .catch((error) => console.error(error))


        }
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };


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
    return (
        <>
            <View style={STYLES.container}>
                <TouchableOpacity onPress={showDatepicker}>
                    <TextInput
                        disabled={true}
                        style={{ marginTop: '7%' }}
                        activeOutlineColor={COLORS.blue0093F5}
                        mode='outlined'
                        placeholder='mm/dd/yyyy'
                        label={strings.Enter_Date}
                        value={stateDate}
                        right={<TextInput.Icon name="calendar-blank" />}
                    />
                </TouchableOpacity>
                {stateFlatList.length == 0 ? <View>
                    <Text style={[{ color: colors.text, marginTop: '10%' }, STYLES.fontSize17_000000_Roboto_Regular]}>No Record Found</Text>
                </View>

                    :
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        style={{ marginTop: '5%' }}
                        data={stateFlatList}
                        renderItem={({ item }) => {
                            console.log(item.datePost)
                            console.log(typeof (item.datePost))
                            var arraystringd = item.datePost.split("T")

                            var dd = arraystringd[0].split(`"`);
                            console.log(dd)
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
                                    </Card.Content>
                                </Card>
                            )
                        }}
                        keyExtractor={item => item._id}
                    />
                }


            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </>
    );
};



export default Calender;
const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        backgroundColor: COLORS.blue0093F5,
        bottom: 0,
    },
})