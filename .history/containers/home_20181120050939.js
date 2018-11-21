import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { HeaderComponent } from '../components/header';
import { connect } from 'react-redux';
import { getSubjectList } from '../actions/login';
class HomeComponent extends Component {
   
   state

    componentDidMount() {
        this.props.getList();
    }

    render() {
        console.log(this.props);
        return (
            <View>
                <HeaderComponent title={'Home'} />
                <Text style={{ fontSize: 30 }}>{this.props.details && this.props.details.username}</Text>
                <Text style={{ fontSize: 30 }}>{this.props.details && this.props.details.password}</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return { details: state.LoginReducer };
}


const mapDispatchToProps = (dispatch) => {
    return {
        getList: () => dispatch(getSubjectList())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);