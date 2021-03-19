import React,{useState} from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Tab from './Tab';

const {width}=Dimensions.get('screen');


const TabBar = ({state,navigation}) => {
    const [selected,setSelected]=useState('Home');
    const [large,setLarge]=useState('');
    const{routes}=state;
    

    // console.log(props)
    // console.log(state.routes)

    //If curent
    const renderColor=(currentTab)=> currentTab===selected?'cornflowerblue':'#c4d8eb'
    const imageActive=(currentTab)=> currentTab===selected?true:false;

    // console.log(state.index)

    const handlePress=(activeTab,index)=>{
        if(state.index!==index){
            setSelected(activeTab);
            navigation.navigate(activeTab)
        }
    }

    // console.log(state.routes)

    return ( 
        <View style={styles.wrappter}>
            <View style={styles.container}>
                {
                    routes.map((route,index)=>(
                    <Tab 
                    tab={route} 
                    onPress={()=>handlePress(route.name,index)} 
                    color={renderColor(route.name)} 
                    imageActive={imageActive(route.name)}
                    key={route.key}/>)
                    )
                }
            </View>
        </View>
     );
}

const styles=StyleSheet.create({
    wrappter:{
        flex:1,
        position:'absolute',
        bottom:0,
        width,
        alignItems:'center',
        justifyContent:'space-between',
        borderWidth:0,
    },
    container:{
        flex:1,
        height:50,
        flexDirection:'row',
        backgroundColor:'#FFF',
        justifyContent:'space-between',
        width,
        borderWidth:0,
        elevation:24,
        shadowOffset:{
            width:12,
            height:12,
        },
        shadowOpacity:16.00,
    }
})
 
export default TabBar;