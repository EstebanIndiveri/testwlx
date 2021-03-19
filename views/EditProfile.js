import React,{useState} from 'react'
import { View, Text,StyleSheet, TextInput,Dimensions, ScrollView,Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import {loginUser} from '../stores/actions/user.action.js';
import {THEME_COLOR}from '../styles/Colors';
const {width}=Dimensions.get('screen');
const EditProfile = () => {
    const dispatch=useDispatch();
    const userInfo=useSelector(state=>state.userReducer);
    const {isLoading,authenticate,users}=userInfo;
    const {name,lastname,email}=users
    const [FirstName, setFirstName] = useState(name);
    const [lastName, onChangeLastName] =useState(lastname);
    const [mail,setMail]=useState(email)
    return ( 
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.titleSettings}>Edit you profile </Text>
            <View style={styles.containerInputs}>
                <View>
                    <Text style={styles.labelInput}>Nombre</Text>
            <TextInput
                placeholder='Your Name'
                style={styles.input}
                onChangeText={setFirstName}
                value={FirstName}
            />
            </View>

            <View style={{marginTop:10}}>
                <Text style={styles.labelInput}>Apellido</Text>
            <TextInput
                placeholder='Your Name'
                style={styles.input}
                onChangeText={onChangeLastName}
                value={lastName}
            />
            </View>
            <View style={{marginTop:10}}>
                <Text style={styles.labelInput}>Email</Text>
            <TextInput
                placeholder='Your Email'
                style={styles.input}
                onChangeText={setMail}
                value={mail}
            />
            </View>
            </View>
            <Button onPress={()=>console.log('press')} disabled={true} title="Save my profile"/>
        </View>
        </ScrollView>
     );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
    },
    input:{
        borderColor:THEME_COLOR.BEEN_GRAY,
        width,
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
    },
    titleSettings:{
        marginTop:20,
        fontSize:25,
        fontFamily:'Montserrat-Regular',
        color:THEME_COLOR.BLACK,
    },
    containerInputs:{
        flexDirection:'column',
        justifyContent:'space-between',
        width,marginTop:50
    },
    labelInput:{
        textAlign:'left',
        marginLeft:18
    }
});
 

export default EditProfile
