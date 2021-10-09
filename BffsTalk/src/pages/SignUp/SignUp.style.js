import { StyleSheet,Dimensions } from "react-native"
const device = Dimensions.get("window")

const styles = StyleSheet.create({
    container:{
        
        
        flex:1,
        backgroundColor:"white",
        justifyContent:"center"
    },
    icon:{
        fontSize:50
    },
    inner_container:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:30,
        marginRight:20,
        
        
        
    },
    title:{
        color:"#e254ff",
        fontSize:50,
        paddingLeft:10,
        fontWeight:"bold"
    },
    bckimage:{
        
        height:device.height*1,
        width:device.width*1,
        flex:1,
        justifyContent:"center"
        
        
       
    }
})

export default styles