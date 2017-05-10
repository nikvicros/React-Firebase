import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';


//Import Styles

import {Card, Button, CardSection, TextField, Spinner } from './common';

class LoginForm extends Component {
    
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        const { email, password } = this.state;
        
        this.setState({ error: ' ', loading: true });
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this)); 
            });
    }

    onLoginFail() {
        this.setState({
            error: 'Authentication Failed',
            loading: false
        })
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        })
    }

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

    render() {
        return (
            <Card>
                <CardSection>
                    <TextField
                    label='Email:'
                    placeholder='your@email.com'
                    val={ this.state.email }
                    onChangeText={ email => this.setState({ email })}  
                    /> 
                </CardSection>

                <CardSection>
                    <TextField 
                    secureTextEntry
                    label='Password:'
                    placeholder='Password'
                    val={ this.state.password }
                    onChangeText={ password => this.setState({ password })}                    
                    />
                </CardSection>

                <Text style={ styles.errorTextStyle }>
                { this.state.error }
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