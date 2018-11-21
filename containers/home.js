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
        const rows = this.props.subjects && this.props.subjects.map((value,i)=>{
             return<Text key={i}>{value.name}</Text>
        });
        return (
            <View>
                <HeaderComponent title={'Home'} />
                <Text style={{ fontSize: 30 }}>{this.props.details && this.props.details.username}</Text>
                <Text style={{ fontSize: 30 }}>{this.props.details && this.props.details.password}</Text>
                {rows}
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