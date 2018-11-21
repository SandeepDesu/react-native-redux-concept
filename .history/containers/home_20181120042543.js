import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {HeaderComponent} from '../components/header';
import {connect} from 'react-redux';
class HomeComponent extends Component {
    render(){
        return(
            <View>
               <HeaderComponent title={'Home'} />
            </View>
        )
    }
}


export default connect()(HomeComponent);