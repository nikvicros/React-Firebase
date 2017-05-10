import React, { Component } from 'react';
import firebase from 'firebase';


//Import Styles
import {Card, Button, CardSection, TextField } from './common';

class LoginForm extends Component {
    
    state = { email: '', password: '' };

    onButtonPress() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <TextField
                    label='Email'
                    placeholder='your@email.com'
                    val={ this.state.email }
                    onChange={ email => this.setState({ email })}  
                    /> 
                </CardSection>

                <CardSection>
                    <TextField 
                    secureTextEntry
                    label='Password'
                    placeholder='Password'
                    val={ this.state.password }
                    onChange={ password => this.setState({ password })}                    
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

export default LoginForm;