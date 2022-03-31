import { StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Dimensions, Image } from 'react-native'
import {
    Appbar, Card, Title, Paragraph, Button,
    Avatar, IconButton, List
} from 'react-native-paper';
import STYLES from '../STYLES';
import { SvgXml } from 'react-native-svg';
import Svgs from '../assets/svgs/Svgs';
import COLORS from '../assets/colors/Color';
import { Chip, Text } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useTheme } from '@react-navigation/native';
import Button1 from '../Components/Button1';
import AwesomeAlert from 'react-native-awesome-alerts';
import strings from '../lng/LocalizedString';
const Dictionary = ({ navigation }) => {
    const { colors } = useTheme();
    useEffect(() => {

        // console.log('a')
        fetch('https://dream-app-mtechub.herokuapp.com/api/mainCate/getAll')
            .then((response) => response.json())
            .then((json) => {
                // console.log(json.allMainCategies)
                setStateabc(json.allMainCategies)
                //console.log(json.allMainCategies[0]._id)
                setStateActiveId(json.allMainCategies[0]._id)

                setStateShowAlert(false)

                fetch('https://dream-app-mtechub.herokuapp.com/api/mainCate/getSingle/' + json.allMainCategies[0]._id)
                    .then((response) => response.json())
                    .then((json) => {
                        // console.log(json)
                        // console.log(json.singleMainCate[0].SubCate)
                        setStateListAlphabet(json.singleMainCate[0].SubCate)

                    })
                    .catch((error) => console.error(error))
                //console.log(json.allMainCategies[0]._id)
            })
            .catch((error) => console.error(error))



    }, [])
    const [stateShowAlert, setStateShowAlert] = useState(true)

    const [stateActiveId, setStateActiveId] = useState();

    const [stateabc, setStateabc] = useState([
        // { id: 1, data: 'A', bgColor: 'blue' },
        // { id: 2, data: 'B', bgColor: 'white' },
        // { id: 3, data: 'C', bgColor: 'white' },
        // { id: 4, data: 'D', bgColor: 'white' },
        // { id: 5, data: 'E', bgColor: 'white' },
        // { id: 6, data: 'F', bgColor: 'white' },
        // { id: 7, data: 'G', bgColor: 'white' },
        // { id: 8, data: 'H', bgColor: 'white' },
        // { id: 9, data: 'I', bgColor: 'white' },
        // { id: 10, data: 'J', bgColor: 'white' },
        // { id: 11, data: 'K', bgColor: 'white' },
        // { id: 12, data: 'L', bgColor: 'white' },
        // { id: 13, data: 'M', bgColor: 'white' },
        // { id: 14, data: 'N', bgColor: 'white' },
        // { id: 15, data: 'O', bgColor: 'white' },
        // { id: 16, data: 'P', bgColor: 'white' },
        // { id: 17, data: 'Q', bgColor: 'white' },
        // { id: 18, data: 'R', bgColor: 'white' },
        // { id: 19, data: 'S', bgColor: 'white' },
        // { id: 29, data: 'T', bgColor: 'white' },
        // { id: 20, data: 'U', bgColor: 'white' },
        // { id: 21, data: 'V', bgColor: 'white' },
        // { id: 22, data: 'W', bgColor: 'white' },
        // { id: 23, data: 'X', bgColor: 'white' },
        // { id: 24, data: 'Y', bgColor: 'white' },
        // { id: 25, data: 'Z', bgColor: 'white' },
    ])
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

    const dictionaryGetOnId = (id) => {
        setStateActiveId(id)
        fetch('https://dream-app-mtechub.herokuapp.com/api/mainCate/getSingle/' + id)
            .then((response) => response.json())
            .then((json) => {
                //console.log(json.)
                // console.log(json.singleMainCate[0].SubCate)
                setStateListAlphabet(json.singleMainCate[0].SubCate)
            })
            .catch((error) => console.error(error))
    }

    return (
        <View style={STYLES.withoutpaddingcontainer}>
            <AwesomeAlert
                show={stateShowAlert}
                showProgress={true}

                closeOnTouchOutside={false}
            //  closeOnHardwareBackPress={false}
            />
            <Appbar.Header style={{
                //backgroundColor: COLORS.whiteFFFFFF,         //  color change dark
                backgroundColor: colors.background,
            }}>

                <Appbar.BackAction onPress={() => { navigation.goBack() }} />
                <Appbar.Content

                    titleStyle={[STYLES.fontSize20_Roboto_Medium,
                    { alignSelf: 'center' }
                    ]}
                    title={strings.Dictionary} color={COLORS.blue0093F5} />


            </Appbar.Header>

            <View style={STYLES.container}>
                <View style={{ flexDirection: 'row', flex: 0.95, marginTop: '4%' }}>
                    <View style={{}}>
                        <FlatList style={{ marginRight: '2%' }}
                            showsVerticalScrollIndicator={false}
                            //horizontal={true}
                            data={stateabc}
                            renderItem={({ item, index }) => {
                                return (

                                    // console.log(item),

                                    <Chip
                                        style={{

                                            borderRadius: 20,
                                            backgroundColor: item._id == stateActiveId ? COLORS.blue0093F5 :
                                                colors.background,   // COLORS.whiteFFFFFF, //COLORS.black000000, 
                                            height: 30,
                                            marginTop: 10,
                                            width: 50,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderColor: '#707070'
                                        }}

                                        textStyle={item._id == stateActiveId ?
                                            [STYLES.fontSize15_FFFFFF_Roboto_Medium,
                                            { color: colors.background }] :
                                            [STYLES.fontSize15_0093F5_Roboto_Medium,
                                            { color: COLORS.blue0093F5 }]}

                                        onPress={() => {
                                            dictionaryGetOnId(item._id)
                                        }}>{item.alphabet}
                                    </Chip>


                                )

                            }}
                            keyExtractor={item => item._id}
                        />
                    </View>


                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={stateListAlphabet}
                        renderItem={({ item }) => {
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


                <Button onPress={() => {
                    navigation.navigate("SearchDictionary",
                        {
                            routeStateListAlphabet: stateListAlphabet


                        }
                    )
                }}
                    style={[{
                        marginTop: '3%',
                        height: 50,
                        //paddingVertical: '0%',
                        // flex: 1,
                        justifyContent: 'center',
                        backgroundColor: '#0093F5'
                    }, STYLES.fontSize20_FFFFFF_Roboto_Regular]}
                    mode="contained"
                >
                    {strings.SEARCH}
                </Button>
            </View>
        </View>
    );
};

Dictionary.propTypes = {

};

export default Dictionary;