import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { HeaderComponent, TextBox } from '../components/header';
import {Actions} from 'react-native-router-flux';
export default class LoginComponent extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handler = (text, field) => {
        this.setState({ [field]: text });
    }
    submit = () => {
        if(this.state.username === 'sandy' && this.state.password === '')
        console.log(this.state.username, this.state.password);
    }

    render() {
        return (
            <View>
                <HeaderComponent title={'Login'} />
                <View>
                    <TextBox placeholder={'Enter User name'} valueChange={(text) => this.handler(text, 'username')} />
                    <TextBox placeholder={'Enter Password name'} valueChange={(text) => this.handler(text, 'password')} />
                </View>
                <View>
                    <TouchableOpacity style={{ height: 50, width: 200, borderColor: 'red', borderWidth: 2, alignItems: 'center', justifyContent: 'center' }} onPress={this.submit}>
                        <Text style={{ fontSize: 18 }}>Click me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}