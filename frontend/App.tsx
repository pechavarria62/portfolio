import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
// import Index from './src/pages/Index'
import {NavigationContainer} from '@react-navigation/native';
import Navigation from "../frontend/src/components/Navigation";


export default function App() {
  return (
  <NavigationContainer>
    <Navigation/>
  </NavigationContainer>
  );
}
