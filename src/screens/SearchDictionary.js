import { StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Dimensions, Image } from 'react-native'
import {
    Appbar, Card, Title, Paragraph, Button,
    Avatar, IconButton, List, Searchbar
} from 'react-native-paper';
import STYLES from '../STYLES';
import { SvgXml } from 'react-native-svg';
import Svgs from '../assets/svgs/Svgs';
import COLORS from '../assets/colors/Color';
import { Chip, Text, useTheme } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import AwesomeAlert from 'react-native-awesome-alerts';
import strings from '../lng/LocalizedString';
const SearchDictionary = ({ route, navigation }) => {
    const { routeStateListAlphabet } = route.params;
    // console.log('search dictionary')
    const { colors } = useTheme()

    const [stateDicHeader, setStateDicHeader] = useState({ bool: true, value: "first" })
    //console.log(stateDicHeader.value)
    const [stateListAlphabet, setStateListAlphabet] = useState([
        // { id: 1, data: 'Alphabet A' },
        // { id: 2, data: 'Alphabet A' },
        // { id: 3, data: 'Alphabet A' },
        // { id: 4, data: 'Alphabet A' },
        // { id: 5, data: 'Alphabet A' },
        // { id: 6, data: 'Alphabet A' },
        // { id: 7, data: 'Alphabet A' },
        // { id: 8, data: 'Alphabet A' },
        // { id: 9, data: 'Alphabet A' },
        // { id: 10, data: 'Alphabet A' },
        // { id: 11, data: 'Alphabet A' },
        // { id: 12, data: 'Alphabet A' },
        // { id: 13, data: 'Alphabet A' },
        // { id: 14, data: 'Alphabet A' },
        // { id: 15, data: 'Alphabet A' },
        // { id: 16, data: 'Alphabet A' },
        // { id: 17, data: 'Alphabet A' },
    ])


    const [stateActiveId, setStateActiveId] = useState();

    const [stateSearchText, setStateSearchText] = useState("");
    const [stateShowAlert, setStateShowAlert] = useState(true)

    const [stateFilteredData, setStateFilteredData] = useState([]);
    const searchInput = useRef();




    const search = (searchText) => {
        // console.log(searchText)
        // if (searchText.length == 0) {
        //     setStateFilteredData(undefined);
        // }
        // console.log(searchText)
        setStateSearchText(searchText);

        let filteredData = routeStateListAlphabet.filter(function (item) {
            // var trimRecord = item.title.trim();
            // console.log(trimRecord)
            //  console.log(item)
            var searchTextLowerCase = searchText.toLowerCase();
            var itemTitleLowerCase = item.title.toLowerCase();
            //     var a = item.title.includes(searchText);----------real code
            // var c = b.includes(searchText);
            var a = itemTitleLowerCase.includes(searchTextLowerCase);
            //console.log(a)
            return a
        });
        // console.log(filteredData.length)
        // console.log(stateFilteredData)
        setStateDicHeader({ ...stateDicHeader, value: "second" })
        setStateFilteredData(filteredData);
        // console.log(stateDicHeader.value)


    };
    return (
        <View style={STYLES.withoutpaddingcontainer}>
            <Appbar.Header style={{
                // paddingVertical: '5%',
                // backgroundColor: COLORS.whiteFFFFFF,
                paddingRight: '3%',
                backgroundColor: colors.background
                //backgroundColor: 'red',
                //paddingVertical: '10%'

            }}>
                <Appbar.BackAction onPress={() => {
                    // setStateDicHeader({ ...stateDicHeader, bool: true })
                    // setStateFilteredData([])
                    navigation.goBack()
                }} />

                <Searchbar //clearIcon={}
                    inputStyle={STYLES.fontSize16_707070_Roboto_Regular}
                    ref={searchInput}
                    style={{
                        // borderRadius: 25,
                        backgroundColor: colors.background,//COLORS.whiteFFFFFF,
                        flex: 0.93,
                        borderWidth: 0,
                        //  borderColor: COLORS.black000000_30,
                        marginVertical: "10%",
                        // backgroundColor: "red"
                    }}
                    placeholder="Search..."
                    // iconColor={COLORS.blue0093F5}
                    onChangeText={(text) => search(text)}

                />
                <Entypo name="cross" size={20} color={COLORS.blue0093F5}
                    onPress={() => {
                        setStateDicHeader({ ...stateDicHeader, value: "first" })
                        searchInput.current.clear()
                        setStateFilteredData([])

                    }
                    }
                />

            </Appbar.Header >


            <View style={STYLES.container}>

                <FlatList style={{ marginTop: '5%' }}
                    showsVerticalScrollIndicator={false}
                    //   data={stateListAlphabet}
                    data={
                        stateFilteredData.length == 0 && stateDicHeader.value === "first"
                            ? routeStateListAlphabet : stateFilteredData

                    }
                    // a === true ? a : b === true ? b : c
                    // data={stateDicHeader == false}

                    //
                    renderItem={({ item }) => {
                        //console.log(item._id)
                        return (
                            <View>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate("Alphabet",
                                            {
                                                routeItemId: item._id,
                                                routeItemTitle: item.title

                                            })
                                    }}
                                    style={{
                                        height: 50, //backgroundColor: 'red',
                                        // justifyContent: 'center',
                                        borderWidth: 1,
                                        borderColor: '#707070',
                                        marginBottom: '2%'
                                    }}>
                                    <List.Item title={item.title}
                                        style={{

                                            paddingLeft: '0%'
                                        }}
                                        titleStyle={STYLES.fontSize16_000000_Roboto_Regular}
                                    ></List.Item>


                                </TouchableOpacity>
                            </View>

                        )
                    }}
                    keyExtractor={item => item._id}
                />
            </View>
        </View>

    );
};

SearchDictionary.propTypes = {

};

export default SearchDictionary;