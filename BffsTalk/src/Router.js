import React, { useEffect } from "react"
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./pages/Login"
import SignUp from "./pages/SignUp";
import Category from "./pages/Category";
import CategoryDetail from "./pages/CategoryDetail"
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FlashMessage from "react-native-flash-message";
import Loading from "./components/Loading";
import Profile from "./pages/Profile";
import Screen from "./components/screen";

const Stack = createNativeStackNavigator();



const Router = () => {
    const [userSession, setUserSession] = React.useState();
    
    useEffect(() => {
        auth().onAuthStateChanged(user => {
            setUserSession(!!user)
        })
    }, [])
   
    const AuthStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
                <Stack.Screen name="LoginPage" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="SignUpPage" component={SignUp} options={{ headerShown: false }} />
                
            </Stack.Navigator>
        )
    }
    const otherStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Screen" component ={Screen} options={{headerShown:false}} />
                <Stack.Screen name="CategoryPage" component={Category} options={{ title: "Odalar",headerTitleAlign: "center",headerTintColor:"#e254ff",title: "Odalar", headerShown:false,headerTintColor:"#e254ff"}} />
                <Stack.Screen name="CategoryDetailPage" component={CategoryDetail} options={{
                    headerTitleAlign: "center",
                    
                     
                     title: "test", headerShown: true,headerTintColor:"#e254ff"
                }} />
              <Stack.Screen name="ProfilePage" component={Profile} options={{ headerShown: true }} />  
            </Stack.Navigator>
            
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator >
                {
                    !userSession ? <Stack.Screen name="AuthStack" options={{ headerShown: false }} component={AuthStack} /> : <Stack.Screen name="otherStack" options={{ headerShown: false }} component={otherStack} />
                }
            </Stack.Navigator>
            <FlashMessage position="top"/>
        </NavigationContainer>)
}

export default Router