import React from 'react'
import { View, Text,StyleSheet,Image,Dimensions } from 'react-native'

const {width} = Dimensions.get('window');

const ratio = width / 375; //375 is actual image width

const Header = () => {
    return (
    <Image
    style={width<500? styles.image:styles.imageBig}
    source={require('../assets/General/bc_nav_bar.png')}
    resizeMode={!width<500?"stretch":'contain'}
    resizeMethod='resize'
  />
);
}
const styles=StyleSheet.create({
    header:{
    width:'100%',
    height:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    },
    headerText:{
        fontWeight:'bold',
        fontSize:30,
        color:'white',
        letterSpacing:1,
    },
    image: {
        width: width,
        height: 102 * ratio, //102 is actual height of image
        // backgroundColor:'cornflowerblue',
      },
      imageBig: {
        width: width,
        height:100,
        // display:'flex',
        // flexDirection:'row',
        // flex:1,
        // backgroundColor:'cornflowerblue',
      },
})

export default Header


export const BackButton=()=>{

}