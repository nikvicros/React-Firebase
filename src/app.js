import React, {Component}from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

//Custom Styles
import { Header } from './components/common';

//Firebase Initiation

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBPRxHCJehsKf9_AzZseVkkylIwAZSvkvA",
            authDomain: "react-native-authenticate.firebaseapp.com",
            databaseURL: "https://react-native-authenticate.firebaseio.com",
            projectId: "react-native-authenticate",
            storageBucket: "react-native-authenticate.appspot.com",
            messagingSenderId: "837649889212"
        });
    }

    
    render() {
        return (
            <View>
                <Header headerText="Please Login"/>
                <Text>App</Text>
            </View>
        );
    }
}

export default App;