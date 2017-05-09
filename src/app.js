import React, {Component}from 'react';
import { View, Text } from 'react-native';

//Custom Styles
import { Header } from './components/common';

class App extends Component {
    render() {
        return (
            <View>
                <Header headerText="Please Login" />
                <Text>App</Text>
            </View>
        );
    }
}

export default App;