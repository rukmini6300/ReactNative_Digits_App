
import { Text, View,Image , Button,  DrawerLayoutAndroid, } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Card} from 'react-native-shadow-cards';
import React, {useRef, useState} from 'react';
    function Policies() { 
      const drawer = useRef(null);
      const [drawerPosition, setDrawerPosition] = useState('left');

      const navigationView = () => (
        <View style={{marginTop:80,padding:10}}>
          <Text >I'm in the Drawer!</Text>
          
        </View>
      )
        return ( 
          <DrawerLayoutAndroid
          ref={drawer}
          drawerWidth={300}
          renderNavigationView={navigationView}
          drawerPosition={drawerPosition}
          >
         <View style={styles.dt_head}>
        <View style={styles.header}>
    
         <Icon name='align-justify' size={25} onPress={() => drawer.current.openDrawer()} />
   
      <Image style={styles.logo1} source={require('../assets/4.png')} />
    </View>
    <View style={styles.policy_head}>
      <Text style={{fontSize:18,fontWeight:'bold',paddingBottom:10}}>My Policies</Text>
      <View style={styles.link_head}>
        <Icon name='plus' size={18} color='#000' />
        <Text style={styles.link_cont}>Link Policy</Text>
      </View>
    </View>
    <View style={styles.insurance_head}>
      <Card style={styles.cont}>
        <View style={styles.insurance_cont}>
          <Text style={{fontSize:18,fontWeight:'bold'}}>Switch to the Simpler Insurance</Text>
          <View style={styles.list}>
            <View style={{paddingRight:10,alignItems:'center'}}>
              <Icon name='car' size={20} style={{paddingBottom:8}} />
              <Text>Car </Text>
              <Text>Insurance</Text>
              <Text style={{color:'#1cfc03',fontSize:12}}>pay As You Drive</Text>
            </View>
            <View style={{paddingRight:10,alignItems:'center'}}>
              <Icon name='heart' size={20} style={{paddingBottom:8}} />
              <Text>Health</Text>
              <Text> Insurance</Text>
            </View>
            <View style={{paddingRight:10,alignItems:'center'}}>
              <Icon name='motorcycle' size={20} style={{paddingBottom:8}} />
              <Text>Bike</Text>
              <Text> Insurance</Text>
            </View>
            <View style={{paddingLeft:6,alignItems:'center'}}>
              <Icon name='ambulance' size={20} style={{paddingBottom:8}} />
              <Text>Commerical</Text>
              <Text>Vechicles</Text>
            </View>
          </View>
          <View style={styles.list}>
            <View style={{paddingRight:10,alignItems:'center'}}>
              <Icon name='fighter-jet' size={20} style={{paddingBottom:8}} />
              <Text>International </Text>
              <Text>travel</Text>
              <Text style={{color:'#1cfc03',fontSize:12,paddingBottom:20}}>Cover Covid 19</Text>
            </View>
            <View style={{paddingRight:10,alignItems:'center'}}>
              <Icon name='angle-double-up' size={24} style={{paddingBottom:8}} />
              <Text>Health</Text>
              <Text> Insurance</Text>
            </View>
            <View style={{paddingRight:10,alignItems:'center'}}>
              <Icon name='motorcycle' size={20} style={{paddingBottom:8}} />
              <Text>Bike</Text>
              <Text> Insurance</Text>
            </View>
            <View style={{paddingLeft:6,alignItems:'center'}}>
              <Icon name='home' size={20} style={{paddingBottom:8}} />
              <Text>Commerical</Text>
              <Text>Vechicles</Text>
            </View>
          </View>
        </View>
      </Card>
      <View style={styles.all_cont}>
        <Text style={{fontSize:15,paddingRight:10,color:'#545454'}}>View All products</Text>
        <Icon name="chevron-right" size={14} style={{ textAlignVertical:'center',color:'#545454'}} />
      </View>
      <Image source={require('../assets/health.jpeg')} style={{marginTop:20,borderRadius:6}} />
      
    </View>
   
  </View> 

           </DrawerLayoutAndroid>
  ) 
} 
export default Policies