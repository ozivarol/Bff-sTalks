import React from "react";
import {View,Text,TouchableOpacity} from "react-native"
import styles from "./MessageCard.style"
import {formatDistance} from "date-fns"
import {tr} from "date-fns/locale"
import {parseISO} from "date-fns"
import  Icon  from "react-native-vector-icons/MaterialIcons";

const MessageCard = ({message,onBanane}) =>{
    const formattedDate=formatDistance(parseISO(message.date),new Date(),{
        addSuffix:true,
        locale:tr,
    })
    return(
        
            <View style={styles.message}>
                <View style={styles.inner_item}>
                    <Text style={styles.username}>{item.userName}</Text>
                    <Text style={styles.date}>{formattedDate}</Text>
                </View>
                <Text style={styles.messageText}>{item.message}</Text>
            </View>
        
        
    )
}
export default MessageCard