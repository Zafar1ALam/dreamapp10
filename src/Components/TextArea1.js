import * as React from 'react';
import STYLES from '../STYLES'

import { TextInput } from 'react-native-paper';
import COLORS from '../assets/colors/Color';
const TextArea1 = props => {
    return (
        <TextInput
            multiline={true}
            value={props.value}
            activeOutlineColor={COLORS.blue0093F5}
            // outlineColor={ }
            mode='outlined'
            // onFocus={outlineColor = "red"}
            style={[STYLES.fontSize16_707070_Roboto_Regular,
            {
                flex: 1, //backgroundColor: COLORS.whiteFFFFFF 
            }]}
            //activeUnderlineColor="green"
            numberOfLines={props.numberOfLines}

            placeholder={props.placeholder}

            onChangeText={props.onChangeText}

        />
    );
};

TextArea1.propTypes = {

};

export default TextArea1;