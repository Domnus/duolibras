import { Pressable, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './app/home/index';
import TrainingScreen from './app/training/index';

const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Main" 
          component={MainScreen} 
          options={{
            headerShown: false,
          }} />
        <Stack.Screen 
          name="Training" 
          component={TrainingScreen} 
          options={{
            headerRight: () => {
              <Pressable onPress={() => navigation.goBack()}>
                <Text>Voltar</Text>
              </Pressable>
            }
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}