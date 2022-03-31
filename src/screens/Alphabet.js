import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    View, ScrollView, Dimensions, Image, StyleSheet, TouchableOpacity
    , FlatList, Share,
} from 'react-native'
import {
    Appbar, Card, Title, Paragraph, Button,
    Avatar, IconButton, List, TextInput, Searchbar, TouchableRipple
} from 'react-native-paper';
import STYLES from '../STYLES';
import { SvgXml } from 'react-native-svg';
import Svgs from '../assets/svgs/Svgs';
import COLORS from '../assets/colors/Color';
import { Chip, Text, useTheme } from 'react-native-paper';
import Button1 from '../Components/Button1';
import AwesomeAlert from 'react-native-awesome-alerts';
import strings from '../lng/LocalizedString';
const Alphabet = ({ route, navigation }) => {
    const { routeItemId, routeItemTitle } = route.params;
    console.log(routeItemId)
    const { colors } = useTheme();
    useEffect(() => {
        fetch('https://dream-app-mtechub.herokuapp.com/api/subCate/getSingle/' + routeItemId)
            .then((response) => response.json())
            .then((json) => {
                // console.log(json.singleMainCate[0].SubCate)
                console.log(json.singleSubCate[0].dreams)
                setStateListAlphabet(json.singleSubCate[0].dreams)
            })
            .catch((error) => console.error(error))
    }, [])
    const [statelistAlphabet, setStateListAlphabet] = useState([

    ]);


    const onShare = async (data) => {
        try {
            const result = await Share.share({
                message:
                    data,
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
    return (
        <View style={STYLES.withoutpaddingcontainer}>
            <Appbar.Header style={{
                //backgroundColor: COLORS.whiteFFFFFF,
                backgroundColor: colors.background
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
                    title={routeItemTitle} color={COLORS.blue0093F5} />


            </Appbar.Header >

            <View style={STYLES.container}>

                <View style={{ flex: 1 }}>

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        style={{ marginTop: '5%' }}
                        data={statelistAlphabet}
                        renderItem={({ item }) => {
                            console.log(item)
                            return (

                                <Card style={{
                                    marginBottom: '4%',
                                    borderWidth: 1,
                                    borderColor: colors.border,//COLORS.black000000_20,
                                    borderRadius: 6
                                }} onPress={() => {
                                    navigation.navigate("CreateJouneral",
                                        {
                                            routeTitle: item.title,
                                            routeDescription: item.desc

                                        })
                                }}
                                >
                                    <Card.Content>
                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            marginBottom: '4%'
                                        }}>
                                            <Text style={STYLES.fontSize16_000000_Roboto_Regular}>{item.title}</Text>
                                            {/* <TouchableRipple onPress={() => {

                                                onShare(item.desc)
                                            }}>
                                                <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="14.026" height="16.03" viewBox="0 0 14.026 16.03">
  <path id="Icon_awesome-share-alt" data-name="Icon awesome-share-alt" d="M11.021,10.019a2.993,2.993,0,0,0-1.872.654L5.94,8.668a3.023,3.023,0,0,0,0-1.305L9.149,5.357a3,3,0,1,0-1.062-1.7L4.878,5.664a3.006,3.006,0,1,0,0,4.7l3.209,2.005a3.006,3.006,0,1,0,2.934-2.353Z" fill="#0093f5"/>
</svg>
`} />
                                            </TouchableRipple> */}
                                        </View>
                                        <Text numberOfLines={5}
                                            style={STYLES.fontSize13_000000_Roboto_Regular_59}
                                        >{item.desc}</Text>
                                    </Card.Content>
                                </Card>
                            )
                        }}
                        keyExtractor={item => item._id}
                    />
                </View>

            </View>
        </View >
    );
};



export default Alphabet;