import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    View, ScrollView, Dimensions, Image, StyleSheet, TouchableOpacity
    , FlatList, Share
} from 'react-native'
import {
    Appbar, Card, Title, Paragraph, Button,
    Avatar, IconButton, List, TextInput, Searchbar,
    FAB, TouchableRipple, useTheme
} from 'react-native-paper';
import STYLES from '../STYLES';
import { SvgXml } from 'react-native-svg';
import Svgs from '../assets/svgs/Svgs';
import COLORS from '../assets/colors/Color';
import { Chip, Text } from 'react-native-paper';
import Button1 from '../Components/Button1';
import VideoPlayer from "react-native-video";
import AwesomeAlert from 'react-native-awesome-alerts';
import AntDesign from 'react-native-vector-icons/AntDesign'
import strings from '../lng/LocalizedString';
import { useSelector } from 'react-redux';

const RelaxingSoundPlayer = ({ route, navigation }) => {
    const { routeIdOfSound } = route.params;
    const [stateShowAlert, setStateShowAlert] = useState(true)
    const [stateDesc, setStateDesc] = useState()
    const [stateTitle, setStateTitle] = useState()
    const [stateImage, setStateImage] = useState()
    const [stateAudio, setStateAudio] = useState()
    const [statePause, setStatePause] = useState(true)
    const [stateAudioPlay, setStateAudioPlay] = useState(true)
    const [stateIndicator, setStateIndicator] = useState(true)
    const [statePaused, setStatePaused] = useState(strings.Paused)
    const [stateSoundFile, setStateSoundFile] = useState()

    const { colors } = useTheme();
    useEffect(() => {

        fetch('https://dream-app-mtechub.herokuapp.com/api/sound/getSingle/' + routeIdOfSound)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                if (json.success) {
                    console.log(json.singleSound)
                    setStateDesc(json.singleSound.desc)
                    setStateTitle(json.singleSound.title)
                    setStateImage(json.singleSound.soundFilePic)
                    setStateAudio(json.singleSound.soundFile)
                    setStateIndicator(false)
                    setStateShowAlert(false)

                }
            })
            .catch((error) => console.error(error))
    }, [])

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    stateAudio,
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

    const audio = () => {
        setStateIndicator(false)
        setStateAudioPlay(!stateAudioPlay)






    }

    // const reduxGetLanguage = useSelector(val => val.checkValue.language)//val my hmesha pura store ayga // val.reducer.initial value

    // if (reduxGetLanguage == 1) {
    //     strings.setLanguage("Sp")

    // }
    // if (reduxGetLanguage == 0) {
    //     strings.setLanguage("En")

    // }
    return (
        <ScrollView>
            <AwesomeAlert
                show={stateShowAlert}
                showProgress={true}

                closeOnTouchOutside={false}
            //  closeOnHardwareBackPress={false}
            />

            {stateShowAlert == true ?
                null
                :
                <View style={STYLES.withoutpaddingcontainer}>

                    <Appbar.Header style={{
                        // backgroundColor: COLORS.whiteFFFFFF,
                        backgroundColor: colors.background
                        //justifyContent: 'center',
                        //alignItems: 'center',

                    }}>

                        <Appbar.BackAction onPress={() => { navigation.goBack("RelaxingSoundFlatList") }} />
                        <Appbar.Content
                            style={{
                                alignItems: 'center'
                            }}
                            titleStyle={[STYLES.fontSize20_Roboto_Medium,
                                //{ alignSelf: 'center', }
                            ]}
                            title={strings.RelaxingSound} color={COLORS.blue0093F5} />


                    </Appbar.Header >
                    <View style={{
                        flex: 0.40, //backgroundColor: 'red',

                    }}>
                        <View style={{
                            flex: 0.5,// backgroundColor: 'green',
                            marginTop: '15%', alignItems: 'center'
                        }}>
                            <Image resizeMode='contain'
                                style={{
                                    flex: 1, width: '45%',
                                    // height: 148, width: 148,
                                    // backgroundColor: 'blue'
                                }}

                                source={{ uri: stateImage }} />
                        </View>
                        <View style={{
                            flex: 0.5, //backgroundColor: 'orange',
                            justifyContent: 'space-between'
                        }}>
                            <Text style={[STYLES.fontSize16_000000_Roboto_Regular,
                            { alignSelf: 'center', marginTop: '5%' }]}>{stateTitle} </Text>
                            <Text style={[STYLES.fontSize13_000000_Roboto_Regular_59,
                            {
                                alignSelf: 'center', width: '70%', textAlign: 'center',
                                marginBottom: '5%'
                            }]}
                                numberOfLines={2}
                            >{stateDesc} </Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 0.30, //backgroundColor: 'green',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {statePause == true ?
                            <>
                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89">
                             <path id="Icon_awesome-play-circle" data-name="Icon awesome-play-circle" d="M45.063.563a44.5,44.5,0,1,0,44.5,44.5A44.492,44.492,0,0,0,45.063.563ZM65.823,49.369,34.243,67.492a4.314,4.314,0,0,1-6.406-3.768V26.4a4.317,4.317,0,0,1,6.406-3.768l31.581,19.2A4.32,4.32,0,0,1,65.823,49.369Z" transform="translate(-0.563 -0.563)" fill="#0093f5"/>
                           </svg>
                           `} onPress={() => {
                                        audio()
                                        setStatePause(false)
                                        setStatePaused(strings.Playing)
                                    }} />
                                <Text>{statePaused}  </Text>
                            </> :
                            <>
                                <AntDesign name="pausecircle" size={90} color={COLORS.blue0093F5}
                                    onPress={() => {
                                        audio()
                                        setStatePause(true)
                                        setStatePaused(strings.Paused)
                                    }} />
                                <Text>{statePaused}  </Text>
                            </>}




                    </View>
                    <View style={{
                        flex: 0.30, //backgroundColor: 'red',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}>
                        <TouchableRipple onPress={() => {
                            //console.log('ffffffffffff')
                            onShare()
                        }}>
                            <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="51.526" height="58.887" viewBox="0 0 51.526 58.887">
  <path id="Icon_awesome-share-alt" data-name="Icon awesome-share-alt" d="M40.485,36.8a10.994,10.994,0,0,0-6.877,2.4L21.821,31.841a11.1,11.1,0,0,0,0-4.794l11.787-7.367a11.021,11.021,0,1,0-3.9-6.241L17.918,20.805a11.041,11.041,0,1,0,0,17.276l11.787,7.367A11.042,11.042,0,1,0,40.485,36.8Z" fill="#0093f5"/>
</svg>
`} /></TouchableRipple>
                        <Text style={[STYLES.fontSize16_000000_Roboto_Regular,
                        { marginBottom: '5%', marginTop: '3%' }]}>{strings.Share_with_Friends}</Text>
                    </View>


                    <VideoPlayer
                        source={{ uri: stateAudio }}
                        audioOnly={true}
                        //muted={stateAudioPlay}
                        paused={stateAudioPlay}
                        repeat={true}
                    />
                </View>}

        </ScrollView>
    );
};

RelaxingSoundPlayer.propTypes = {

};

export default RelaxingSoundPlayer;