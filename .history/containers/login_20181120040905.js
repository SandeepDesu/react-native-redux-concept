import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { HeaderComponent, TextBox } from '../components/header';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
class LoginComponent extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            message:''
        }
    }

    handler = (text, field) => {
        this.setState({ [field]: text });
    }
    submit = () => {
        if(this.state.username === 'sandy' && this.state.password === 'desu'){
            Actions.home();
        }else{
           this.setState({message:'Invalid data'});
        }
        
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
                    <Text style={{fontSize:20,color:'red'}}>{this.state.message}</Text>
                </View>
            </View>
        )
    }
}

export default connect()(LoginComponent);