import React, { Component } from 'react';


//Import Styles
import {Card, Button, CardSection, TextField } from './common';

class LoginForm extends Component {
    
    state = { text: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <TextField
                    label='Email'
                    placeholder='your@email.com'
                    val={ this.state.text }
                    onChange={text => this.setState({ text: text })}  
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