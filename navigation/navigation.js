import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import Forgotpassword from "../screen/Forgotpassword";
import Login from "../screen/Login";


const Stack= createNativeStackNavigator();
function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" 
                component={Login}
                options={{ title: 'Signup',  headerShown: false }}
                />
                <Stack.Screen name="Forgotpassword" 
                component={Forgotpassword}
                options={{ title: 'Signup',  headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;