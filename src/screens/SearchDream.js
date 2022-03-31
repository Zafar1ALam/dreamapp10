
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    View, ScrollView, Dimensions, Image, StyleSheet, TouchableOpacity
    , FlatList
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
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
import SignUp from './SignUp'

import SignIn from './SignIn';
import Calender from './Calender';
import Quality from './Quality';
import Sleep from './Sleep';
import strings from '../lng/LocalizedString'





const Tab = createMaterialTopTabNavigator();

const SearchDream = ({ route, navigation }) => {
    const { state_AS_UserId } = route.params;
    console.log(state_AS_UserId)
    // const
    // useEffect(() => {
    //     getMyObject()
    // })

    // const [state_AS_UserId, setState_AS_UserId] = useState();

    // const getMyObject = async () => {
    //     try {
    //         const jsonValue = await AsyncStorage.getItem('userId')
    //         return jsonValue != null ?

    //             setState_AS_UserId(jsonValue)
    //             : null
    //     } catch (e) {
    //         alert(e)
    //     }
    // }
    const { colors } = useTheme()

    return (
        <View style={STYLES.withoutpaddingcontainer}>
            <Appbar.Header style={{
                backgroundColor: colors.background,
                //justifyContent: 'center',
                //alignItems: 'center',

            }}>

                <Appbar.BackAction onPress={() => {
                    navigation.navigate("MyDreamRep"), {
                        state_AS_UserId: state_AS_UserId
                    }
                }} />
                <Appbar.Content
                    style={{

                        alignItems: 'center'
                    }}
                    titleStyle={[STYLES.fontSize20_Roboto_Medium,
                        //{ alignSelf: 'center', }
                    ]}
                    title={strings.Search_Dream} color={COLORS.blue0093F5} />


            </Appbar.Header >

            {/* <NavigationContainer> */}
            <Tab.Navigator >


                <Tab.Screen name="Calender" component={Calender}
                    initialParams={{ state_AS_UserId: state_AS_UserId }}
                    options={{
                        tabBarLabel:
                            ({ focused }) => (
                                focused ?
                                    <Text style={STYLES.fontSize14_0093F5_Roboto_Bold}>{strings.CALENDER}</Text>
                                    : <Text style={STYLES.fontSize14_000000_Roboto_Bold_54}>{strings.CALENDER}</Text>
                            )
                    }}
                />
                <Tab.Screen name="Quality" component={Quality}
                    initialParams={{ state_AS_UserId: state_AS_UserId }}
                    options={{
                        tabBarLabel:
                            ({ focused }) => (
                                focused ?
                                    <Text style={STYLES.fontSize14_0093F5_Roboto_Bold}>{strings.QUALITY}</Text>
                                    : <Text style={STYLES.fontSize14_000000_Roboto_Bold_54}>{strings.QUALITY}</Text>
                            )
                    }}
                />
                <Tab.Screen name="Sleep" component={Sleep}
                    initialParams={{ state_AS_UserId: state_AS_UserId }}
                    options={{
                        tabBarLabel:
                            ({ focused }) => (
                                focused ?
                                    <Text style={STYLES.fontSize14_0093F5_Roboto_Bold}>{strings.SLEEP}</Text>
                                    : <Text style={STYLES.fontSize14_000000_Roboto_Bold_54}>{strings.SLEEP}</Text>
                            )
                    }}
                />

            </Tab.Navigator>
            {/* </NavigationContainer> */}

            <Appbar.Header style={{
                backgroundColor: colors.background,
                justifyContent: 'space-between',
                paddingHorizontal: '5%'
            }}>

                <Appbar.Action icon={() =>
                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="21.179" height="17.208" viewBox="0 0 21.179 17.208">
                    <path id="Icon_awesome-list" data-name="Icon awesome-list" d="M3.309,16.612H.662A.662.662,0,0,0,0,17.273v2.647a.662.662,0,0,0,.662.662H3.309a.662.662,0,0,0,.662-.662V17.273A.662.662,0,0,0,3.309,16.612Zm0-13.237H.662A.662.662,0,0,0,0,4.037V6.684a.662.662,0,0,0,.662.662H3.309a.662.662,0,0,0,.662-.662V4.037A.662.662,0,0,0,3.309,3.375Zm0,6.618H.662A.662.662,0,0,0,0,10.655V13.3a.662.662,0,0,0,.662.662H3.309a.662.662,0,0,0,.662-.662V10.655A.662.662,0,0,0,3.309,9.993Zm17.208,7.28H7.28a.662.662,0,0,0-.662.662v1.324a.662.662,0,0,0,.662.662H20.517a.662.662,0,0,0,.662-.662V17.935A.662.662,0,0,0,20.517,17.273Zm0-13.237H7.28a.662.662,0,0,0-.662.662V6.022a.662.662,0,0,0,.662.662H20.517a.662.662,0,0,0,.662-.662V4.7A.662.662,0,0,0,20.517,4.037Zm0,6.618H7.28a.662.662,0,0,0-.662.662v1.324a.662.662,0,0,0,.662.662H20.517a.662.662,0,0,0,.662-.662V11.317A.662.662,0,0,0,20.517,10.655Z" transform="translate(0 -3.375)" fill="#7f7f7f"/>
                  </svg>
                  
              `} />}



                    color={COLORS.blue0093F5}
                    onPress={() => navigation.navigate("MyDreamRep", { state_AS_UserId: state_AS_UserId })}
                />
                <Appbar.Action icon="magnify" color={COLORS.blue0093F5} />
                <Appbar.Action icon={() =>
                    <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="19.808" height="14.856" viewBox="0 0 19.808 14.856">
                    <path id="Icon_awesome-chart-bar" data-name="Icon awesome-chart-bar" d="M12.875,14.4h1.486a.533.533,0,0,0,.5-.5v-5.2a.533.533,0,0,0-.5-.5H12.875a.533.533,0,0,0-.5.5v5.2A.533.533,0,0,0,12.875,14.4Zm3.714,0h1.486a.533.533,0,0,0,.5-.5V5a.533.533,0,0,0-.5-.5H16.59a.533.533,0,0,0-.5.5v8.914a.533.533,0,0,0,.5.5Zm-11.142,0H6.933a.533.533,0,0,0,.5-.5V11.185a.533.533,0,0,0-.5-.5H5.447a.533.533,0,0,0-.5.5v2.724a.533.533,0,0,0,.5.5Zm3.714,0h1.486a.533.533,0,0,0,.5-.5V6.233a.533.533,0,0,0-.5-.5H9.161a.533.533,0,0,0-.5.5v7.676A.533.533,0,0,0,9.161,14.4ZM19.189,16.88H2.476V5.119A.619.619,0,0,0,1.857,4.5H.619A.619.619,0,0,0,0,5.119v13a1.238,1.238,0,0,0,1.238,1.238H19.189a.619.619,0,0,0,.619-.619V17.5A.619.619,0,0,0,19.189,16.88Z" transform="translate(0 -4.5)" fill="#7f7f7f"/>
                  </svg>
                  
              `} />} onPress={() => navigation.navigate("Reports")} />
            </Appbar.Header>
        </View >
    );
};



export default SearchDream;


const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        backgroundColor: COLORS.blue0093F5,
        bottom: 0,
    },
})
