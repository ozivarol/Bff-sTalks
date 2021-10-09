import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
      flexDirection:"row",  
      backgroundColor:"#e254ff",
      alignItems:"center",
      
      borderRadius:5,
      marginBottom:10,
      marginTop:10
    },
    input:{
        color:"white",
        paddingRight:20,
        paddingLeft:20,
        flex:1,
    },
    placeholder:{
        color:"#7200ca",
    },
    icon:{
        color:"white",
        fontSize:18
    }
})

export default styles