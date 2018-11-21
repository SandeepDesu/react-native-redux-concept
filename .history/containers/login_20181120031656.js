import React, { Component } from 'react';
import { View } from 'react-native';
import { HeaderComponent, TextBox } from '../components/header';

export default class LoginComponent extends Component {

    constructor(){
        super();
        this.state = {
            username:'',
            password:''
        }
    }

    handler = (text,field) => {
        console.log(text,field)
       this.setState({[field]:text});
    }

    render() {
        return (
            <View>
                <HeaderComponent title={'Login'} />
                <View>
                    <TextBox placeholder={'Enter User name'} valueChange={(text) => this.handler(text,'username')}/>
                    <TextBox placeholder={'Enter Password name'} valueChange={(text) =>this.handler(text,'password')}/>
                </View>
            </View>
        )
    }
}