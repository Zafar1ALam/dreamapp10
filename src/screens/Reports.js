import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
    View, ScrollView, Dimensions, Image, StyleSheet, TouchableOpacity
    , FlatList, ActivityIndicator
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import {
    Appbar, Card, Title, Paragraph, Button,
    Avatar, IconButton, List, TextInput, Searchbar,
    FAB, useTheme,
    Provider, Modal,
    TouchableRipple
} from 'react-native-paper';
import STYLES from '../STYLES';
import { SvgXml } from 'react-native-svg';
import Svgs from '../assets/svgs/Svgs';
import COLORS from '../assets/colors/Color';
import { Chip, Text, } from 'react-native-paper';


import AsyncStorage from '@react-native-async-storage/async-storage';
import Entypo from 'react-native-vector-icons/Entypo'
import {

    PieChart,

} from "react-native-chart-kit";
import RBSheet from "react-native-raw-bottom-sheet";
import strings from '../lng/LocalizedString';




const Reports = ({ navigation }) => {
    useEffect(() => {
        getMyObject()

    }, [])

    const { colors } = useTheme()

    const [state_AS_UserId, setState_AS_UserId] = useState();
    const [stateActivityIndicator, setStateActivitiIndicator] = useState(true)
    const getMyObject = async () => {



        const jsonValue = await AsyncStorage.getItem('userId')
        if (jsonValue != null) {
            { console.log(jsonValue) }


            return (
                setState_AS_UserId(jsonValue),

                console.log('https://dream-app-mtechub.herokuapp.com/api/journel/getAllDreamTypeCount/' + jsonValue + '/' + stateDataBaseDays),
                fetch('https://dream-app-mtechub.herokuapp.com/api/journel/getAllDreamTypeCount/' + jsonValue + "/" + stateDataBaseDays)
                    .then((response) => response.json())
                    .then((json) => {
                        console.log(json)

                        setStateActivitiIndicator(false)
                        // setGetAllByDreamTypeFlatList(json.allJournels)
                        console.log(json.allNightmare)
                        console.log(json.allLucidsDreams)
                        console.log(json.allRecuringDreams)
                        console.log(json.totDreams)
                        console.log(json.totNightmare)
                        console.log(json.totLucid)
                        console.log(json.totRecurring)

                        //setStateNightmaresPieChart(json.allNightmare)

                        setStateTotalDreams(json.totDreams)
                        setStateTotalNightmares(json.totNightmare)
                        setStateTotalLucid(json.totLucid)
                        setStateTotalRecurring(json.totRecurring)

                        // setStateListAlphabet(json.allSounds)
                    })
                    .catch((error) => console.error(error))

            )
        } else

            return null

    }

    const [stateTotalNightmares, setStateTotalNightmares] = useState(0);
    const [stateTotalLucid, setStateTotalLucid] = useState(0);
    const [stateTotalRecurring, setStateTotalRecurring] = useState(0);
    const [stateTotalDreams, setStateTotalDreams] = useState(0);

    const [daysModalVisible, setDaysModalVisible] = useState(false);
    const [stateDays, setStateDays] = useState('Last 30 days');
    const [stateDataBaseDays, setStateDateBaseDays] = useState('30Days');

    const refRBSheetDays = useRef();
    const daysList = [
        {
            id: 1,
            Label: "Last 7 days",
            value: "7Days"
        },
        {
            id: 2,
            Label: "Last 15 days",
            value: "15Days"
        },
        {
            id: 3,
            Label: "Last 30 days",
            value: "30Days"
        },

    ];

    const [stateNightmaresPieChart, setStateNightmaresPieChart] = useState();


    // const [stateDataPieChart, setStateDataPieChart] = useState([
    //     {
    //         name: "nightmare",
    //         population: stateTotalNightmares,
    //         color: colorNightmare,
    //         legendFontColor: "#7F7F7F",
    //         legendFontSize: 15
    //     },
    //     {
    //         name: "Lucid",
    //         population: stateTotalLucid,
    //         color: colorLucid,
    //         legendFontColor: "#7F7F7F",
    //         legendFontSize: 15
    //     },
    //     {
    //         name: "Recurring",
    //         population: stateTotalRecurring,
    //         color: colorRecurring,
    //         legendFontColor: "#7F7F7F",
    //         legendFontSize: 15
    //     },

    // ]);
    const data = [
        {
            name: "nightmare",
            population: stateTotalNightmares,
            color: "#008ECC",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Lucid",
            population: stateTotalLucid,
            color: "#FDA50F",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Recurring",
            population: stateTotalRecurring,
            color: "#3F704D",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },

    ]

    // const dataBarChart = {
    //     labels: ["01", "01", "01", "01", "01", "01", "01", "01", "01",],
    //     datasets: [
    //         {
    //             data: [20, 45, 28, 80, 99, 43]
    //         }
    //     ]
    // };



    const fetchReports = (d) => {
        console.log(d)
        setStateActivitiIndicator(true)
        fetch('https://dream-app-mtechub.herokuapp.com/api/journel/getAllDreamTypeCount/' + state_AS_UserId + '/' + d)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setStateActivitiIndicator(false)
                // // setGetAllByDreamTypeFlatList(json.allJournels)
                // console.log(json.allNightmare)
                // console.log(json.allLucidsDreams)
                // console.log(json.allRecuringDreams)
                console.log(json.totDreams)
                console.log(json.totNightmare)
                console.log(json.totLucid)
                console.log(json.totRecurring)

                setStateTotalDreams(json.totDreams)
                setStateTotalNightmares(json.totNightmare)
                setStateTotalLucid(json.totLucid)
                setStateTotalRecurring(json.totRecurring)

            })
            .catch((error) => console.error(error))
    }



    return (


        <View style={{
            // backgroundColor: COLORS.whiteFFFFFF, 
            flex: 1,
            height: Dimensions.get('window').height,
        }}>

            {stateActivityIndicator == true ?
                <View style={{ justifyContent: 'center', flex: 1 }}>
                    <ActivityIndicator size="large" color={COLORS.blue0093F5} />
                </View>
                :
                <>


                    <Appbar.Header style={{
                        backgroundColor: colors.background,


                    }}>

                        <Appbar.BackAction onPress={() => {
                            navigation.goBack("MyDreamRep", {

                            })
                        }} />
                        <Appbar.Content
                            style={{

                                alignItems: 'center'
                            }}
                            titleStyle={[STYLES.fontSize20_Roboto_Medium,
                                //{ alignSelf: 'center', }
                            ]}
                            title={strings.Reports} color={COLORS.blue0093F5} />


                    </Appbar.Header >


                    <View style={{ paddingHorizontal: '6%', flex: 1 }}>

                        <TouchableOpacity
                            onPress={() => {
                                // setDaysModalVisible(true)
                                refRBSheetDays.current.open()
                            }}
                            style={{
                                marginTop: '6%',
                                width: '50%',
                                alignSelf: 'center',
                                borderWidth: 1,
                                // borderColor: COLORS.black000000_20,
                                borderColor: colors.border,
                                borderRadius: 20,
                                paddingHorizontal: '3%',
                                paddingVertical: '1%',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                            <Text style={STYLES.fontSize15_0093F5_Roboto_Medium}>{stateDays}</Text>

                            <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="12.039" height="6.02" viewBox="0 0 12.039 6.02">
<path id="Icon_ionic-md-arrow-dropdown" data-name="Icon ionic-md-arrow-dropdown" d="M9,13.5l6.02,6.02,6.02-6.02Z" transform="translate(-9 -13.5)" fill="#b2b2b2"/>
</svg>
`} />
                        </TouchableOpacity>
                        <Card onPress={() => { console.log('fffffffffffff') }}
                            mode='outlined'
                            style={{
                                marginTop: '10%',
                                paddingHorizontal: '4%',
                                paddingVertical: '5%'
                            }}>
                            <Text style={[STYLES.fontSize20_00935_Robo1to_Medium,
                            ]}>{strings.Dreams}</Text>
                            <View style={{
                                flexDirection: 'row',
                                marginTop: '5%', justifyContent: 'space-between'
                            }}>
                                <Text style={STYLES.fontSize16_000000_Roboto_Regular}>{strings.Total_Dreams}</Text>
                                <Text style={STYLES.fontSize16_000000_Roboto_Regular}>{stateTotalDreams}</Text>

                            </View>
                            <View style={{
                                flexDirection: 'row',
                                marginTop: '3%', justifyContent: 'space-between'
                            }}>
                                <Text style={STYLES.fontSize16_000000_Roboto_Regular}>{strings.Total_Nightmares}</Text>
                                <Text style={STYLES.fontSize16_000000_Roboto_Regular}>{stateTotalNightmares}</Text>

                            </View>
                            <View style={{
                                flexDirection: 'row',
                                marginTop: '3%', justifyContent: 'space-between'
                            }}>
                                <Text style={STYLES.fontSize16_000000_Roboto_Regular}>{strings.Total_Lucid}</Text>
                                <Text style={STYLES.fontSize16_000000_Roboto_Regular}>{stateTotalLucid}</Text>

                            </View>
                            <View style={{
                                flexDirection: 'row',
                                marginTop: '3%', justifyContent: 'space-between'
                            }}>
                                <Text style={STYLES.fontSize16_000000_Roboto_Regular}>{strings.Total_Recurring}</Text>
                                <Text style={STYLES.fontSize16_000000_Roboto_Regular}>{stateTotalRecurring}</Text>

                            </View>
                        </Card>
                        <Text style={[STYLES.fontSize20_00935_Robo1to_Medium,
                        { marginTop: "5%" }]}>{strings.Pie_View}</Text>

                        {/* Nightmare chart */}
                        <PieChart

                            data={data
                            }
                            //data={stateDataPieChart}
                            width={Dimensions.get('window').width}
                            height={170}
                            chartConfig={{
                                backgroundGradientFrom: "#1E2923",
                                backgroundGradientFromOpacity: 0,
                                backgroundGradientTo: "#08130D",
                                backgroundGradientToOpacity: 0.5,
                                color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                                strokeWidth: 2, // optional, default 3
                                barPercentage: 0.5,
                                useShadowColorFromDataset: false // optional}
                            }}
                            hasLegend={false}
                            accessor={"population"}
                            backgroundColor={"transparent"}
                            paddingLeft={"15"}
                            center={[50, 10]}
                            avoidFalseZero={true}
                        // absolute
                        />

                        <View style={{ flexDirection: 'row', marginTop: '10%' }}>
                            <View style={{
                                backgroundColor: "#008ECC", width: 20, height: 20,
                                marginRight: '2%'
                            }}></View>
                            <Text>{strings.Nightmare}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: '3%' }}>
                            <View style={{
                                backgroundColor: "#FDA50F", width: 20, height: 20,
                                marginRight: '2%'
                            }}></View>
                            <Text>{strings.Lucid}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: '3%' }}>
                            <View style={{
                                backgroundColor: "#3F704D", width: 20, height: 20,
                                marginRight: '2%'
                            }}></View>
                            <Text>{strings.Recurring}</Text>
                        </View>




                        {/* Lucid Dreams */}
                        {/* <Text style={[STYLES.fontSize20_00935_Robo1to_Medium,
        { marginTop: "5%" }]}>Lucid dreams</Text> */}



                        {/* <PieChart

            data={dataPieChart}
            width={Dimensions.get('window').width}
            height={150}
            chartConfig={{
                backgroundGradientFrom: "#1E2923",
                backgroundGradientFromOpacity: 0,
                backgroundGradientTo: "#08130D",
                backgroundGradientToOpacity: 0.5,
                color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                strokeWidth: 2, // optional, default 3
                barPercentage: 0.5,
                useShadowColorFromDataset: false // optional}
            }}
            hasLegend={false}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
            center={[50, 10]}
            avoidFalseZero={true}
        // absolute
        /> */}


                        {/* Recurring Dreams */}
                        {/* <Text style={[STYLES.fontSize20_00935_Robo1to_Medium,
        { marginTop: "5%" }]}>Recurring Dreams</Text> */}


                        {/* <PieChart

            data={dataPieChart}
            width={Dimensions.get('window').width}
            height={150}
            chartConfig={{
                backgroundGradientFrom: "#1E2923",
                backgroundGradientFromOpacity: 0,
                backgroundGradientTo: "#08130D",
                backgroundGradientToOpacity: 0.5,
                color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                strokeWidth: 2, // optional, default 3
                barPercentage: 0.5,
                useShadowColorFromDataset: false // optional}
            }}
            hasLegend={false}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
            center={[50, 10]}
            avoidFalseZero={true}
        // absolute
        /> */}


                        {/* Sleep Duration */}
                        {/* <Text style={[STYLES.fontSize20_00935_Robo1to_Medium,
        { marginTop: "5%" }]}>Sleep Duration</Text>


        <BarChart
            style={{
                marginTop: '5%',
                //backgroundColor: 'red',
                paddingLeft: '0%'
            }}
            //   withInnerLines={true}
            //style={graphStyle}
            data={dataBarChart}
            width={Dimensions.get("window").width - 20}
            height={220}
            //yAxisSuffix={null}
            //
            // yAxisLabel={null}

            showBarTops={false}

            showValuesOnTopOfBars={false}
            withInnerLines={false}
            withHorizontalLabels={false}
            chartConfig={{
                //barPercentage: 1,
                fillShadowGradient: COLORS.black000000,
                fillShadowGradientOpacity: 1,
                //  barRadius: 12,
                propsForVerticalLabels: {
                    fontSize: 16,
                    fontFamily: 'Roboto-Regular',
                    color: COLORS.grey707070
                },
                backgroundGradientFrom: COLORS.whiteFFFFFF,
                backgroundGradientFromOpacity: 1,
                backgroundGradientTo: COLORS.whiteFFFFFF,
                backgroundGradientToOpacity: 1,
                //  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                color: (opacity = 1) => `#000000`,
                strokeWidth: 2, // optional, default 3
                barPercentage: 0.1,
                useShadowColorFromDataset: false // optional
            }}
            fromZero={true}
            verticalLabelRotation={0}
        /> */}


                        {/* Clarity */}
                        {/* <Text style={[STYLES.fontSize20_00935_Robo1to_Medium,
        { marginTop: "5%" }]}>Clarity</Text>



        <BarChart
            style={{
                // marginTop: '15%',
                // backgroundColor: 'green',
                // paddingLeft: 0,
                // paddingTop: 0

            }}

            data={dataBarChart}
            width={Dimensions.get("window").width - 20}
            height={220}
            //yAxisSuffix={'red'}
            //


            showBarTops={false}

            showValuesOnTopOfBars={false}
            withInnerLines={false}
            withHorizontalLabels={false}
            chartConfig={{
                //barPercentage: 1,
                fillShadowGradient: COLORS.black000000,
                fillShadowGradientOpacity: 1,
                //  barRadius: 12,
                propsForLabels: {

                },
                propsForVerticalLabels: {
                    fontSize: 16,
                    fontFamily: 'Roboto-Regular',
                    color: COLORS.grey707070
                },
                backgroundGradientFrom: COLORS.whiteFFFFFF,
                backgroundGradientFromOpacity: 1,
                backgroundGradientTo: COLORS.whiteFFFFFF,
                backgroundGradientToOpacity: 1,

                //  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                color: (opacity = 1) => `#000000`,
                strokeWidth: 2, // optional, default 3
                barPercentage: 0.1,
                useShadowColorFromDataset: false // optional
            }}
            fromZero={true}
            verticalLabelRotation={0}
        /> */}



                        {/* Quality */}
                        {/* <Text style={[STYLES.fontSize20_00935_Robo1to_Medium,
        { marginTop: "5%" }]}>Quality</Text>


        <BarChart
            style={{
                marginTop: '5%',
                //backgroundColor: 'red',
                paddingLeft: '0%',


            }}
            //   withInnerLines={true}
            //style={graphStyle}
            withHorizontalLabels={false}
            data={dataBarChart}
            width={Dimensions.get('window').width - 20}
            height={220}


            showBarTops={false}

            showValuesOnTopOfBars={false}
            withInnerLines={false}
            //withHorizontalLabels={false}
            chartConfig={{

                fillShadowGradient: COLORS.black000000,
                fillShadowGradientOpacity: 1,
                //  barRadius: 12,
                propsForVerticalLabels: {
                    fontSize: 16,
                    fontFamily: 'Roboto-Regular',
                    color: COLORS.grey707070
                },
                backgroundGradientFrom: COLORS.whiteFFFFFF,
                //  backgroundGradientFromOpacity: 1,
                backgroundGradientTo: COLORS.whiteFFFFFF,
                //  backgroundGradientToOpacity: 1,
                //  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                color: (opacity = 1) => `#000000`,
                strokeWidth: 1, // optional, default 3
                barPercentage: 0.1,
                useShadowColorFromDataset: false// optional
            }}
            fromZero={true}
            verticalLabelRotation={0}
        /> */}

                    </View>
                    <Appbar.Header style={{
                        // alignItems: 'center',
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
                            onPress={() => navigation.navigate("MyDreamRep")}
                        />
                        <Appbar.Action icon="magnify"
                            onPress={() => navigation.navigate("SearchDream", {
                                state_AS_UserId: state_AS_UserId
                            })} />
                        <Appbar.Action icon={() =>
                            <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="19.808" height="14.856" viewBox="0 0 19.808 14.856">
            <path id="Icon_awesome-chart-bar" data-name="Icon awesome-chart-bar" d="M12.875,14.4h1.486a.533.533,0,0,0,.5-.5v-5.2a.533.533,0,0,0-.5-.5H12.875a.533.533,0,0,0-.5.5v5.2A.533.533,0,0,0,12.875,14.4Zm3.714,0h1.486a.533.533,0,0,0,.5-.5V5a.533.533,0,0,0-.5-.5H16.59a.533.533,0,0,0-.5.5v8.914a.533.533,0,0,0,.5.5Zm-11.142,0H6.933a.533.533,0,0,0,.5-.5V11.185a.533.533,0,0,0-.5-.5H5.447a.533.533,0,0,0-.5.5v2.724a.533.533,0,0,0,.5.5Zm3.714,0h1.486a.533.533,0,0,0,.5-.5V6.233a.533.533,0,0,0-.5-.5H9.161a.533.533,0,0,0-.5.5v7.676A.533.533,0,0,0,9.161,14.4ZM19.189,16.88H2.476V5.119A.619.619,0,0,0,1.857,4.5H.619A.619.619,0,0,0,0,5.119v13a1.238,1.238,0,0,0,1.238,1.238H19.189a.619.619,0,0,0,.619-.619V17.5A.619.619,0,0,0,19.189,16.88Z" transform="translate(0 -4.5)" fill="#0093f5"/>
          </svg>
          
  
`} />} />
                    </Appbar.Header>





                    {/* Days  MODAL */}
                    <Modal
                        dismissable={false}
                        visible={daysModalVisible}
                        onDismiss={() => {

                            setDaysModalVisible(!daysModalVisible);
                        }}
                        contentContainerStyle={{
                            flex: 1,
                            paddingHorizontal: '10%',


                        }}
                    >

                        <View style={{
                            flex: 1,
                            //  backgroundColor: 'red',
                            // marginBottom: 50,
                            justifyContent: 'flex-start'
                        }}>
                            <TouchableRipple
                                onPress={() => setDaysModalVisible(!daysModalVisible)}

                                style={{
                                    alignSelf: 'flex-end',
                                    //marginTop: '5%',
                                    height: 23.54, width: 23.54,
                                    justifyContent: 'center', alignItems: 'center',
                                    borderRadius: 20, backgroundColor: COLORS.black000000_20
                                }}>
                                <Entypo name="cross" size={20} color={COLORS.whiteFFFFFF} />
                            </TouchableRipple>
                            {daysList.map((list, index) => {
                                return (
                                    <View key={index}
                                        style={{
                                            backgroundColor: COLORS.whiteFFFFFF,
                                            paddingVertical: '10%',

                                            borderBottomWidth: 1,
                                            borderBottomColor: COLORS.black000000_20

                                        }}>
                                        <TouchableOpacity style={{
                                            height: 40,
                                            // backgroundColor: 'red',
                                            justifyContent: 'center'
                                        }} onPress={() => {
                                            setDaysModalVisible(false);
                                            setStateDays(list.value)
                                        }}>
                                            <Text style={[{
                                                alignSelf: 'center',
                                            }, STYLES.fontSize20_00935_Robo1to_Medium]}>{list.Label}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}
                        </View>

                    </Modal>


                    {/* bottom sheet Days */}
                    <RBSheet
                        // closeOnDragDown={true}
                        dragFromTopOnly={true}
                        height={300}
                        animationType="slide"
                        ref={refRBSheetDays}


                        // closeOnPressBack={false}
                        customStyles={{
                            container: {
                                //borderRadius: 40,
                                backgroundColor: colors.background,
                                paddingVertical: "5%"
                            },

                        }}


                    >

                        <View style={{ flex: 1, paddingHorizontal: '4%' }}>
                            <View style={{
                                flexDirection: 'row', justifyContent:
                                    'space-between',
                                marginBottom: '5%'
                            }}>
                                <Text style={STYLES.fontSize16_000000_Roboto_Regular}>
                                    Select Days</Text>

                                <TouchableRipple
                                    onPress={() => refRBSheetDays.current.close()}

                                    style={{
                                        height: 23.54, width: 23.54,
                                        justifyContent: 'center', alignItems: 'center',
                                        borderRadius: 20, backgroundColor: COLORS.black000000_33
                                    }}>
                                    <Entypo name="cross" size={20} color={COLORS.whiteFFFFFF} />
                                </TouchableRipple>
                            </View>
                            <ScrollView
                                showsVerticalScrollIndicator={false}>
                                <View style={{
                                    flex: 1, //backgroundColor: 'green',
                                    marginTop: '3%',
                                    paddingHorizontal: '2%',
                                    justifyContent: 'space-between'
                                }}>
                                    {daysList.map((list, index) => {
                                        return (
                                            <View key={index}
                                                style={{
                                                    // backgroundColor: COLORS.whiteFFFFFF,
                                                    paddingVertical: '7%',
                                                    backgroundColor: colors.background,
                                                    borderBottomWidth: 1,
                                                    //borderBottomColor: COLORS.black000000_20

                                                    borderBottomColor: colors.border

                                                }}>
                                                <TouchableOpacity style={{
                                                    //height: 40,
                                                    //flex: 1,
                                                    // backgroundColor: 'red',
                                                    justifyContent: 'center'
                                                }} onPress={() => {
                                                    refRBSheetDays.current.close()
                                                    setStateDays(list.Label)




                                                    fetchReports(list.value)
                                                }}>
                                                    <Text style={[{
                                                        alignSelf: 'center',
                                                    }, STYLES.fontSize20_00935_Robo1to_Medium]}>{list.Label}</Text>
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    })}

                                </View>
                            </ScrollView>

                        </View>


                    </RBSheet>
                </>
            }



        </View>


    );
};

Reports.propTypes = {

};

export default Reports;