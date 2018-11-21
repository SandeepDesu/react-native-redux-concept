import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { HeaderComponent } from '../components/header';
import { connect } from 'react-redux';
import { getSubjectList } from '../actions/login';
class HomeComponent extends Component {
   
    componentDidMount() {
        this.props.getList();
    }

    render() {
        const rows = this.props.
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
    return { details: state.LoginReducer,subjects:state.HomeReducer.subjects };
}


const mapDispatchToProps = (dispatch) => {
    return {
        getList: () => dispatch(getSubjectList())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);