import React from 'react';
import {View,Text,TextInput} from 'react-native';
const HeaderComponent = (props) => {
    return(
         <View>
             <Text style={{fontSize:30}}>{props.title}</Text>
         </View>
    )
}



const TextBox = (props) => {
    return <TextInput style={{}} placeholder={props.placeholder} value={props.value} onChangeText={props.valueChange} />
}

export {HeaderComponent, TextBox};