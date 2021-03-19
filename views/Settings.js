
import React,{useState,useEffect} from 'react';
import {Button, StyleSheet, Text, View,Image, Dimensions, TouchableWithoutFeedback,Animated,Alert, Modal, Pressable, TouchableNativeFeedback } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
const {width}=Dimensions.get('screen');
import { logoutUser } from '../stores/actions/user.action.js';
import {THEME_COLOR}from '../styles/Colors';

const SettingScreen = ({navigation}) => {
  const dispatch=useDispatch();
  const userInfo=useSelector(state=>state.userReducer);
  const {isLoading,authenticate,users}=userInfo;
  const {name,lastname,email}=users
  const [animation,setAnimation]=useState(new Animated.Value(0));
  const [animated]=useState(new Animated.Value(1));
  const [modalQa, setModalQa] = useState(false);
  const [modalContact, setModalContact] = useState(false);
  useEffect(()=>{
      Animated.timing(
          animation,{
              toValue:1,
              duration:500,
              useNativeDriver:true,
          },
      ).start();
  },[])

const pressBtn=()=>{
    Animated.spring(animated,{
        toValue:.9,
        useNativeDriver:true,
    }).start();
}
const leaveBtn=()=>{
  setTimeout(() => {
    navigation.navigate('EditProfile')
  }, 300);
    Animated.spring(animated,{
        toValue:1,
        friction:4,
        tension:30,
        useNativeDriver:true,
    }).start()
}
const modalPress=()=>{
    setModalQa(true);
}
const modalContactPress=()=>{
    setModalContact(true);
}
const handlePress=()=>{
  Alert.alert(
    "Log Out",
    "¿Are you sure logout?",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => dispatch(logoutUser()) }
    ]
    );
};

const styleAnimated={
    transform:[{scale:animated}]
}

    return ( 
        <ScrollView style={{flex:1}}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalQa}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalQa(!modalQa);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}> Hello! What can we help you with?:</Text>
            <View
            style={styles.modalContent}
            >
            <Text style={styles.modalTextItem}>About the application</Text>
            <Text style={styles.modalTextItem}>Check in, reserve and check out books</Text>
            <Text style={styles.modalTextItem}>Promotions and withdrawals</Text>
            <Text style={styles.modalTextItem}>Plans and Subscription</Text>
            </View>
            <Pressable
              style={[styles.btn]}
              onPress={() => setModalQa(!modalQa)}
            >
              <Text style={styles.modalBtnText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalContact}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalContact(!modalContact);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>How to contact:</Text>
            <View
            style={styles.modalContent}
            >
            <Text style={styles.modalTextItem}>Tel: +543512694707</Text>
            <Text style={styles.modalTextItem}>Email: esteban.indiveri@gmail.com</Text>
            <Text style={styles.modalTextItem}>Dir: Calle falsa 123</Text>
            <Text style={styles.modalTextItem}>Schedule: Lun - Fri 08:00hs - 18:00hs</Text>
            </View>
            <Pressable style={[styles.btn]} onPress={() => setModalContact(!modalContact)}>
              <Text style={styles.modalBtnText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

        <Animated.View style={styles.container,{opacity:animation}}>
            {isLoading&&<Loader/>}
            <View style={styles.profileContainer} >
                <Image source={require('../assets/General/img_user2.png')} style={{height:135,width:135}}/>
                <Text style={styles.text}>{name} {lastname}</Text>
            </View>
            <View style={{marginTop:20,width}}>
                <View style={styles.btnContainer}>
                    <TouchableWithoutFeedback
                        onPressIn={()=>pressBtn()}
                        onPressOut={()=>leaveBtn()}
                    >
                        <Animated.View style={[styles.btn,styleAnimated]}>
                        <Text style={styles.btnText}>Your Data</Text>
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.ContainerTouch}>

                <TouchableNativeFeedback onPressIn={modalPress}>
                <View style={styles.ContainerItem}>
                    <Text style={styles.textItem}>frequent questions</Text>
                    <Text style={styles.iconArrow}> &gt; </Text>
                </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                onPressIn={modalContactPress}
                >
                <View style={styles.ContainerItem}>
                    <Text style={styles.textItem}>Contact</Text>
                    <Text style={styles.iconArrow}> &gt; </Text>
                </View>
                </TouchableNativeFeedback>
                </View>
                <Text style={styles.vesionText}>version:1.0</Text>
            </View>
            <View style={styles.containerLogout}>
                        <TouchableWithoutFeedback
                        onPressIn={()=>handlePress()}
                        >
                        <View >
                        <Text style={styles.btnTextLogout}>Log Out</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
        </Animated.View>
        </ScrollView>
     );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:THEME_COLOR.BLACK,
        marginTop:10,
        textAlign:'center'
    },
    profileContainer:{
        marginTop:40,
        justifyContent:'center',
        alignItems:'center'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#FFF",
        padding: 10,
        borderRadius:100,
        width:100,
        marginHorizontal:'auto',
        marginLeft:'auto',
        marginRight:'auto'
      },
    btnContainer:{
        alignItems:'center'
    },
    btn:{
        backgroundColor:THEME_COLOR.SECONDARY,
        width:370,
        borderRadius:100,
        height:50,
        justifyContent:'center',
        alignItems:'center'
    },
    btnText:{
        color:THEME_COLOR.WHITE,
        fontWeight:'bold',
        fontSize:23
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'rgba(0,0,0,0.8)',
      },
      modalText: {
        marginBottom: 15,
        fontSize:22,
        fontWeight:'bold',
        textAlign: "center",
        width
      },
      modalView: {
        margin: 20,
        color:THEME_COLOR.WHITE,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      modalContent:{
        textAlign:'justify',
        marginTop:20,
        width,
        paddingHorizontal:20,
        marginBottom:20
      },
      modalTextItem:{
        marginBottom:10,
        fontSize:16
      },
      modalBtnText:{
        color:THEME_COLOR.WHITE,
        fontSize:18
      },
      ContainerTouch:{
      marginTop:40,
      height:90,
      justifyContent:'space-between',
      },
      ContainerItem:{
        borderBottomWidth:1,
        borderBottomColor:THEME_COLOR.BEEN_GRAY,
        paddingBottom:5,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        borderRadius:100,
        marginHorizontal:15
      },
      textItem:{
        fontSize:17,
        color:THEME_COLOR.BLACK
      },
      iconArrow:{
        fontSize:28,
        color:THEME_COLOR.LIGHT_BLUE
      },
      vesionText:{
      marginTop:40,
      color:THEME_COLOR.BLACK,
      marginLeft:15
      },
      containerLogout:{
        justifyContent:'center',
        alignContent:'flex-end',
        height:200,
        alignItems:'center'
      },
      btnTextLogout:{
        color:THEME_COLOR.SECONDARY,
        fontSize:19,
        fontWeight:'bold'
      }
});
 
export default SettingScreen;