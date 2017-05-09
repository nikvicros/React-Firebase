import React, {Component}from 'react';
import { View, Text } from 'react-native';


//Custom Styles
import { AppHeader } from './components/common';

class App extends Component {
    render() {
        return (
            <View>
            <AppHeader>
                <Text>Authenticate</Text>
                </AppHeader>
            </View>
        );
    }
}

export default App;