// Core Imports
import React, {Component} from 'react';
import { View, Text } from 'react-native';



//Custom Imports
import firebase from 'firebase';
import { Header, Button, Card, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = { loggedIn: null }
    
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBPRxHCJehsKf9_AzZseVkkylIwAZSvkvA",
            authDomain: "react-native-authenticate.firebaseapp.com",
            databaseURL: "https://react-native-authenticate.firebaseio.com",
            projectId: "react-native-authenticate",
            storageBucket: "react-native-authenticate.appspot.com",
            messagingSenderId: "837649889212"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if ( user ) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false })
            }
        })
    }

renderContent() {

    switch (this.state.loggedIn) {
        case true:
            return <Card>
                <CardSection>
                    <Button onPress={() => firebase.auth().signOut()} >
                        Log Out
                    </Button>
                </CardSection>
            </Card>

        case false:
            return <LoginForm/>

        default:
            return <CardSection> 
                        <Spinner size='large'/>
                   </CardSection>
    }
}

    render() {
        return (
            <View>
                <Header headerText="Please Login"/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;