import React from "react";
import LottieView from "lottie-react-native"
import {View,Text,ImageBackground} from "react-native"
import styles from "../Loading/Loading.style"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const backimage = {uri:"https://cdn.shopify.com/s/files/1/0445/6817/files/digitalbgs-04.jpg?v=11713131625385953819"}
function Loading({navigation}){
    function go(){
        navigation.navigate("LoginPage")
    }
    return (
        
                <View style={styles.container}>
                        <View style={styles.inner_container}>
                            <Icon name="star" color="#7200ca" size={50} style={styles.icon} />
                            <Text style={styles.text}>Bff'sTalk</Text>
                        </View>
                
                        <LottieView source={require("../../asset/loading.json")} autoPlay={true} loop={false} onAnimationFinish={go}  style={styles.animation}/>
                
                </View>
       
        
    )
    
}


export default Loading