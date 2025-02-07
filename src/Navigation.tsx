import { NavigationContainer } from "@react-navigation/native"
import QuantityHome from './QuantityMeasurement/QuantityHome'
import WeightScreen from './QuantityMeasurement/WeightScreen';
import TemperatureScreen from './QuantityMeasurement/TemperatureScreen';
import { createStackNavigator } from '@react-navigation/stack';
import LengthScreen from './QuantityMeasurement/LengthScreen';

const Stack = createStackNavigator();

function StackNavigator() {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='QuantityHome'>
        <Stack.Screen name="QuantityHome" component={QuantityHome} 
        options={{title: "Home Screen"}}/>
        <Stack.Screen name="LengthScreen" component={LengthScreen} />
        <Stack.Screen name="WeightScreen" component={WeightScreen} />
        <Stack.Screen name="TemperatureScreen" component={TemperatureScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
    )
  }

export default StackNavigator