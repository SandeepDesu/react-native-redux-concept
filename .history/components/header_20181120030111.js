import React from 'react';
import {View,Text,in} from 'react-native';
const HeaderComponent = (props) => {
    return(
         <View>
             <Text style={{fontSize:30}}>{props.title}</Text>
         </View>
    )
}



const TextBox = () => {

}

export {HeaderComponent};