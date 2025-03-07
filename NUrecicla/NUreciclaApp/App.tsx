import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

// Import screens (to be created)
import MapScreen from './src/screens/MapScreen';
import ScanScreen from './src/screens/ScanScreen';
import RewardsScreen from './src/screens/RewardsScreen';
import EducationScreen from './src/screens/EducationScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

// Define the app theme with Cabo Verde colors
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#003893', // Blue from Cabo Verde flag
    accent: '#F7D116', // Yellow from Cabo Verde flag
    background: '#FFFFFF',
    text: '#000000',
    error: '#FF5252',
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <StatusBar style="auto" />
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Map') {
                  iconName = focused ? 'map' : 'map-outline';
                } else if (route.name === 'Scan') {
                  iconName = focused ? 'qr-code' : 'qr-code-outline';
                } else if (route.name === 'Rewards') {
                  iconName = focused ? 'gift' : 'gift-outline';
                } else if (route.name === 'Education') {
                  iconName = focused ? 'book' : 'book-outline';
                } else if (route.name === 'Profile') {
                  iconName = focused ? 'person' : 'person-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: theme.colors.primary,
              tabBarInactiveTintColor: 'gray',
              headerShown: true,
            })}
          >
            <Tab.Screen name="Map" component={MapScreen} options={{ title: 'Recycling Map' }} />
            <Tab.Screen name="Scan" component={ScanScreen} options={{ title: 'Scan QR Code' }} />
            <Tab.Screen name="Rewards" component={RewardsScreen} options={{ title: 'My Rewards' }} />
            <Tab.Screen name="Education" component={EducationScreen} options={{ title: 'Learn' }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'My Profile' }} />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}