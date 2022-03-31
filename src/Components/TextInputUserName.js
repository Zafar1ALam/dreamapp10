import * as React from 'react';
import STYLES from '../STYLES'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TextInput } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'
import COLORS from '../assets/colors/Color';
import { SvgXml } from 'react-native-svg';
import Svgs from '../assets/svgs/Svgs';
const TextInputUserName = props => {
    return (

        <TextInput
            activeOutlineColor={COLORS.blue0093F5}
            // outlineColor={ }
            mode='outlined'
            // onFocus={outlineColor = "red"}
            style={[STYLES.fontSize16_707070_Roboto_Regular,
            { //height: 60, 
                // backgroundColor: COLORS.whiteFFFFFF,
                justifyContent: 'center'
            }]}
            left={<TextInput.Icon name={() =>
                <SvgXml xml={Svgs.userNameLogo}

                />
            } />}
            color={'rgba(0,0,0,0.37)'}


            // />}

            placeholder={props.placeholder}
            secureTextEntry={props.secureTextEntry}
            onChangeText={props.onChangeText}

        />
    );
};

TextInputUserName.propTypes = {

};

export default TextInputUserName;