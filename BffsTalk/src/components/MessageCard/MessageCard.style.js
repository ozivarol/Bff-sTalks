import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#c7a4ff",
        margin:6,
        borderRadius:5,
        borderWidth:0.5,
        borderColor:"white",
        

        
        
        

    },
    inner_container:{
        flex:0.5,
        flexDirection:"row",
        justifyContent:"space-between",
        padding:5,
        

        
    },
    user:{
        fontWeight:"bold",
        margin:2,
        fontStyle:"italic",
        textAlign:"left"
    },
    date:{
        textAlign:"right",
        
        marginBottom:5,
        
       
        

    },
    title:{
        textAlign:"left",
        fontSize:14,
        marginLeft:5

        
        
    },
    footer:{
        
        alignItems:"flex-end"
        
        
        
        

    },

    dislike_container:{
        flexDirection:"row",
        backgroundColor:"white",
        padding:0,
        paddingHorizontal:10,
        borderRadius:50,
        alignItems:"center",
        marginBottom:5,
        marginRight:5,
        
        
        
    },
    dislike_count_container:{
        backgroundColor:"#c7a4ff",
        borderRadius:50,
        padding:3,
        
        marginRight:3,
        
        
        

    },
    dislike_count_text:{
        color:"white",
    },
    dislike_text:{
        color:"black",
        
        
    }
})