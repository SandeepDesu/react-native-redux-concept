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
               <Text>{this.props.details && this.props.details.username}</Text>
               <Text>{this.props.details && this.props.details.password}</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {details:state.LoginReducer};
}



export default connect(mapStateToProps)(HomeComponent);