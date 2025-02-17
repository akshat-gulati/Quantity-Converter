import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import QuantityHome from './Screens/QuantityHome';
import WeightScreen from './Screens/WeightScreen';
import TemperatureScreen from './Screens/TemperatureScreen';
import LengthScreen from './Screens/LengthScreen';
import Login from "./Screens/Auth/Login";
import { useState } from "react";
import SignUp from "./Screens/Auth/SignUp";

const Stack = createStackNavigator();


function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
        <Stack.Screen 
          name="Home" 
          component={QuantityHome} 
          
          options={{ 
            title: "Home",
            headerLeft: null // This will hide the header left
          }} 
        />
        <Stack.Screen name="Signup" options={{headerShown:false}}  component={SignUp}/>
        <Stack.Screen name="Temperature" component={TemperatureScreen}  />
        <Stack.Screen name="Length" component={LengthScreen}  />
        <Stack.Screen name="Weight" component={WeightScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;