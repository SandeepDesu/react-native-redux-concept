import React, { Component } from 'react';
import { View } from 'react-native';
import { HeaderComponent, TextBox } from '../components/header';

export default class LoginComponent extends Component {

    constructor(){
        super();
    }

    handler = (text) => {
       console.log(text);
    }

    render() {
        return (
            <View>
                <HeaderComponent title={'Login'} />
                <View>
                    <TextBox placeholder={'Enter User name'} valueChange={this.handler}/>
                    <TextBox placeholder={'Enter Password name'} valueChange={this.handler}/>
                </View>
            </View>
        )
    }
}