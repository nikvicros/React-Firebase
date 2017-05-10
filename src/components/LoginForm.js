import React, {Component} from 'react';
import {View} from 'react-native';

//Import Styles
import {Card, Button, CardSection } from './common';

class LoginForm extends Component {
    render() {
        return (
            <Card>
                <CardSection />
                <CardSection />
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