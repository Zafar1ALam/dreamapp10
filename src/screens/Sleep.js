
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Chip, FAB, Text, TouchableRipple, useTheme } from 'react-native-paper'
import STYLES from '../STYLES';
import { View, StyleSheet, FlatList, Share } from 'react-native';
import COLORS from '../assets/colors/Color';
import { SvgXml } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AwesomeAlert from 'react-native-awesome-alerts';
import strings from '../lng/LocalizedString';
const Sleep = ({ route }) => {
    const [stateButtonActive, setStateButtonActive] = useState(true)
    const state_AS_UserId = route.params.state_AS_UserId;

    const { colors } = useTheme();

    console.log(state_AS_UserId)
    useEffect(() => {
        console.log("state use effect")
        console.log(`https://dream-app-mtechub.herokuapp.com/api/journel/getAllByDreamType/Nightmare/61f3d7b3f524072114a3a49e`)

        fetch('https://dream-app-mtechub.herokuapp.com/api/journel/getAllByDreamType/' + stateDreamType + '/' + state_AS_UserId)
            .then((response) => response.json())
            .then((json) => {
                // setStateShowAlert(false)
                //   console.log(json.allJournels)
                setGetAllByDreamTypeFlatList(json.allJournels)
            })
            .catch((error) => console.error(error))


    }, [])

    const onFetchApi = (dreamType) => {
        // setStateShowAlert(true)
        fetch('https://dream-app-mtechub.herokuapp.com/api/journel/getAllByDreamType/' + dreamType + '/' + state_AS_UserId)
            .then((response) => response.json())
            .then((json) => {
                //  setStateShowAlert(false)
                //   console.log(json.allJournels)
                setGetAllByDreamTypeFlatList(json.allJournels)
            })
            .catch((error) => console.error(error))

    }










    const [stateDreamType, setStateDreamType] = useState("Nightmare");
    const [getAllByDreamTypeFlatList, setGetAllByDreamTypeFlatList] = useState([]);

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
        <View style={STYLES.container}>
            <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                marginTop: '5%'
            }}>

                <TouchableRipple

                    onPress={() => {
                        onFetchApi("Nightmare")
                        setStateDreamType("Nightmare")
                    }}
                    style={{
                        borderRadius: 20, borderColor: colors.border,//COLORS.black000000_20,
                        borderWidth: 1, width: '32%', alignItems: 'center',
                        justifyContent: 'center', paddingHorizontal: '3%',
                        paddingVertical: '1%',
                        backgroundColor: stateDreamType == "Nightmare" ?
                            COLORS.blue0093F5 : colors.background//COLORS.whiteFFFFFF
                    }}>
                    <Text style={

                        stateDreamType == "Nightmare" ? STYLES.fontSize15_FFFFFF_Roboto_Medium
                            : STYLES.fontSize15_0093F5_Roboto_Medium
                    }>Nightmare</Text>
                </TouchableRipple>

                <TouchableRipple
                    onPress={() => {
                        setStateDreamType("Recurring")
                        onFetchApi("Recurring")
                    }}
                    style={{
                        borderRadius: 20, borderColor: colors.border,//COLORS.black000000_20,
                        borderWidth: 1, width: '32%', alignItems: 'center',
                        justifyContent: 'center', paddingHorizontal: '3%',
                        paddingVertical: '1%',

                        backgroundColor: stateDreamType == "Recurring" ? COLORS.blue0093F5 :
                            colors.background//COLORS.whiteFFFFFF
                    }}>
                    <Text style={

                        stateDreamType == "Recurring" ? STYLES.fontSize15_FFFFFF_Roboto_Medium
                            : STYLES.fontSize15_0093F5_Roboto_Medium
                    }>
                        Recurring</Text>
                </TouchableRipple>
                <TouchableRipple

                    onPress={() => {
                        setStateDreamType("Lucid")
                        onFetchApi("Lucid")
                    }}
                    style={{
                        borderRadius: 20, borderColor: colors.border,//COLORS.black000000_20,
                        borderWidth: 1, width: '32%', alignItems: 'center',
                        justifyContent: 'center', paddingHorizontal: '3%',
                        paddingVertical: '1%',
                        backgroundColor: stateDreamType == "Lucid" ? COLORS.blue0093F5 :
                            colors.background//COLORS.whiteFFFFFF
                    }}>
                    <Text style={

                        stateDreamType == "Lucid" ? STYLES.fontSize15_FFFFFF_Roboto_Medium
                            : STYLES.fontSize15_0093F5_Roboto_Medium
                    }>Lucid</Text>
                </TouchableRipple>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ marginTop: '5%' }}
                data={getAllByDreamTypeFlatList}
                renderItem={({ item }) => {
                    //  console.log(item.dreamTime)
                    // console.log(typeof (item.dreamTime))
                    var arraystringd = item.datePost.split("T")

                    var dd = arraystringd[0].split(`"`);
                    //  console.log(dd)
                    var rightdate = dd[0].split("-")
                    var de = rightdate[2] + "-" + rightdate[1] + "-" + rightdate[0]

                    return (

                        <Card style={{
                            marginBottom: '4%',
                            borderWidth: 1,
                            borderColor: colors.border, //COLORS.black000000_20,
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
                            </Card.Content>
                        </Card>
                    )
                }}
                keyExtractor={item => item._id}
            />


            {/* <AwesomeAlert
                show={stateShowAlert}
                showProgress={true}

                closeOnTouchOutside={false}
            //  closeOnHardwareBackPress={false}
            /> */}
        </View>
    );
};



export default Sleep;

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        backgroundColor: COLORS.blue0093F5,
        bottom: 0,
    },
})