import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {HeaderComponent} from '../components/header';
import {connect} from 'react-redux';
class HomeComponent extends Component {
    render(){
        console.log(this.props);
        return(
            <View>
               <HeaderComponent title={'Home'} />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}



export default connect(mapStateToProps)(HomeComponent);