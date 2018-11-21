import React, { Component } from 'react';
import { View, TouchableOpacity,Text } from 'react-native';
import { HeaderComponent, TextBox } from '../components/header';

export default class LoginComponent extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    userHandler = (text) => {
        this.setState({ username: text });
    }

    passwordHandler = (text) => {
        this.setState({ password: text });
    }

    render() {
        return (
            <View>
                <HeaderComponent title={'Login'} />
                <View>
                    <TextBox placeholder={'Enter User name'} valueChange={(text) => this.userHandler(text)} />
                    <TextBox placeholder={'Enter Password name'} valueChange={(text) => this.passwordHandler(text)} />
                </View>
                <View>
                    <TouchableOpacity style={{height:50,width:200,borderColor:'red',borderWidth:2,alignItems}}>
                        <Text>Click me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}