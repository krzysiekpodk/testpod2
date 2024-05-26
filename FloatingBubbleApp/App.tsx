import React, { useEffect, useRef } from 'react';
import { View, Button, PermissionsAndroid, StyleSheet, DeviceEventEmitter } from 'react-native';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FloatingBubble from './FloatingBubble';
import FullScreenKeyboard from './FullScreenKeyboard';

const Stack = createStackNavigator();

const requestOverlayPermission = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.SYSTEM_ALERT_WINDOW,
    {
      title: "Overlay Permission",
      message: "This app needs overlay permission to display the bubble.",
      buttonNeutral: "Ask Me Later",
      buttonNegative: "Cancel",
      buttonPositive: "OK"
    }
  );
  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    console.log("Overlay permission granted");
  } else {
    console.log("Overlay permission denied");
  }
};

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    const subscription = DeviceEventEmitter.addListener('navigateToScreen', (screen: string) => {
      if (screen === 'FullScreenKeyboard') {
        navigation.navigate('FullScreenKeyboard');
      }
    });

    return () => subscription.remove();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Button title="Request Overlay Permission" onPress={requestOverlayPermission} />
      <Button title="Start Bubble Service" onPress={() => FloatingBubble.startService()} />
      <Button title="Stop Bubble Service" onPress={() => FloatingBubble.stopService()} />
    </View>
  );
};

const App = () => {
  const navigationRef = useRef<NavigationContainerRef>(null);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FullScreenKeyboard" component={FullScreenKeyboard} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
