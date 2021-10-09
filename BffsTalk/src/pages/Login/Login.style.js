import {StyleSheet,Dimensions} from "react-native"
const device = Dimensions.get("window")

export default StyleSheet.create({
    container:{
        
        flex:1,
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
        marginRight:10,
        
        
    },
    title:{
        color:"#e254ff",
        fontSize:50,
        paddingLeft:10,
        fontWeight:"bold"
    },
    bckimage:{
        
        width:"100%",
        height:"100%",
       
        justifyContent:"center"
        
        
       
    }
})