import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';


//Import Styles

import {Card, Button, CardSection, TextField, Spinner } from './common';

class LoginForm extends Component {

    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    onButtonPress() {
        const {email, password} = this.state;

        this.setState({error: '', loading: true});
        
        //Firebase Authentication function with error logic
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this)) //Succesful login | Form resets to blank
            .catch(() => {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password) // Atempt to create a new user if login fails
                    .then(this.onLoginSuccess.bind(this)) // Succesful creation of new user message
                    .catch(this.onLoginFail.bind(this)); // Failed creation of user
            });
    }

    // Failed Login function(message)
    onLoginFail() {
        this.setState({error: 'Authentication Failed', loading: false});
    }

    // Successful Login function(message)
    onLoginSuccess() {
        this.setState({email: '', password: '', loading: false, error: ''});
    }

    // Function to call on th Spinner Loading immediately invoke after submission of
    renderButton() {
        if (this.state.loading) {
            return <Spinner size='small' />
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        )
    }

    // Main Render Function, contails the form text input and placeholder
    // this.renderButton is invoked as soon as user presses submit

    render() {
        return (
            <Card>
                <CardSection>
                    <TextField
                        label='Email:'
                        placeholder='your@email.com'
                        val={this.state.email}
                        onChangeText={email => this.setState({email})}/>
                </CardSection>

                <CardSection>
                    <TextField
                        secureTextEntry
                        label='Password:'
                        placeholder='Password'
                        val={this.state.password}
                        onChangeText={password => this.setState({password})}/>
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;