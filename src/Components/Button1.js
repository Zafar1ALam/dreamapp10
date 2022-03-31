import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';
import STYLES from '../STYLES';

const Button1 = props => {
    return (
        <Button
            style={[{
                marginTop: '40%',
                height: 50,
                //paddingVertical: '0%',
                // flex: 1,
                justifyContent: 'center',
                backgroundColor: '#0093F5'
            }, STYLES.fontSize20_FFFFFF_Roboto_Regular]}
            mode="contained" onPress={props.onPress}>
            {props.text}
        </Button>
    );
};

Button1.propTypes = {

};

export default Button1;