import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Index from './src/pages/Index'

export default function App() {
  return (
    <View>
      <Index/>
      <StatusBar style="auto" />
    </View>
  );
}
