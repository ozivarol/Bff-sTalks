import React, { useState } from "react"
import { Alert, SafeAreaView, Text, TextInput, TouchableOpacity, View, Modal } from "react-native"
import Button from "../../components/Button"
import Input from "../../components/Input"
import styles from "./SignUp.style"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import authErrorMessageParser from "../../utils/authErrorMessageParser"
import { Formik } from "formik"
import { showMessage } from "react-native-flash-message"
import { ImageBackground } from "react-native"

import auth from '@react-native-firebase/auth';
const backimage = {uri:"https://cdn.shopify.com/s/files/1/0445/6817/files/digitalbgs-04.jpg?v=11713131625385953819"}

const SignUp = ({ navigation }) => {
    const [loading, setLoading] = useState(false)
    function onLogin() {
        navigation.goBack()
    }
    const initial = {
        email: "",
        password: "",
        repassword: ""
    }
   
    function handleFormSubmit(formValues) {
        setLoading(true)
        
        if(!formValues.email || !formValues.password || !formValues.repassword){
            showMessage({
                message:"Bu alan boş bırakılamaz",
                type:"danger",
                icon:"danger"
        })
        
        
            setLoading(false)
            return;
        }
        else if(formValues.password !== formValues.repassword){
            showMessage({
                message:"Şifreler uyuşmuyor",
                type:"danger",
            })
            setLoading(false)
            return
            
        }
        
        
        auth()
            .createUserWithEmailAndPassword(formValues.email, formValues.password)
            .then(() => {
                
                setLoading(false)
                navigation.goBack()
            })
            .catch(error => {
               showMessage({
                   message:authErrorMessageParser(error.code),
                   type:"danger",
                   icon:"danger"
               })
                setLoading(false)
            });
    }
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={backimage}  style={styles.bckimage}>
            <View style={styles.inner_container}>
                <Icon name="star" color="#7200ca" style={styles.icon} />
                <Text style={styles.title}>Bff'sTalk</Text>
            </View>
            <Formik initialValues={initial} onSubmit={handleFormSubmit}>
                {
                    ({ values, handleSubmit, handleChange, }) => (
                        <>
                            <View>
                                <Input onChangeText={handleChange('email')} values={values.email} placeholder="Email" icon="email" />
                                <Input secure={true} onChangeText={handleChange('password')} values={values.password} placeholder="Password" icon="key" />
                                <Input secure={true} onChangeText={handleChange('repassword')} values={values.repassword} placeholder="Password" icon="key" />
                            </View>
                            <View>
                                <Button title="KAYIT OL" onPress={handleSubmit} loading={loading} />
                                <Button title="GERİ" onPress={onLogin} />
                            </View>
                        </>
                    )
                }
            </Formik>
            </ImageBackground>   
        </SafeAreaView>
    );
}

export default SignUp;