import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {HeaderComponent} from '../components/header';
export default class HomeComponent extends Component {



    render(){
        return(
            <View>
               <HeaderComponent title={'Home'} />
            </View>
        )
    }
}