import * as React from 'react';
import STYLES from '../STYLES'

import { TextInput } from 'react-native-paper';
import COLORS from '../assets/colors/Color';
import { SvgXml } from 'react-native-svg';
import Svgs from '../assets/svgs/Svgs';
const TextInput1 = props => {
    return (


        <TextInput
            activeOutlineColor={COLORS.blue0093F5}
            // outlineColor={ }
            mode='outlined'
            // onFocus={outlineColor = "red"}
            style={[STYLES.fontSize16_707070_Roboto_Regular,
            { //height: 60, 
                //backgroundColor: COLORS.whiteFFFFFF
            }]}
            //activeUnderlineColor="green"
            // left={<TextInput.Icon name={() =>
            //     <SvgXml xml={props.Svgs} />
            // } />}
            // color={'rgba(0,0,0,0.37)'}
            left={<TextInput.Icon name={props.name}

            />}
            color={'rgba(0,0,0,0.37)'}

            placeholder={props.placeholder}
            secureTextEntry={props.secureTextEntry}
            onChangeText={props.onChangeText}

        />



    );
};



export default TextInput1;