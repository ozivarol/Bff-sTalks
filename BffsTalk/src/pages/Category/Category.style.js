import {Dimensions, StyleSheet} from "react-native"
const device = Dimensions.get("window")
const styles = StyleSheet.create({
    container:{
        
        backgroundColor:"#e254ff",
        flex:1,
        position:"relative"
    },
    category:{
        flex:1,
        height:200,
        backgroundColor:"#7200ca",
        margin:10,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
    },
    title:{
        color:"white",
        fontWeight:"bold",
        textAlign:"center",
        fontSize:30
    },
    plus:{
        position:"absolute",
        bottom:10,right:10,
        backgroundColor:"#7200ca",
        width:70,
        height:70,
        borderRadius:50,
        borderWidth:1,
        borderColor:"white",
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        lineHeight:65,
        color:"white",
        fontSize:40,
        fontWeight:"bold"
    },
    close:{
        textAlign:"right",
        justifyContent:"flex-end",
        alignItems:"flex-end",
        position:"absolute",right:0,top:0
    },
    bckimage:{
        
        height:device.height*1,
        width:device.width*1,
        flex:1,
        justifyContent:"center"
        
        
       
    },
    profile:{
        textAlign:"left",
        justifyContent:"flex-end",
        alignItems:"flex-end",
        position:"absolute",right:0,top:0

    },
    inner_container:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    text:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize:25,
        color:"#7200ca"

    },
    
})

export default styles