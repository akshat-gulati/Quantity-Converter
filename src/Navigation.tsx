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
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={QuantityHome} options={{title: "Home"}}/>
        <Stack.Screen name="Temperature" component={TemperatureScreen}/>
        <Stack.Screen name="Length" component={LengthScreen} />
        <Stack.Screen name="Weight" component={WeightScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    )
  }

export default StackNavigator