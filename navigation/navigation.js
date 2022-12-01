import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import Forgotpassword from "../screen/Forgotpassword";
import Homepage from "../screen/homepage";
import Login from "../screen/Login";
import Signup from "../screen/Signup";
import { Ionicons } from '@expo/vector-icons';
import TrendingEvent from "../screen/TrendingEvent";
import EventDetails from "../screen/EventDetails";
import Ticket from "../screen/Ticket";


const Stack= createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function TabNavigation() {
    return (
      <Tab.Navigator initialRouteName="Eventhome"
      screenOptions={{
        tabBarActiveTintColor: 'rgba(72, 130, 101, 0.5)',
        tabBarShowLabel: false,
      }} >
        
          <Tab.Screen
            name="Eventhome"
            component={Homepage}
            options={{ title: 'Eventhome', tabBarActiveTintColor: 'rgba(72, 130, 101, 0.5)',  headerShown: false, tabBarIcon: ({focused}) => {
              return <Ionicons name="ios-home" size={30} color={focused ? "rgb(116,131,237)" : "rgb(255,255,255)"} />
              },
           }}
          />
          
        </Tab.Navigator>
    );
  }


function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" 
                component={Login}
                options={{ title: 'Signin',  headerShown: false }}
                />
                <Stack.Screen name="Forgotpassword" 
                component={Forgotpassword}
                options={{ title: 'ForgotPassword',  headerShown: false }}
                />
                <Stack.Screen
          name="Dashboard"
          component={TabNavigation}
          options={{ title: 'Signin',  headerShown: false }}
        />
                <Stack.Screen name="SignUp" 
                component={Signup}
                options={{ title: 'SignUp',  headerShown: false }}
                />
                <Stack.Screen
          name="TrendingEvent"
          component={TrendingEvent}
          options={{ title: 'Trending Event',  headerShown: false }}
        />
        <Stack.Screen
          name="EventDetails"
          component={EventDetails}
          options={{ title: 'Trending Event',  headerShown: false }}
        />
        <Stack.Screen
          name="Ticket"
          component={Ticket}
          options={{ title: 'Trending Event',  headerShown: false }}
        />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;