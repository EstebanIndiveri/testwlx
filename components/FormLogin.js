import React, { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View,Text,Button,Alert} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from 'react-redux';
import {loginUser} from '../stores/actions/user.action.js';

const FormLogin = () => {

  const dispatch=useDispatch();
  const userInfo=useSelector(state=>state.userReducer);
  const {isLoading,authenticate}=userInfo;
  
  console.log(authenticate);
  const [name,setName]=useState('');
    const [lastname,setLastname]=useState('');
    const [email,setEmail]=useState('');
    const [checked,setChecked]=useState(false);
    const [birthday,setBirthday]=useState(null);
    const [noPass,setPass]=useState(false);
    const user={
      name,
      lastname,
      email,
      checked,
      birthday
    }
    // validate:
    function ValidateEmail(mail) 
      {
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
        {
          return true;
        }
          Alert.alert(
            "Invalid Email",
            "You have enter a valid email address!"
            )
          return false;
      }
      function validateEmpty(string){
        if(string===''){
          Alert.alert(
            'Invalid Input',
            'You need complete all inputs!'
          )
          return false;
        }else{
          return true;
        }
      }
      function validateChecked(check){
        if(check===null||check===false){
          Alert.alert(
            'Invalid Input',
            'You need complete all inputs!'
          )
          return false;
        }else{
          return true;
        }
      }
      
    const onSub=()=>{
      if(validateEmpty(name)&&validateEmpty(lastname)&&ValidateEmail(email)&&validateChecked(checked)){
      console.log('paso');
      setPass(false);
      console.log(user);
     dispatch(loginUser(user))
      }else{
        console.log('no today')
        setPass(true);
      }
    }
    // State Date picker and modal
    const [date, setDate] = useState(new Date(1616098014754));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    // Date time picker
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        const datins=date.toUTCString();
        const day=datins.split(" ")[1];
        const month=datins.split(" ")[2]
        const year=datins.split(" ")[3]
        const totalDate=`${day} ${month} ${year}`
        setBirthday(totalDate);
      };
    const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
    };

    const showDatepicker = () => {
    showMode('date');
    };

    const showTimepicker = () => {
    showMode('time');
    };

    return ( 
        <View>
            <TextInput 
            style={styles.input}
            onChangeText={setName}
            onChange={()=>setPass(false)}
            value={name}
            placeholder="Your Name"
            keyboardType="name-phone-pad"
            />
            <TextInput 
            style={styles.input}
            onChangeText={setLastname}
            value={lastname}
            onChange={()=>setPass(false)}
            placeholder="Your Lastname"
            keyboardType="name-phone-pad"
            />
            <TextInput 
            style={styles.input}
            onChangeText={setEmail}
            onChange={()=>setPass(false)}
            textContentType="emailAddress"
            value={email}
            placeholder="Your Email"
            keyboardType="email-address"
            />
         <TouchableOpacity onPressIn={showDatepicker}>
             <View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Text style={{textAlign:'center',color:'cornflowerblue',fontSize:18,fontFamily:'Merriweather-Regular',padding:10,marginTop:20,borderColor:'#e1e1e1',backgroundColor:'#FFF',borderRadius:10,width:'90%'}}>
                Select your birthday 
                </Text>
             </View>
        </TouchableOpacity>
        <View>
        </View>
         {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
        )}
          {
            birthday&&
            <View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <Text style={{textAlign:'center',fontSize:20}}>{birthday}</Text>
            </View>
          }
      <View style={{justifyContent:'center',alignItems:'center',marginTop:30}}>
        <BouncyCheckbox
          //   isChecked
          isChecked={checked}
          textColor="#000"
          fillColor="cornflowerblue"
          text="I agree to terms and conditions"
          onPress={() =>{
            setChecked(!checked) 
            setPass(false)
          }}
          borderColor="#e1e1e1"
          fontFamily="Merriweather-Regular"
          textDecoration="false"
          />
        </View>
        <View style={{justifyContent:"center",alignIntems:"center",flexDirection:"row",width:'100%'}}> 
          <Button
          onPress={onSub}  
          disabled={noPass}        
          title="Sign in"
          />
        </View>
        </View>
     );
}
const styles=StyleSheet.create({
  input:{
      height:50,
      margin:12,
      padding:10,
      fontSize:12,
      borderRadius:20,
    borderWidth:1,
    borderColor:"#e1e1e1",
    elevation:4,
    backgroundColor:"#FFF",
  }  
})
 
export default FormLogin;