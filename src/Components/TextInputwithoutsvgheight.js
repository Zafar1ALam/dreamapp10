import * as React from 'react';
import STYLES from '../STYLES'

import { TextInput } from 'react-native-paper';
import COLORS from '../assets/colors/Color';

const TextInputwithoutsvgheight = props => {
    return (
        <TextInput

            activeOutlineColor={COLORS.blue0093F5}
            // outlineColor={ }
            mode='outlined'
            // onFocus={outlineColor = "red"}
            style={[STYLES.fontSize16_707070_Roboto_Regular,
            { //height: 40,
                /// backgroundColor: COLORS.whiteFFFFFF
            }]}
            //activeUnderlineColor="green"
            keyboardType={props.keyboardType}

            placeholder={props.placeholder}

            onChangeText={props.onChangeText}

        />
    );
};



export default TextInputwithoutsvgheight;