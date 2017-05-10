import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText }) => {
    return(
        <View>
            <Text>
                { lable }
                <TextInput
                value={ value }
                onChangeText={ onChangeText }
                />
            </Text>
        </View>
    )
};

const styles = {

}

export { Input };