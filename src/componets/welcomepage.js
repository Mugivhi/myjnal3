import { View, Text,TouchableOpacity,TextInput,StyleSheet,Alert } from 'react-native'
import React,{useRef,useState} from 'react';
import {FirebaseRecaptchaVerifierModal} from 'expo-firebase-recaptcha';
import { firebaseConfig } from '../../firebase.js';
import firebase from 'firebase/compat/app';

const Otp = ({navigation}) => {
  const [phoneNo,setPhone]=useState('');
  const [code,setCode]=useState('');
  const [veriId,setId]=useState(null);
  const recaptcharVerifier=useRef(null);
  const sendVeri =()=>{
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider.verifyPhoneNumber(phoneNo,recaptcharVerifier.current).then(setId);
    setPhone('');
  };
const confirmCode=()=>{
    const credential = firebase.auth.PhoneAuthProvider.credential(
        veriId,
        code
    );
    firebase.auth().signInWithCredential(credential).then(()=>{
        setCode('');
    })
    .catch((error)=>{
        alert(error);
    })
    if(code ===""){
       alert('add phoe no and code')
        return;
    }
    else if (code.length<6){
        Alert.alert('enter correct code')
        return;
    }
    else {
        navigation.navigate('Landingpage')
    }
    
}
return(
    <View style={styles.container}>
        <FirebaseRecaptchaVerifierModal
        ref={recaptcharVerifier}
        firebaseConfig={firebaseConfig}
        />
        <Text style={styles.otpText}>
            Login with phone no
        </Text>
        <TextInput
        placeholder='phone with country code'
        onChangeText={setPhone}
        style={styles.textInput}
        />
        <TouchableOpacity style={styles.sendVeri}
        onPress={sendVeri}>
            <Text style={styles.buttonText}>
                send verification
            </Text>
        </TouchableOpacity>
        <TextInput
        placeholder='confirm code'
        onChangeText={setCode}
        style={styles.textInput}
        />
         <TouchableOpacity style={styles.sendCode}
        onPress={confirmCode}>
            <Text style={styles.buttonText}>
                verify
            </Text>
        </TouchableOpacity>
    </View>
)
}

export default Otp;
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'whitesmoke',
        alignItems:'center',
        justifyContent:'center'
    },
    textInput:{
        paddingTop:20,
        paddingBottom:20,
        paddingHorizontal:20,
        fontSize:24,
        borderWidth:2,
        marginTop:20,
        marginBottom:20,
        textAlign:'center',
        color:'blue'
    },
    sendVeri:{
        padding:20,
        backgroundColor:'#3498db',
        borderRadius:10
    },
    sendCode:{
        padding:20,
        backgroundColor:'#3498db',
        borderRadius:10
    },
    buttonText:{
        textAlign:'center',
        color:'white',
        fontWeight:'bold',
    },
    otpText:{
        fontSize:24,
        fontWeight:'bold',
        color:'grey',
        margin:20
    }
});