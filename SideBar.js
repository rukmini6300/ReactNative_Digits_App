import React,{useRef,useState} from "react";
import { View,Text,DrawerLayoutAndroid,Button } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
const SideBar=()=>{
    const drawer = useRef(null);
    const [drawerPosition, setDrawerPosition] = useState('left');
    // const changeDrawerPosition = () => {
    //     if (drawerPosition === 'left') {
    //       setDrawerPosition('right');
    //     } else {
    //       setDrawerPosition('left');
    //     }
    //   };
      const navigationView = () => (
        <View style={{marginTop:80}}>
          <Text >I'm in the Drawer!</Text>
          
        </View>
      )    
    return(
        <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        renderNavigationView={navigationView}
   
        drawerPosition={drawerPosition}
        >
            <View style={{marginTop:80}}>
           <Icon name='align-justify' size={25} onPress={() => drawer.current.openDrawer()} />
        </View>
        </DrawerLayoutAndroid>
    )
}
export default SideBar