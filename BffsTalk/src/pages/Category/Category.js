import React, { useState } from "react"
import { Dimensions, SafeAreaView, FlatList, View, Text, TouchableOpacity, Modal, Alert, ActivityIndicator,ImageBackground} from "react-native"
import styles from "./Category.style"
import Button from "../../components/Button"
import Input from "../../components/Input"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { useEffect } from "react"
import parseContentData from "../../utils/parseContentData"
import Profile from "../Profile"
import ContentInputModalStyle from "../../components/Modal/ContentInputModal"
import Screen from "../../components/screen"
const backimage = {uri:"https://cdn.shopify.com/s/files/1/0445/6817/files/digitalbgs-04.jpg?v=11713131625385953819"}

const Category = ({ navigation }) => {
    const [visible, setVisible] = useState(false)
    const [categoryName, setCategoryName] = useState("")
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(false)

    async function getCategory() {
        setLoading(true)
        const response = await database().ref('/category').on("value", snapshot => {
            const contentData = snapshot.val();
            
            const parsedData = parseContentData(contentData || {})
            setCategory(parsedData)
            setLoading(false)
        });
    }

    useEffect(() => {
        getCategory()
    }, [])
    function goToCategoryDetail(item) {
        
        navigation.navigate("CategoryDetailPage", item)
        
    }
    function renderItem({ item }) {
        return <TouchableOpacity style={styles.category} onPress={() => goToCategoryDetail(item)}><Text style={styles.title}>{item.title}</Text></TouchableOpacity>
    }
    function newCategory() {
        setVisible(!visible)
    }
    function onClose() {
        setVisible(!visible)
    }
    if (loading) {
        return <SafeAreaView style={styles.container}><ActivityIndicator color="white" /></SafeAreaView>
    }
    function addCategory() {
        const newReference = database().ref('/category').push();
        newReference.set({ id: newReference.key, title: categoryName, userId: auth().currentUser.uid })
        setCategoryName("")
        setVisible(!visible)
    }
    function goProfile(){
        navigation.navigate("ProfilePage")
    }
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={backimage}  style={styles.bckimage}>
            <View style={styles.inner_container}>
                <TouchableOpacity onPress={goProfile}> 
                 <Icon color="#e254ff" name="account-star" size={35} style={styles.icon} />

                </TouchableOpacity>
               <Text style={styles.text}>ODALAR</Text>
               <TouchableOpacity onPress={() => auth().signOut()} >
                   <Icon color="#e254ff" name="logout" size={35} style={styles.icon} />
               </TouchableOpacity>
               
            </View>
            <FlatList numColumns={2} data={category} renderItem={renderItem} keyExtractor={key => key.id} />
            <Text style={styles.plus} onPress={newCategory}>+</Text>
            <Modal animationType="slide" transparent={true} visible={visible} swipeDirection="down" >
                <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
                    <View style={{ width: Dimensions.get("window").width, backgroundColor: "white", borderRadius: 10, padding: 20 }}>
                        <TouchableOpacity style={styles.close} onPress={onClose} >
                            <Icon name="close-circle" size={30} />
                        </TouchableOpacity>
                        
                        <Input value={categoryName} onChangeText={(e) => setCategoryName(e)} placeholder="Oda adı giriniz" />
                        <Button title="Kaydet" onPress={addCategory} />
                    </View>
                </View>
            </Modal>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default Category;