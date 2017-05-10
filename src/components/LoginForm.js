import React, { Component } from 'react';
import { TextInput } from 'react-native';

//Import Styles
import {Card, Button, CardSection } from './common';

class LoginForm extends Component {
    
    state = { text: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput
                    val={ this.state.text }
                    onChange={text => this.setState({ text: text })} 
                    style={{ height: 20, width: 100 }} 
                    /> 
                </CardSection>
                <CardSection>
                </CardSection>
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        )
    }
}


export default LoginForm;