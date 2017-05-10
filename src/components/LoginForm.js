import React, { Component } from 'react';


//Import Styles
import {Card, Button, CardSection, TextField } from './common';

class LoginForm extends Component {
    
    state = { email: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <TextField
                    label='Email'
                    placeholder='your@email.com'
                    val={ this.state.email }
                    onChange={ email => this.setState({ email: text })}  
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