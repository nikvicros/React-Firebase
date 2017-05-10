import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';


//Import Styles
import {Card, Button, CardSection, TextField } from './common';

class LoginForm extends Component {
    
    state = { email: '', password: '', error: '' };

    onButtonPress() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(() =>{
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(() => {
                this.setState({error: 'Authentication Failed.'});

            })
        })
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

                <Text style={ styles.errorTextStyle }>
                { this.state.error }
                </Text>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
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