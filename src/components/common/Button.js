import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Controls = ({ onPress, children }) => {
    const { buttonStyle, buttonTextStyle } = PrimaryButtonStyle;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={buttonTextStyle}>
            {children}
            </Text>
        </TouchableOpacity>
    );
};

const PrimaryButtonStyle = {
    buttonTextStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },

    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

export { PrimaryButtonStyle };