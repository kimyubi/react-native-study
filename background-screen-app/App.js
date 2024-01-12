import { NavigationContainer } from '@react-navigation/native';
import { RootStackNavigation } from './src/navigations/RootStackNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return (
    <NavigationContainer>
      <RootStackNavigation/>
    </NavigationContainer>
  );
}

