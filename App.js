import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SignUp from './src/screens/SignUp'
import { SvgXml } from 'react-native-svg';
import SignIn from './src/screens/SignIn';
import STYLES from './src/STYLES.js';
import { Text } from 'react-native-paper';
import COLORS from './src/assets/colors/Color';
import Svgs from './src/assets/svgs/Svgs';
import StackNavigations from './src/Navigations/StackNavigations';
// import SVGImg from './src/assets/svgs/newLogo.svg';
import strings from './src/lng/LocalizedString';
// import NewLogo from './src/assets/svgs/newLogo.svg';
const Tab = createMaterialTopTabNavigator();

const App = props => {

  return (
    <View style={{
      flex: 1, //backgroundColor: COLORS.whiteFFFFFF
    }}>

      <View style={{
        flex: 0.25, //backgroundColor: 'red',
        alignItems: 'center', justifyContent: 'center'
      }}>

        <Image source={require('./src/assets/images/newLogo1.png')} style={{ height: 100, width: 100 }} />

        {/* <Text style={[STYLES.fontSize12_1C1A1A_Roboto_Regular,
        {
          marginTop: '3%', //color: colors.text
        }]}>{strings.MY_LOGO_HERE}</Text> */}
      </View>
      <Tab.Navigator
        style={{
          flex: 0.75,// backgroundColor: COLORS.whiteFFFFFF
          //backgroundColor: 'green'
        }}
        screenOptions={{
          // tabBarContentContainerStyle: { marginTop: '40%' }
          // tabBarActiveTintColor: COLORS.blue0093F5
        }}
      >


        <Tab.Screen name="SignIn" component={SignIn}
          options={{
            //tabBarActiveTintColor: COLORS.blue0093F5,
            tabBarIcon: ({ focused }) => {
              if (focused)
                return (
                  <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="21.226" height="18.572" viewBox="0 0 21.226 18.572">
                <path id="Icon_open-account-login" data-name="Icon open-account-login" d="M7.96,0V2.653H18.572V15.919H7.96v2.653H21.226V0Zm2.653,5.306V7.96H0v2.653H10.613v2.653l5.306-3.98Z" fill="#0093f5"/>
              </svg>
              
    `} />
                )
              else
                return (
                  <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="21.226" height="18.572" viewBox="0 0 21.226 18.572">
                <path id="Icon_open-account-login" data-name="Icon open-account-login" d="M7.96,0V2.653H18.572V15.919H7.96v2.653H21.226V0Zm2.653,5.306V7.96H0v2.653H10.613v2.653l5.306-3.98Z" fill="#757575"/>
              </svg>
              
    `} />
                )
            },

            tabBarLabel: ({ focused }) => (
              focused ?
                <Text style={[STYLES.fontSize14_0093F5_Roboto_Bold//, { color: colors.text }
                ]}>{strings.SIGN_IN}</Text>
                : <Text style={[STYLES.fontSize14_000000_Roboto_Bold_54//, { color: colors.text }
                ]}>{strings.SIGN_IN}</Text>
            ),
          }}
        />
        <Tab.Screen name="SignUp" component={SignUp}
          options={{
            tabBarIcon: ({ focused, }) => {
              if (focused)
                return (
                  <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="24.095" height="18.572" viewBox="0 0 24.095 18.572">
                <path id="Icon_open-account-login" data-name="Icon open-account-login" d="M15.059,0V2.653H3.012v8.139c0,3.316-3.012,3.845,0,5.127s12.047,0,12.047,0v2.653H0V0ZM12.047,5.306V7.96H24.095v2.653H12.047v2.653L6.024,9.286Z" 
                
                fill="#0093F5"/>
              </svg>
              
              
    `} />
                )
              else return (
                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="24.095" height="18.572" viewBox="0 0 24.095 18.572">
                <path id="Icon_open-account-login" data-name="Icon open-account-login" d="M15.059,0V2.653H3.012v8.139c0,3.316-3.012,3.845,0,5.127s12.047,0,12.047,0v2.653H0V0ZM12.047,5.306V7.96H24.095v2.653H12.047v2.653L6.024,9.286Z" 
                
                fill="#757575"/>
              </svg>
              
              
    `} />
              )
            },
            tabBarLabel: ({ focused }) => (
              focused ?
                <Text style={[STYLES.fontSize14_0093F5_Roboto_Bold//, { color: colors.text }
                ]}>{strings.SIGN_UP}</Text>
                : <Text style={[STYLES.fontSize14_000000_Roboto_Bold_54//, { color: colors.text }
                ]} >{strings.SIGN_UP}</Text>
            ),
          }}
        />
        {/* <Tab.Screen name="StackNavigations" component={StackNavigations}
          /> */}
      </Tab.Navigator>


    </View >

  );
};

App.propTypes = {

};

export default App;