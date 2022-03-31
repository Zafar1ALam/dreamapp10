import * as React from 'react';
import STYLES from '../STYLES'
import { TextInput, useTheme } from 'react-native-paper';
import COLORS from '../assets/colors/Color';
const TextInputwithoutSVG = props => {

    return (
        <TextInput
            value={props.value}

            activeOutlineColor={COLORS.blue0093F5}
            // outlineColor={ }
            mode='outlined'
            // onFocus={outlineColor = "red"}
            style={[STYLES.fontSize16_707070_Roboto_Regular,
            {
                // borderColor:colo
                //flex: 1,
                //height: 60,
                //paddingVertical: '10%',
                //backgroundColor: COLORS.whiteFFFFFF
                //backgroundColor: 'red'
            }]}
            //activeUnderlineColor="green"


            placeholder={props.placeholder}

            onChangeText={props.onChangeText}

        />
    );
};

TextInputwithoutSVG.propTypes = {

};

export default TextInputwithoutSVG;