import React,{useState} from "react";

import { View,Text, SafeAreaView ,StyleSheet ,Dimensions,ScrollView,Image} from "react-native";

const images=[
  'https://www.shutterstock.com/image-vector/application-smartphone-business-graph-analytics-260nw-1583248045.jpg',
  'https://www.shutterstock.com/image-photo/digital-technology-software-development-concept-260nw-2111828198.jpg',
  'https://images.yourstory.com/cs/1/b3cc3444ab5e11e88691f70342131e20/Whatissoftwareandtypesofsoftwarewithexamples1575272423828jpg'
]

const WIDTH=Dimensions.get('window').width;
const HEIGHT=Dimensions.get('window').height;
const Shadow=()=>{
  const[imgActive,setimgActive]=useState(0);

  onchange=(nativeEvent)=>{
    if(nativeEvent){
      const slide=Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if(slide !=imgActive){
        setimgActive(slide);
      }
    }
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
        onScroll={({nativeEvent})=>onchange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={styles.wrap}
        >
          {
            images.map((e,index)=>
            <Image 
            key={e}
            resizeMode='stretch'
            style={styles.wrap}
            source={{uri:e}}
            />
            )
          }
        </ScrollView>
        <View style={styles.wrapDot}>
          {
            images.map((e,index)=>
            <Text
            key={e}
            style={imgActive==index ? styles.dotActive : styles.dot}
            >
               ●
            </Text>
            )
          }
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    marginTop:100
  },
  wrap:{
    width:WIDTH,
    height:HEIGHT*0.25
  },
  wrapDot:{
    position:'absolute',
    bottom:6,
    flexDirection:'row',
    alignSelf:'center'
  },
  dotActive:{
    margin:3,
    color:'#fff'
  },
  dot:{
    margin:3,
    color:'#888'
  }
})
export default Shadow;
