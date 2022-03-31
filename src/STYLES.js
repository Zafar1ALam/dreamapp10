import React from 'react';
import PropTypes from 'prop-types';
import COLORS from './assets/colors/Color';
import { StyleSheet, Dimensions } from "react-native";
import {
    useTheme as NavigationUseTheme, useTheme

} from '@react-navigation/native';
// import {
//     useTheme as PaperUseTheme
// } from 'react-native-paper';




const STYLES = StyleSheet.create({


    container: {
        flex: 1,

        width: Dimensions.get('window').width
        ,

        height: Dimensions.get('window').height,
        paddingHorizontal: '8%',
        //  height: '100%',
        //  backgroundColor: whiteBackgroundColor
    },
    withoutpaddingcontainer: {
        flex: 1, width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        // backgroundColor: whiteBackgroundColor
        //  height: '100%',
        //backgroundColor: 'yellow'
    },
    fontSize44_0093F5_Roboto_Regular: {
        fontSize: 44,
        fontFamily: 'Roboto-Regular',
        //color: '#1C1A1A'
        // color: COLORS.blue0093F5
    },
    fontSize35_000000_Roboto_Regular_38: {
        fontSize: 35,
        fontFamily: 'Roboto-Regular',
        //color: '#1C1A1A'
        //color: COLORS.black000000_38
    },//
    fontSize30_000000_Roboto_Regular_38: {
        fontSize: 30,
        fontFamily: 'Roboto-Regular',
        //color: '#1C1A1A'
        // color: COLORS.black000000_38
    },//
    fontSize35_000000_Roboto_Regular: {
        fontSize: 35,
        fontFamily: 'Roboto-Regular',
        //color: '#1C1A1A'
        //  color: COLORS.black000000
    },//
    fontSize30_000000_Roboto_Regular: {
        fontSize: 30,
        fontFamily: 'Roboto-Regular',
        //color: '#1C1A1A'
        //color: COLORS.black000000
    },//
    fontSize25_000000_Roboto_Regular: {
        fontSize: 25,
        fontFamily: 'Roboto-Regular',
        //color: '#1C1A1A'
        //color: COLORS.black000000
    },//
    fontSize22_000000_Roboto_Regular_35: {
        fontSize: 22,
        fontFamily: 'Roboto-Regular',
        //  color: COLORS.black000000_35
    },
    fontSize21_1C1A1A_Roboto_Regular: {
        fontSize: 21,
        fontFamily: 'Roboto-Regular',
        //color: '#1C1A1A'
        //color: COLORS.black1C1A1A
    },

    fontSize20_000000_Roboto_Regular: {
        fontSize: 20,
        fontFamily: 'Roboto-Regular',
        //color: '#1C1A1A'
        //color: COLORS.black000000
    },//
    fontSize20_FFFFFF_Roboto_Regular: {
        fontSize: 20,
        fontFamily: 'Roboto-Regular',
        //color: COLORS.black000000
    },
    fontSize20_Roboto_Medium: {
        fontFamily: 'Roboto-Medium',
        fontSize: 20
        //color Appheader ka apna prop h
    },
    fontSize20_00935_Robo1to_Medium: {
        fontFamily: 'Roboto-Medium',
        fontSize: 20,
        // color: COLORS.blue0093F5

        //color Appheader ka apna prop h
    },
    fontSize18_black000000_59_Roboto_Regular: {
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
        //color: COLORS.black000000_59
    },//
    fontSize17_000000_Roboto_Regular: {
        fontSize: 17,
        fontFamily: 'Roboto-Regular',
        //color: COLORS.black000000
    },
    fontSize16_707070_Roboto_Regular: {
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
        //color: COLORS.grey707070
    },
    fontSize16_000000_Roboto_Regular: {
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
        //color: COLORS.black000000
    },
    fontSize15_0093F5_Roboto_Medium: {

        fontFamily: 'Roboto-Medium',
        fontSize: 15,
        // color: COLORS.blue0093F5


    },
    fontSize15_FFFFFF_Roboto_Medium: {

        fontFamily: 'Roboto-Medium',
        fontSize: 15,
        ///color: COLORS.whiteFFFFFF


    },
    fontSize15_1C1A1A_Roboto_Regular: {
        fontSize: 15,
        fontFamily: 'Roboto-Regular',
        //color: COLORS.black1C1A1A
    },
    fontSize14_0093F5_Roboto_Bold: {
        fontSize: 14,
        fontFamily: 'Roboto-Bold',
        // color: COLORS.blue0093F5
    },
    fontSize14_000000_Roboto_Bold_54: {
        fontSize: 14,
        fontFamily: 'Roboto-Bold',
        // color: COLORS.black000000_54//'rgba(29,29,29,0.26)',
    },
    fontSize13_1C1A1A_Roboto_Regular: {
        fontSize: 13,
        fontFamily: 'Roboto-Regular',
        //  color: COLORS.black1C1A1A
    },
    fontSize13_000000_Roboto_Regular_59: {
        fontSize: 13,
        fontFamily: 'Roboto-Regular',
        //  color: COLORS.black000000_59
    },
    fontSize12_1C1A1A_Roboto_Regular: {
        fontSize: 12,
        fontFamily: 'Roboto-Regular',
        //color: COLORS.black1C1A1A
    },
    fontSize9_Roboto_Medium: {

        fontFamily: 'Roboto-Medium',
        fontSize: 9,
        // color: COLORS.whiteFFFFFF

    },


});

export default STYLES;