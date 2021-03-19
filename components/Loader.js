import React, { Fragment } from 'react';
import {ActivityIndicator, StyleSheet,Text,View } from 'react-native'

const Loader = () => {
    return ( 
    <Fragment>
    <ActivityIndicator size="large" color="cornflowerblue" />
    <Text style={{textAlign:'center'}}>Cargando</Text>
    </Fragment>
     );
}
 const styles=StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
export default Loader;