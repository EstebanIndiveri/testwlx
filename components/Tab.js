import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity} from 'react-native';


const Tab = ({color,tab,onPress,imageActive}) => {
    
    
    return ( 
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {
                tab.name==='Home'?
                (<Image source={!imageActive?require('../assets/Tool_bar/ic_library.png'):require('../assets/Tool_bar/ic_library_active.png')} style={styles.img}/>)
                :tab.name==='WishList'?
                (<Image source={
                  !imageActive?
                  require('../assets/Tool_bar/ic_wishlist.png')
                  :require('../assets/Tool_bar/ic_wishlist_active.png')} style={styles.img}/>)
                  :tab.name==='AddNew'?
                  (<Image source={!imageActive?require('../assets/Tool_bar/ic_add_new.png'):require('../assets/Tool_bar/ic_add_new_active.png')} style={styles.img}/>):
                tab.name==='Rentals'?
                (<Image source={
                    !imageActive?
                    require('../assets/Tool_bar/ic_myrentals.png'):
                    require('../assets/Tool_bar/ic_myrentals_active.png')
                }style={styles.img}/>)
                :tab.name==='Settings'?
                (<Image source={
                    !imageActive?
                    require('../assets/Tool_bar/ic_settings.png'):
                    require('../assets/Tool_bar/ic_settings_active.png')

                }style={styles.img}/>)
                :null
            }
            <Text style={{color}}>{tab.name}</Text>
        </TouchableOpacity>
     );
}
 const styles=StyleSheet.create({
     container:{
         flex:1,
         alignItems:'center',
         justifyContent:'center',
     },
     img:{
         flex:1,
         width:30,
         marginTop:3
     },

 })
export default Tab;
