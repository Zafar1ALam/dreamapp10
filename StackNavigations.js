
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    NavigationContainer, DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme

} from '@react-navigation/native';
import {
    Provider as PaperProvider, DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme
} from 'react-native-paper';
import { ActivityIndicator, StyleSheet, Text, View, useColorScheme } from "react-native";
import App from './App'
import ForgotPassword from './src/screens/ForgotPassword';
import ResetPassword from './src/screens/ResetPassword';
import AppName from './src/screens/AppName'
import MyDreamRep from './src/screens/MyDreamRep';
import RelaxingSoundFlatList from './src/screens/RelaxingSoundFlatList';
import Dictionary from './src/screens/Dictionary';
import Alphabet from './src/screens/Alphabet';
import SearchDream from './src/screens/SearchDream';
import SearchDictionary from './src/screens/SearchDictionary';
import CreateJouneral from './src/screens/CreateJouneral';
import DreamByDates from './src/screens/DreamByDates';
import Reports from './src/screens/Reports';
import Settings from './src/screens/Settings';
import RelaxingSoundPlayer from './src/screens/RelaxingSoundPlayer';
import Splash from './src/screens/Splash';
import ComDictSearchDict from './src/screens/ComDictSearchDict';
import VerificationCode from './src/screens/VerificationCode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import COLORS from './src/assets/colors/Color';
import { AppearanceProvider, } from "react-native-appearance"
import ExpertDreamInterPretation from './src/screens/ExpertDreamInterPretation';
import Jouneral from './src/screens/Jouneral';
import { useSelector } from 'react-redux';
import EditJournal from './src/screens/EditJournal';

const Stack = createNativeStackNavigator();
const StackNavigations = props => {

    const reduxValue = useSelector(val => val.checkValue.check)
    const [stateIsActiveActivityIndicator, setStateActivityIndicator] = useState(true)
    const [state_AS_UserId, setState_AS_UserId] = useState('a');
    const [stateDarkMode, setStateDarkMode] = useState("whiteMode")
    // useEffect(() => {
    //     getMyObject()

    // }, [])
    // const getMyObject = async () => {
    //     try {
    //         const jsonValue = await AsyncStorage.getItem('userId')
    //         if (jsonValue != null) {
    //             return (


    //                 setState_AS_UserId(jsonValue),
    //                 setStateActivityIndicator(false),
    //                 console.log(jsonValue)







    //             )
    //         }
    //         else {
    //             return (

    //                 console.log(jsonValue),
    //                 setStateActivityIndicator(false),
    //                 setState_AS_UserId('a')
    //             )
    //         }
    //     } catch (e) {
    //         alert(e)
    //     }
    // }



    const CustomDefaultTheme = {

        ...NavigationDefaultTheme,
        ...PaperDefaultTheme,
        colors: {
            ...NavigationDefaultTheme.colors,
            ...PaperDefaultTheme.colors,
            background: COLORS.whiteFFFFFF,
            text: COLORS.black000000_54,
            border: '#707070'//COLORS.grey707070 //COLORS.grey707070_52
        },
    };


    const CustomDarkTheme = {

        ...NavigationDarkTheme,
        ...PaperDarkTheme,
        colors: {
            ...NavigationDarkTheme.colors,
            ...PaperDarkTheme.colors,
            background: COLORS.black000000,
            text: COLORS.whiteFFFFFF,
            //border: COLORS.black000000_20,
            boder: '#707070',// COLORS.grey707070,
            surface: COLORS.black000000,
            placeholder: COLORS.whiteFFFFFF,
            // onSurface: COLORS.black000000,
            backdrop: COLORS.black000000
        },
    };


    return (
        // <AppearanceProvider>
        <PaperProvider //theme={CustomDefaultTheme}


            theme={reduxValue == 0 ? CustomDefaultTheme : CustomDarkTheme}// != "whiteMode" ? CustomDarkTheme : CustomDefaultTheme}
        >

            <View
                style={{
                    flex: 1, backgroundColor: COLORS.whiteFFFFFF,
                    justifyContent: 'center'
                }}
            >
                {/* {stateIsActiveActivityIndicator == true ?
                    <ActivityIndicator animating={true} /> : */}





                <NavigationContainer
                    theme={reduxValue == 0 ? CustomDefaultTheme : CustomDarkTheme}

                >
                    <Stack.Navigator initialRouteName={//state_AS_UserId != 'a' ? "AppName" :
                        "Splash"}
                    >
                        <Stack.Screen name="Splash" component={Splash} options={{
                            headerShown: false,
                        }} />
                        <Stack.Screen name="EditJournal" component={EditJournal} options={{
                            headerShown: false,
                        }} />
                        <Stack.Screen name="App" component={App} options={{
                            headerShown: false,
                        }} />
                        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{
                            headerShown: false,
                        }} />
                        <Stack.Screen name="VerificationCode" component={VerificationCode} options={{
                            headerShown: false,
                        }} />
                        <Stack.Screen name="ResetPassword" component={ResetPassword} options={{
                            headerShown: false,
                        }} />

                        <Stack.Screen name="AppName" component={AppName} options={{
                            headerShown: false,
                        }} />
                        <Stack.Screen name="MyDreamRep" component={MyDreamRep} options={{
                            headerShown: false,
                        }} />
                        <Stack.Screen name="RelaxingSoundFlatList" component={RelaxingSoundFlatList} options={{
                            headerShown: false,
                        }} />

                        <Stack.Screen name="Alphabet" component={Alphabet} options={{
                            headerShown: false,
                        }} />

                        {/* <Stack.Screen name="ComDictSearchDict" component={ComDictSearchDict} options={{
                            headerShown: false,
                        }} /> */}
                        <Stack.Screen name="CreateJouneral" component={CreateJouneral} options={{
                            headerShown: false,
                        }} />
                        <Stack.Screen name="Jouneral" component={Jouneral} options={{
                            headerShown: false,
                        }} />
                        <Stack.Screen name="DreamByDates" component={DreamByDates} options={{
                            headerShown: false,
                        }} />
                        <Stack.Screen name="SearchDream" component={SearchDream} options={{
                            headerShown: false,
                        }} />
                        <Stack.Screen name="Reports" component={Reports} options={{
                            headerShown: false,
                        }} />

                        <Stack.Screen name="RelaxingSoundPlayer" component={RelaxingSoundPlayer} options={{
                            headerShown: false,
                        }} />
                        <Stack.Screen name="Settings" component={Settings} options={{
                            headerShown: false,
                        }} />
                        <Stack.Screen name="ExpertDreamInterPretation" component={ExpertDreamInterPretation} options={{
                            headerShown: false,
                        }} />
                        <Stack.Screen name="Dictionary" component={Dictionary} options={{
                            headerShown: false,
                        }} />
                        <Stack.Screen name="SearchDictionary" component={SearchDictionary} options={{
                            headerShown: false,
                        }} />
                    </Stack.Navigator>
                </NavigationContainer>
                {/* } */}


            </View>
        </PaperProvider >
    );
};



export default StackNavigations;
