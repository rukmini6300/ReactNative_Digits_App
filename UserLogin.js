import React, { useState } from "react";
import{View,Text,TextInput,Image, Button, TouchableOpacity} from 'react-native';
import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import Hyperlink from 'react-native-hyperlink';
import { useNavigation } from '@react-navigation/native';
//import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox';

function UserLogin(){
const[num, setNum]=useState('');
const[mail, setMail]=useState('');

const navigation=useNavigation();
const loginData=()=>{
    navigation.navigate("digits",{
        number:num,
        Email:mail,
      
    })
}
    return(
        
            <View style={styles.dt_head}>
            <Image style={styles.logo} source={require('../assets/digit.png')}/>
            <Text style={styles.text}>Welcome to Digits</Text>
            <View style={styles.input_fields}>
            <TextInput placeholder="Enter Your mobile number" style={styles.input_box} value={num} onChangeText={(text)=> setNum(text)}/>
            <Text style={{textAlign:'center',fontSize:20,marginVertical:18}}>Or</Text>
            <TextInput placeholder="Enter Your corporate email" style={styles.input_box} value={mail} onChangeText={(text)=> setMail(text)}/>
            <Text style={styles.enjoy_cont}>sign in to enjoy health benefits provided by your company</Text>
            <TouchableOpacity style={styles.btns}>
                <Button  title="Continue" color={'#f59300'} onPress={loginData}/>
            </TouchableOpacity>

            {/* <View style={{paddingTop:20}} >
                <Text style={styles.btnss} onPress={loginData}>Continue</Text>
            </View> */}

            <View style={{paddingTop:20,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                <Text style={styles.check_box}>         
                 <Icon name="check" size={16} color='#000'/>
                </Text>
                {/* //<CheckBox /> */}
                <Text style={{fontSize:14}}>I agree to the </Text>
                <Hyperlink linkDefault={true}><Text style={{color:'#6e4eed'}}>https://javascript.info/</Text></Hyperlink>
            </View>
                <Text style={styles.now_cont}>SKIP THIS NOW</Text>
                
            </View>
            <View style={styles.imges}>
                <Image  source={require('../assets/vk_thumbup.jpeg')}/>
            </View>
            
        </View>
       
    )
}
export default UserLogin;