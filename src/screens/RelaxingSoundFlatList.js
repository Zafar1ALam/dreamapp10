import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    View, ScrollView, Dimensions, Image, StyleSheet, TouchableOpacity
    , FlatList
} from 'react-native'
import {
    Appbar, Card, Title, Paragraph, Button,
    Avatar, IconButton, List, TextInput, Searchbar,
    FAB, useTheme
} from 'react-native-paper';
import STYLES from '../STYLES';
import { SvgXml } from 'react-native-svg';
import Svgs from '../assets/svgs/Svgs';
import COLORS from '../assets/colors/Color';
import { Chip, Text } from 'react-native-paper';
import Button1 from '../Components/Button1';
import { NavigationContainer } from '@react-navigation/native';
import AwesomeAlert from 'react-native-awesome-alerts';
import strings from '../lng/LocalizedString';
import { useSelector } from 'react-redux';
const RelaxingSoundFlatList = ({ navigation }) => {
    const { colors } = useTheme()

    useEffect(() => {
        fetch('https://dream-app-mtechub.herokuapp.com/api/sound/getAll')
            .then((response) => response.json())
            .then((json) => {
                console.log(json.allSounds)

                setStateListAlphabet(json.allSounds)
            })
            .catch((error) => console.error(error))
    }, [])
    const [stateListAlphabet, setStateListAlphabet] = useState([

        // {
        //     id: 1,

        //     title: 'Title here', data: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et'
        // },

    ]);
    // const reduxGetLanguage = useSelector(val => val.checkValue.language)//val my hmesha pura store ayga // val.reducer.initial value

    // if (reduxGetLanguage == 1) {
    //     strings.setLanguage("Sp")

    // }
    // if (reduxGetLanguage == 0) {
    //     strings.setLanguage("En")

    // }
    return (
        <View style={STYLES.withoutpaddingcontainer}>
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
                    titleStyle={[STYLES.fontSize20_Roboto_Medium,
                        //{ alignSelf: 'center', }
                    ]}
                    title={strings.RelaxingSound} color={COLORS.blue0093F5} />


            </Appbar.Header >

            <View style={STYLES.container}>



                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{ marginTop: '5%' }}
                    data={stateListAlphabet}
                    renderItem={({ item }) => {
                        // console.log(item._id)
                        return (

                            <Card onPress={() => {
                                navigation.navigate('RelaxingSoundPlayer', {
                                    routeIdOfSound: item._id
                                })
                            }}
                                style={{
                                    // height: 110,
                                    marginBottom: '4%',
                                    borderRadius: 6,
                                    borderWidth: 1,
                                    //  borderColor: COLORS.black000000_20
                                }}>

                                <View style={{
                                    flexDirection: 'row',
                                    paddingHorizontal: '5%',
                                    paddingVertical: '5%',

                                }}>
                                    <View style={{
                                        width: '70%', justifyContent: 'space-around',
                                        // backgroundColor: 'red'
                                    }}>
                                        <Text style={STYLES.fontSize16_000000_Roboto_Regular}>{item.title}</Text>
                                        <Text numberOfLines={2}
                                            style={STYLES.fontSize13_000000_Roboto_Regular_59}>{item.desc}</Text>
                                    </View>
                                    <View >
                                        <Image style={{
                                            height: 80, width: 80
                                        }}
                                            resizeMode='cover'
                                            //    source={require('../assets/images/humanbeing.png')}
                                            source={{ uri: item.soundFilePic }}
                                        />
                                    </View>
                                </View>
                            </Card>
                        )
                    }}
                    keyExtractor={item => item._id}
                />


            </View>

        </View >
    );
};



export default RelaxingSoundFlatList;


const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        backgroundColor: COLORS.blue0093F5,
        bottom: 0,
    },
})
