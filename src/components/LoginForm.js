import React, { Component } from 'react';


//Import Styles
import {Card, Button, CardSection, Input } from './common';

class LoginForm extends Component {
    
    state = { text: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
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