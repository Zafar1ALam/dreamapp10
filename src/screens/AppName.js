

import { StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Dimensions, Image } from 'react-native'
import {
    Appbar, Card, Title, Paragraph, Button, useTheme,
    Text, Avatar, IconButton, TouchableRipple
} from 'react-native-paper';
import STYLES from '../STYLES';
import { SvgXml } from 'react-native-svg';
import Svgs from '../assets/svgs/Svgs';
import COLORS from '../assets/colors/Color';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
import strings from '../lng/LocalizedString';
import { useSelector } from 'react-redux';
//---------------------
const AppName = ({ navigation }) => {
    const { colors } = useTheme();

    useEffect(() => {
        getMyObject()
        getMyObject1()
        var d = new Date();
        // d.setHours(6)
        console.log(d.getHours())
        if (d.getHours() >= 5 && d.getHours() < 12) {
            setStateWeather("Good Mor.")
        }
        else
            if (d.getHours() >= 12 && d.getHours() < 18) {
                setStateWeather("Good Noon.")
            } else
                if (d.getHours() >= 18 && d.getHours() < 22) {
                    setStateWeather("Good Eve.")
                }
                else
                    if (d.getHours() > 22 || d.getHours() < 5) {
                        setStateWeather("Good Night.")
                    }



        Geolocation.getCurrentPosition((success) => {
            console.log(success.coords.latitude)
            console.log(success.coords.longitude)
            console.log('api.openweathermap.org/data/2.5/weather?lat=' + success.coords.latitude
                + '&lon=' + success.coords.longitude + '&appid=e8ffa60ecae9665e148b0cc3efbfcba4')
            fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + success.coords.latitude
                + '&lon=' + success.coords.longitude + '&appid=e8ffa60ecae9665e148b0cc3efbfcba4')
                .then((response) => response.json())
                .then((json) => {
                    console.log(json.weather[0].icon)
                    setStateWeatherIcon(json.weather[0].icon)
                    //  console.log(json.weather[0].description)
                    // setStateWeather(json.weather[0].description)

                })
                .catch((error) => console.error(error))

        }, (e) => { console.log(e) },
            { timeout: 20000 }
        );
    }, [])
    const [stateGreetings, setStateGreetings] = useState()
    const [stateWeather, setStateWeather] = useState();
    const [stateWeatherIcon, setStateWeatherIcon] = useState();

    const [state_AS_UserId, setState_AS_UserId] = useState();
    const [state_AS_UserName, setState_AS_UserName] = useState();

    const getMyObject = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('userId')
            return jsonValue != null ?

                setState_AS_UserId(jsonValue)
                : null
        } catch (e) {
            alert(e)
        }
    }

    const getMyObject1 = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('userName')
            return jsonValue != null ?

                setState_AS_UserName(jsonValue)
                : null
        } catch (e) {
            alert(e)
        }
    }
    const reduxGetLanguage = useSelector(val => val.checkValue.language)//val my hmesha pura store ayga // val.reducer.initial value

    if (reduxGetLanguage == 1) {
        strings.setLanguage("Sp")

    }
    if (reduxGetLanguage == 0) {
        strings.setLanguage("En")

    }
    return (

        <View style={STYLES.withoutpaddingcontainer}

        >
            <Appbar.Header style={{
                backgroundColor: colors.background,
                //backgroundColor: COLORS.whiteFFFFFF,
                paddingLeft: '5%'

            }}>


                <Appbar.Content

                    titleStyle={[STYLES.fontSize20_Roboto_Medium,
                        // { alignSelf: 'center' }
                    ]}
                    title={strings.Dream} color={COLORS.blue0093F5}
                />
                <Appbar.Action onPress={() => {
                    navigation.navigate("Settings")
                }}
                    icon={() => <Ionicons name="settings-sharp" size={20}
                        color={COLORS.blue0093F5}
                    />}


                />



            </Appbar.Header>
            <View style={[STYLES.container, { marginVertical: '5%' }]}>

                {/* <Card mode='elevation'
                > */}

                <View style={{
                    flex: 0.22, paddingHorizontal: '3%',
                    paddingVertical: '3%', //backgroundColor: 'red',
                    borderBottomWidth: 1,
                    //  borderBottomColor: COLORS.black000000_20
                    borderBottomColor: colors.border
                }}>
                    {/* <Card.Content> */}
                    <View style={{
                        flex: 0.5,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        //  backgroundColor: 'green'

                    }}>
                        <Text style={STYLES.fontSize30_000000_Roboto_Regular_38}>
                            {stateWeather}
                            {/* Good Eve. */}
                        </Text>

                        <Image source={{ uri: 'http://openweathermap.org/img/wn/' + stateWeatherIcon + '@2x.png' }}
                            style={{
                                width: 66.155, height: 61.027, //backgroundColor: 'red',
                                //color: 'green'
                            }}
                        />
                        {/* <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="46.155" height="41.027" viewBox="0 0 46.155 41.027">
  <path id="Icon_awesome-cloud-sun-rain" data-name="Icon awesome-cloud-sun-rain" d="M40.906,18.069a6.408,6.408,0,0,0-6.29-5.249,6.329,6.329,0,0,0-2.748.641,7.678,7.678,0,0,0-13.919,4.487c0,.04.016.088.016.128A6.409,6.409,0,0,0,19.231,30.77H39.744a6.4,6.4,0,0,0,1.162-12.7ZM9.944,20.826A7.674,7.674,0,0,1,20.1,9.351a10.186,10.186,0,0,1,5.545-1.659c.056,0,.1.016.16.016l.713-2.139a1.041,1.041,0,0,0-1.322-1.314L19.159,6.266,16.314.577a1.044,1.044,0,0,0-1.867,0L11.6,6.266,5.569,4.255A1.041,1.041,0,0,0,4.255,5.577l2.011,6.034L.577,14.455a1.044,1.044,0,0,0,0,1.867l5.689,2.845L4.255,25.2a1.047,1.047,0,0,0,1.322,1.322l4.744-1.579c-.016-.192-.056-.377-.056-.577a8.856,8.856,0,0,1,.5-2.877,7.39,7.39,0,0,1-.817-.665Zm5.593-4.648a10.218,10.218,0,0,1,2.556-5.128,5.058,5.058,0,0,0-2.708-.793,5.133,5.133,0,0,0-5.128,5.128,5.08,5.08,0,0,0,1.691,3.774A8.986,8.986,0,0,1,15.537,16.178ZM42.028,33.5a1.279,1.279,0,0,0-1.747.481l-2.933,5.128a1.277,1.277,0,0,0,.481,1.747,1.279,1.279,0,0,0,1.747-.481l2.933-5.128a1.284,1.284,0,0,0-.481-1.747Zm-7.692,0a1.279,1.279,0,0,0-1.747.481l-2.933,5.128a1.277,1.277,0,0,0,.481,1.747,1.279,1.279,0,0,0,1.747-.481l2.933-5.128a1.284,1.284,0,0,0-.481-1.747Zm-7.692,0a1.279,1.279,0,0,0-1.747.481l-2.933,5.128a1.277,1.277,0,0,0,.481,1.747,1.279,1.279,0,0,0,1.747-.481l2.933-5.128a1.284,1.284,0,0,0-.481-1.747Zm-7.692,0a1.279,1.279,0,0,0-1.747.481l-2.933,5.128a1.277,1.277,0,0,0,.481,1.747,1.279,1.279,0,0,0,1.747-.481l2.933-5.128a1.284,1.284,0,0,0-.481-1.747Z" fill="#0093f5"/>
</svg>
`} /> */}
                    </View  >
                    <View
                        style={{
                            flex: 0.5,
                            //                            backgroundColor: 'red'

                        }}
                    >
                        <Text style={[STYLES.fontSize44_0093F5_Roboto_Regular,
                        ]}>{state_AS_UserName}
                        </Text>
                    </View>
                </View>



                {/* view  Dictionary card and jouneral card  */}

                <View style={{
                    flex: 0.25,
                    // backgroundColor: 'orange',
                    marginTop: '10%',
                    flexDirection: 'row',
                    justifyContent: "space-between"
                }}>


                    {/* Dictionary card */}
                    <TouchableRipple
                        onPress={() => {
                            navigation.navigate("Dictionary")

                        }}
                        style={{
                            width: '48%',
                            justifyContent: 'center'
                        }}>
                        <Card
                            mode='outlined'
                            style={{
                                // width: '48%',
                                flex: 1,
                                //backgroundColor: 'red',
                                // justifyContent: 'center'
                            }} >
                            <Card.Content style={{
                                flex: 1,
                                //backgroundColor: 'green',

                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="39.123" height="44.711" viewBox="0 0 39.123 44.711">
  <path id="Icon_awesome-book" data-name="Icon awesome-book" d="M39.123,31.438V2.1a2.091,2.091,0,0,0-2.1-2.1H8.383A8.386,8.386,0,0,0,0,8.383V36.328a8.386,8.386,0,0,0,8.383,8.383H37.027a2.091,2.091,0,0,0,2.1-2.1v-1.4a2.112,2.112,0,0,0-.777-1.633,19.475,19.475,0,0,1,0-6.523A2.081,2.081,0,0,0,39.123,31.438ZM11.178,11.7a.526.526,0,0,1,.524-.524H30.215a.526.526,0,0,1,.524.524v1.747a.526.526,0,0,1-.524.524H11.7a.526.526,0,0,1-.524-.524Zm0,5.589a.526.526,0,0,1,.524-.524H30.215a.526.526,0,0,1,.524.524v1.747a.526.526,0,0,1-.524.524H11.7a.526.526,0,0,1-.524-.524ZM33.307,39.123H8.383a2.794,2.794,0,0,1,0-5.589H33.307A31.438,31.438,0,0,0,33.307,39.123Z" fill="#0093f5"/>
</svg>
`} />
                                <Paragraph
                                    style={[{
                                        marginTop: '15%',
                                        paddingVertical: "4%",
                                        textAlign: 'center', //backgroundColor: "green"
                                    }
                                        , STYLES.fontSize22_000000_Roboto_Regular_35]}>{strings.Dictionary}</Paragraph>
                            </Card.Content>
                        </Card>
                    </TouchableRipple>
                    {/* Journal card */}


                    <TouchableRipple
                        onPress={() => {
                            navigation.navigate("MyDreamRep", {
                                state_AS_UserId: state_AS_UserId
                            })
                        }}
                        style={{
                            width: '48%',
                            justifyContent: 'center'
                        }}>
                        <Card
                            mode='outlined'
                            style={{
                                flex: 1,
                                // backgroundColor: 'red',

                            }}>
                            <Card.Content style={{
                                flex: 1,
                                // backgroundColor: 'green',
                                //paddingVertical: '20%',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="29.25" viewBox="0 0 36 29.25">
  <path id="Icon_awesome-list-ul" data-name="Icon awesome-list-ul" d="M3.375,3.375A3.375,3.375,0,1,0,6.75,6.75,3.375,3.375,0,0,0,3.375,3.375Zm0,11.25A3.375,3.375,0,1,0,6.75,18a3.375,3.375,0,0,0-3.375-3.375Zm0,11.25A3.375,3.375,0,1,0,6.75,29.25a3.375,3.375,0,0,0-3.375-3.375ZM34.875,27h-22.5a1.125,1.125,0,0,0-1.125,1.125v2.25A1.125,1.125,0,0,0,12.375,31.5h22.5A1.125,1.125,0,0,0,36,30.375v-2.25A1.125,1.125,0,0,0,34.875,27Zm0-22.5h-22.5A1.125,1.125,0,0,0,11.25,5.625v2.25A1.125,1.125,0,0,0,12.375,9h22.5A1.125,1.125,0,0,0,36,7.875V5.625A1.125,1.125,0,0,0,34.875,4.5Zm0,11.25h-22.5a1.125,1.125,0,0,0-1.125,1.125v2.25a1.125,1.125,0,0,0,1.125,1.125h22.5A1.125,1.125,0,0,0,36,19.125v-2.25A1.125,1.125,0,0,0,34.875,15.75Z" transform="translate(0 -3.375)" fill="#0093f5"/>
</svg>


`} />
                                <Paragraph style={[{
                                    marginTop: '15%',
                                    // textAlign: 'center',
                                    paddingVertical: "4%",
                                }
                                    , STYLES.fontSize22_000000_Roboto_Regular_35]}>{strings.Jouneral}</Paragraph>
                            </Card.Content>
                        </Card>
                    </TouchableRipple>
                </View>



                {/* view  Relaxing sound  card and setting card  */}
                <View style={{
                    flex: 0.25, //backgroundColor: 'blue',
                    marginTop: '10%',
                    flexDirection: 'row',
                    justifyContent: "space-between"
                }}>


                    {/* Relaxing Sound card */}
                    <TouchableRipple
                        onPress={() => {
                            navigation.navigate("RelaxingSoundFlatList")
                            //console.log('wwwwww')
                        }}
                        style={{
                            width: '48%',
                            justifyContent: 'center'
                        }}>
                        <Card
                            mode='outlined'
                            style={{
                                flex: 1
                                //  backgroundColor: 'red'
                            }}>
                            <Card.Content style={{
                                //backgroundColor: 'green',
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="42.2" height="42.201" viewBox="0 0 42.2 42.201">
  <path id="Icon_awesome-music" data-name="Icon awesome-music" d="M42.2,2.638A2.636,2.636,0,0,0,38.771.124L12.4,7.913a2.637,2.637,0,0,0-1.846,2.514V31.973a11.4,11.4,0,0,0-2.638-.323C3.543,31.65,0,34.012,0,36.925S3.543,42.2,7.913,42.2s7.913-2.361,7.913-5.275V17.664l21.1-6.183V26.7a11.4,11.4,0,0,0-2.638-.323c-4.37,0-7.913,2.361-7.913,5.275s3.543,5.275,7.913,5.275S42.2,34.564,42.2,31.65V2.638Z" transform="translate(0 0.001)" fill="#0093f5"/>
</svg>

`} />

                                <Paragraph style={[{
                                    marginTop: '15%',
                                    textAlign: 'center',
                                    paddingVertical: "4%",
                                }
                                    , STYLES.fontSize22_000000_Roboto_Regular_35]}>{strings.RelaxingSound}</Paragraph>
                            </Card.Content>
                        </Card>
                    </TouchableRipple>


                    {/* setting card */}
                    <TouchableRipple
                        onPress={() => {
                            navigation.navigate("Settings")
                            //console.log('wwwwww')
                        }}
                        style={{
                            width: '48%',
                            justifyContent: 'center'
                        }}>
                        <Card
                            mode='outlined'
                            style={{
                                flex: 1
                                //  backgroundColor: 'red'
                            }}>
                            <Card.Content style={{
                                //backgroundColor: 'green',
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Ionicons name="settings-sharp" size={40}
                                    color={COLORS.blue0093F5} />

                                <Paragraph style={[{
                                    marginTop: '15%',
                                    textAlign: 'center',
                                    paddingVertical: "4%",
                                }
                                    , STYLES.fontSize22_000000_Roboto_Regular_35]}>{strings.Setting}</Paragraph>
                            </Card.Content>
                        </Card>
                    </TouchableRipple>
                </View>
            </View>
        </View >
    );
};

AppName.propTypes = {

};

export default AppName;


const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
});