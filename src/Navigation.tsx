import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import QuantityHome from './QuantityMeasurement/QuantityHome';
import WeightScreen from './QuantityMeasurement/WeightScreen';
import TemperatureScreen from './QuantityMeasurement/TemperatureScreen';
import LengthScreen from './QuantityMeasurement/LengthScreen';
import Login from "./QuantityMeasurement/Auth/Login";
import { useState } from "react";

const Stack = createStackNavigator();


function Navigation() {
  const [username, setUsername] = useState('');
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} initialParams={{ username, setUsername }} />
        <Stack.Screen 
          name="Home" 
          component={QuantityHome} 
          initialParams={{ username, setUsername }} 
          options={{ 
            title: "Home",
            headerLeft: null // This will hide the header left
          }} 
        />
        <Stack.Screen name="Temperature" component={TemperatureScreen} initialParams={{ username, setUsername }} />
        <Stack.Screen name="Length" component={LengthScreen} initialParams={{ username, setUsername }} />
        <Stack.Screen name="Weight" component={WeightScreen} initialParams={{ username, setUsername }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;