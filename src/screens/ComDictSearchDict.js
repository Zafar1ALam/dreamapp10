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
import { Chip, Text } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import AwesomeAlert from 'react-native-awesome-alerts';
const ComDictSearchDict = ({ navigation }) => {

    //     useEffect(() => {

    //         console.log('a')
    //         fetch('https://dream-app-mtechub.herokuapp.com/api/mainCate/getAll')
    //             .then((response) => response.json())
    //             .then((json) => {
    //                 console.log(json.allMainCategies),
    //                     setStateabc(json.allMainCategies)
    //                 setStateActiveId(json.allMainCategies[0]._id)



    //                 fetch('https://dream-app-mtechub.herokuapp.com/api/mainCate/getSingle/' + json.allMainCategies[0]._id)
    //                     .then((response) => response.json())
    //                     .then((json) => {
    //                         console.log(json)
    //                         console.log(json.singleMainCate[0].SubCate)
    //                         setStateListAlphabet(json.singleMainCate[0].SubCate)
    //                         setStateShowAlert(false)
    //                     })
    //                     .catch((error) => console.error(error))
    //                 console.log(json.allMainCategies[0]._id)
    //             })
    //             .catch((error) => console.error(error))



    //     }, [])

    //     const [stateabc, setStateabc] = useState([
    //         // { id: 1, data: 'A', bgColor: 'blue' },
    //         // { id: 2, data: 'B', bgColor: 'white' },
    //         // { id: 3, data: 'C', bgColor: 'white' },
    //         // { id: 4, data: 'D', bgColor: 'white' },
    //         // { id: 5, data: 'E', bgColor: 'white' },
    //         // { id: 6, data: 'F', bgColor: 'white' },
    //         // { id: 7, data: 'G', bgColor: 'white' },
    //         // { id: 8, data: 'H', bgColor: 'white' },
    //         // { id: 9, data: 'I', bgColor: 'white' },
    //         // { id: 10, data: 'J', bgColor: 'white' },
    //         // { id: 11, data: 'K', bgColor: 'white' },
    //         // { id: 12, data: 'L', bgColor: 'white' },
    //     ])
    //     const [stateDicHeader, setStateDicHeader] = useState({ bool: true, value: "first" })
    //     const [stateListAlphabet, setStateListAlphabet] = useState([
    //         // { id: 1, data: 'Alphabet A' },
    //         // { id: 2, data: 'Alphabet A' },
    //         // { id: 3, data: 'Alphabet A' },
    //         // { id: 4, data: 'Alphabet A' },
    //         // { id: 5, data: 'Alphabet A' },
    //         // { id: 6, data: 'Alphabet A' },
    //         // { id: 7, data: 'Alphabet A' },
    //         // { id: 8, data: 'Alphabet A' },
    //         // { id: 9, data: 'Alphabet A' },
    //         // { id: 10, data: 'Alphabet A' },
    //         // { id: 11, data: 'Alphabet A' },
    //         // { id: 12, data: 'Alphabet A' },
    //         // { id: 13, data: 'Alphabet A' },
    //         // { id: 14, data: 'Alphabet A' },
    //         // { id: 15, data: 'Alphabet A' },
    //         // { id: 16, data: 'Alphabet A' },
    //         // { id: 17, data: 'Alphabet A' },
    //     ])


    //     const [stateActiveId, setStateActiveId] = useState();

    //     const [stateSearchText, setStateSearchText] = useState("");
    //     const [stateShowAlert, setStateShowAlert] = useState(true)

    //     const [stateFilteredData, setStateFilteredData] = useState([]);
    //     const searchInput = useRef();


    //     const search = (searchText) => {
    //         console.log(searchText)
    //         setStateSearchText(searchText);

    //         let filteredData = stateListAlphabet.filter(function (item) {
    //             var a = item.title.includes(searchText);

    //             return a
    //         });
    //         console.log(filteredData)
    //         setStateDicHeader({ ...stateDicHeader, value: "second" })
    //         setStateFilteredData(filteredData);
    //     };

    //     const dictionaryGetOnId = (id) => {
    //         setStateActiveId(id)
    //         fetch('https://dream-app-mtechub.herokuapp.com/api/mainCate/getSingle/' + id)
    //             .then((response) => response.json())
    //             .then((json) => {
    //                 console.log(json)
    //                 // console.log(json.singleMainCate[0].SubCate)
    //                 setStateListAlphabet(json.singleMainCate[0].SubCate)
    //             })
    //             .catch((error) => console.error(error))
    //     }



    //     const dictionaryHeader = useMemo(() => {
    //         return (
    //             <Appbar.Header style={{
    //                 backgroundColor: COLORS.whiteFFFFFF,

    //             }}>


    //                 <Appbar.Content

    //                     titleStyle={[STYLES.fontSize20_Roboto_Medium,
    //                     { alignSelf: 'center' }
    //                     ]}
    //                     title="Dictionary" color={COLORS.blue0093F5} />
    //                 <Appbar.Action
    //                     icon={() => <Ionicons name="ios-search-sharp" size={20}
    //                         color={COLORS.blue0093F5}
    //                     />}

    //                     onPress={() => setStateDicHeader({
    //                         ...stateDicHeader, bool: false,
    //                         value: "first"
    //                     })}
    //                 />

    //             </Appbar.Header>
    //         )
    //     }, [])
    return (
        <Text>kkkkkkkkkkkkkk</Text>
        //         <View style={STYLES.withoutpaddingcontainer}>
        //             <AwesomeAlert
        //                 show={stateShowAlert}
        //                 showProgress={true}

        //                 closeOnTouchOutside={false}
        //             //  closeOnHardwareBackPress={false}
        //             />

        //             {stateDicHeader.bool == true ?
        //                 <>

        //                     {dictionaryHeader}


        //                     <View style={{
        //                         marginTop: '5%',
        //                         marginLeft: '8%'
        //                     }}>
        //                         <FlatList
        //                             showsHorizontalScrollIndicator={false}
        //                             horizontal={true}
        //                             data={stateabc}
        //                             renderItem={({ item, index }) => {
        //                                 return (



        //                                     <Chip
        //                                         style={{

        //                                             borderRadius: 20,
        //                                             backgroundColor: item._id == stateActiveId ? COLORS.blue0093F5 :
        //                                                 COLORS.whiteFFFFFF,
        //                                             height: 30,
        //                                             marginRight: 10,
        //                                             width: 50,
        //                                             justifyContent: 'center',
        //                                             alignItems: 'center',
        //                                         }}

        //                                         textStyle={item._id == stateActiveId ?
        //                                             STYLES.fontSize15_FFFFFF_Roboto_Medium :
        //                                             STYLES.fontSize15_0093F5_Roboto_Medium}

        //                                         onPress={() => {
        //                                             dictionaryGetOnId(item._id)
        //                                         }}>{item.alphabet}
        //                                     </Chip>


        //                                 )
        //                             }
        //                             }

        //                             keyExtractor={item => item._id}
        //                         />

        //                     </View></> :
        //                 <Appbar.Header style={{
        //                     // paddingVertical: '5%',
        //                     backgroundColor: COLORS.whiteFFFFFF,
        //                     paddingRight: '3%',
        //                     //backgroundColor: 'red',
        //                     //paddingVertical: '10%'

        //                 }}>
        //                     <Appbar.BackAction onPress={() => {
        //                         setStateDicHeader({ ...stateDicHeader, bool: true })
        //                         setStateFilteredData([])
        //                     }} />

        //                     <Searchbar
        //                         inputStyle={STYLES.fontSize16_707070_Roboto_Regular}
        //                         ref={searchInput}
        //                         style={{
        //                             borderRadius: 25,
        //                             flex: 1,
        //                             borderWidth: 1,
        //                             borderColor: COLORS.black000000_30,
        //                             marginVertical: "10%",
        //                             // backgroundColor: "red"
        //                         }}
        //                         placeholder="Search..."
        //                         iconColor={COLORS.blue0093F5}
        //                         onChangeText={(text) => search(text)}

        //                     />
        //                     <Entypo name="cross" size={20} color={COLORS.blue0093F5}
        //                         onPress={() => {
        //                             searchInput.current.clear()
        //                             setStateDicHeader({ ...stateDicHeader, value: "first" })
        //                         }
        //                         }
        //                     />

        //                 </Appbar.Header >}


        //             <View style={STYLES.container}>


        //                 <FlatList style={{ marginTop: '5%' }}
        //                     showsVerticalScrollIndicator={false}
        //                     //   data={stateListAlphabet}
        //                     data={//stateFilteredData.length > 0 &&
        //                         stateDicHeader.bool == false && stateDicHeader.value == "second"
        //                             ? stateFilteredData : stateListAlphabet}
        //                     // a === true ? a : b === true ? b : c
        //                     // data={stateDicHeader ==false }

        //                     //
        //                     renderItem={({ item }) => {
        //                         console.log(item._id)
        //                         return (
        //                             <View>
        //                                 <TouchableOpacity
        //                                     onPress={() => {
        //                                         navigation.navigate("Alphabet",
        //                                             {
        //                                                 routeItemId: item._id,
        //                                                 routeItemTitle: item.title

        //                                             })
        //                                     }}
        //                                     style={{
        //                                         height: 50, //backgroundColor: 'red',
        //                                         // justifyContent: 'center',
        //                                         borderWidth: 1,
        //                                         borderColor: '#707070',
        //                                         marginBottom: '2%'
        //                                     }}>
        //                                     <List.Item title={item.title}
        //                                         style={{

        //                                             paddingLeft: '0%'
        //                                         }}
        //                                         titleStyle={STYLES.fontSize16_000000_Roboto_Regular}
        //                                     ></List.Item>


        //                                 </TouchableOpacity>
        //                             </View>

        //                         )
        //                     }}
        //                     keyExtractor={item => item._id}
        //                 />
        //             </View>
        //         </View>
    );
};


export default ComDictSearchDict;