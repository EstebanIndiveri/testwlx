import React from 'react';
import { Text, View } from 'react-native';


const ErrorDefualt = ({error}) => {
    return ( 
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>{error}</Text>
        </View>
     );
}
 
export default ErrorDefualt;