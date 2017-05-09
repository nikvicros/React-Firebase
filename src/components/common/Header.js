import React from 'react';
import {Text, View} from 'react-native';

const AppHeader = (props) => {
    const {textStyle, viewStyle} = HeaderStyles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text> 
        </View>
    );
};

const HeaderStyles = {
    viewStyle: {
        backgroundColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.5,
        elevation: 1,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
}

export { AppHeader };
