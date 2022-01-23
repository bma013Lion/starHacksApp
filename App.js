import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import HomeHospital from './src/screens/HomeHospital';
import HomeGeneral from './src/screens/HomeGeneral';
import Register from './src/screens/Register';
import ClaimInfo from './src/screens/ClaimInfo';

const Stack = createStackNavigator();

const globalScreenOptions = {
  // headerStyle: { backgroundColor: "#2c6bed" },
  // headerTitleStyle:  { color: "white" },
  // headerTintColor: "white",
  headerShown: false
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={globalScreenOptions}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="HomeGeneral" component={HomeGeneral} />
        <Stack.Screen name="HomeHospital" component={HomeHospital} />
        <Stack.Screen name="ClaimScreen" component={ClaimInfo} />
      </Stack.Navigator>    
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
