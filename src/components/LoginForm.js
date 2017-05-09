import React, {Compoent} from 'react';
import {View} from 'react-native';

//Import Styles
import {Card, Button, CardSection } from './common'

class LoginForm extends Compoent {
    render() {
        return (
            <Card>
                <CardSection />
                <CardSection />
                <CardSection>
                    Login
                </CardSection>
            </Card>
        )
    }
}


export default LoginForm;