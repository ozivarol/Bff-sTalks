import React, { useState } from "react"
import {SafeAreaView, Text,  View,ImageBackground} from "react-native"
import Button from "../../components/Button"
import Input from "../../components/Input"
import styles from "./Login.style"
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
import { Formik } from "formik"
import authErrorMessageParser from "../../utils/authErrorMessageParser"
import { showMessage } from "react-native-flash-message"

const backimage = {uri:"https://cdn.shopify.com/s/files/1/0445/6817/files/digitalbgs-04.jpg?v=11713131625385953819"}

const Login = ({ navigation }) => {
    const [loading,setLoading] = useState(false)
    const initial = {
        email: "",
        password: "",
    }
     
    function handelSignUp(formValues){
        if (formValues.email == "" && formValues.password == "" ){
            showMessage({
                message:"Tekrar dene",
                type:"danger"
            })
        }
        
        navigation.navigate("SignUpPage")
    }
   
   async function handelFormSubmit(formValues){
    if(!formValues.email || !formValues.password){
        showMessage({
            message:"Bu alan boş bırakılamaz",
            type:"danger",
            icon:"danger"
        })
        setLoading(false)
        return;
    }
    
    try {
           setLoading(true)
            await auth().signInWithEmailAndPassword(formValues.email,formValues.password)
            

           setLoading(false)
           
        }
        catch (error) {
           
           
            showMessage({
                message:authErrorMessageParser(error.code),
                type:"danger",
                icon:"danger"

                

            })
            setLoading(false)
            
        }


    }
    return (
        <SafeAreaView style={styles.container}>
            
            <ImageBackground  source={backimage}  style={styles.bckimage}>
            <View style={styles.inner_container}>
                <Icon name="star" color="#7200ca" style={styles.icon} />
                <Text style={styles.title}>Bff'sTalk</Text>
            </View>
            <Formik initialValues={initial} onSubmit={handelFormSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <View>
                            <Input onChangeText={handleChange('email')} values={values.email} placeholder="Email" icon="email" />
                            <Input secure={true} onChangeText={handleChange('password')} values={values.password} placeholder="Password" icon="key" />
                        </View>
                        <View>
                            <Button loading={loading} title="GİRİŞ YAP" onPress={handleSubmit} />
                            <Button title="KAYIT OL" onPress={handelSignUp} />
                        </View>
                    </>
                )}
            </Formik>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Login