import { StyleSheet,Dimensions } from "react-native";
const deviceSize = Dimensions.get("window")
export default StyleSheet.create({
    container:{
        backgroundColor:"white",
        padding:15,
        marginHorizontal:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        height:deviceSize.height/3,
    },
    modal:{
        justifyContent:"flex-end",
        margin:0,
    },
    input_container:{
        flex:1,
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