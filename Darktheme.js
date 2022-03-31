// import * as React from 'react';
// import { DefaultTheme, Provider as PaperProvider, } from 'react-native-paper';
// import StackNavigations from './StackNavigations';
// import { useColorScheme } from 'react-native'
// import COLORS from './src/assets/colors/Color';

// // const theme = {
// //     ...DefaultTheme,
// //     roundness: 2,
// //     colors: {
// //         ...DefaultTheme.colors,
// //         // primary: '#3498db',
// //         // accent: '#f1c40f',
// //         dark: true,
// //         mode: "exact"

// //     },
// // };

// const darkTheme = {
//     // ...DefaultTheme,
//     // dark: true,
//     // mode: "exact",

//     // //  roundness: 2,
//     // colors: {
//     //     ...DefaultTheme.colors,
//     //     //surface: COLORS.black000000,
//     //     background: COLORS.grey505050_07,
//     //     //onSurface: COLORS.blue0093F5,
//     //     text: COLORS.whiteFFFFFF,
//     //     placeholder: COLORS.black000000,
//     //     //// primary: COLORS.black000000
//     // },

//     ...DefaultTheme,
//     //  roundness: 2,
//     //dark: true,
//     colors: {
//         ...DefaultTheme.colors,
//         //  background: COLORS.black000000,
//         surface: COLORS.black000000_20,
//         //text: COLORS.black000000,
//         //disabled: COLORS.black1C1A1A
//     },

// };

// const lightTheme = {
//     ...DefaultTheme,
//     //  roundness: 2,
//     colors: {
//         ...DefaultTheme.colors,
//         background: COLORS.black000000,
//         text: COLORS.whiteFFFFFF
//         //   primary: "#FAFAFA",
//         // accent: "#1A1A1A",
//     },
// };


// const Darktheme = props => {
//     const scheme = useColorScheme();
//     console.log(scheme)
//     return (

//         <PaperProvider //theme={scheme === 'dark' ? darkTheme : lightTheme}
//             theme={darkTheme}
//         >
//             <StackNavigations />
//         </PaperProvider>
//     );
// };

// Darktheme.propTypes = {

// };

// export default Darktheme;