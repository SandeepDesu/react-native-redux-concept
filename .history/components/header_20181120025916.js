import React from 'react';
import {View,Text} from 'react-native';
const HeaderComponent = (props) => {
    return(
         <View>
             <Text style={{fontSize:}}>{props.title}</Text>
         </View>
    )
}


export {HeaderComponent};