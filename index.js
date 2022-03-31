/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import ForgotPassword from './src/screens/ForgotPassword';
import ResetPassword from './src/screens/ResetPassword';
import SignIn from './src/screens/SignIn';
import StackNavigations from './StackNavigations';
import AppName from './src/screens/AppName'
import Dictionary from './src/screens/Dictionary';
import SearchDictionary from './src/screens/SearchDictionary';
import Alphabet from './src/screens/Alphabet';
import DreamByDates from './src/screens/DreamByDates';
import MyDreamRep from './src/screens/MyDreamRep';
import SearchDream from './src/screens/SearchDream';

import RelaxingSoundFlatList from './src/screens/RelaxingSoundFlatList';
import RelaxingSoundPlayer from './src/screens/RelaxingSoundPlayer';
import Reports from './src/screens/Reports';
import CreateJouneral from './src/screens/CreateJouneral';
import Settings from './src/screens/Settings';
import Quality from './src/screens/Quality';
import Splash from './src/screens/Splash';
import SignUp from './src/screens/SignUp';
import Calender from './src/screens/Calender';
import Sleep from './src/screens/Sleep';
import ComDictSearchDict from './src/screens/ComDictSearchDict';
import VerificationCode from './src/screens/VerificationCode';
import Darktheme from './Darktheme';
import ExpertDreamInterPretation from './src/screens/ExpertDreamInterPretation';
import Jouneral from './src/screens/Jouneral';

import React, { useState, useEffect } from 'react';
// on top of your index.js fil backgroundColor: 'red',e

import { Provider } from 'react-redux';

import configureStore from './redux/store/configureStore';
import CreateJouneral1 from './src/screens/CreateJouneral1';
import EditJournal from './src/screens/EditJournal';

const store = configureStore()

const RNRedux = () => (
    <Provider store={store}>
        <StackNavigations />
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);


