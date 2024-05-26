import React from 'react';
import { View, Button, PermissionsAndroid, StyleSheet } from 'react-native';
import FloatingBubble from './FloatingBubble';

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

                                                            const App = () => {
                                                              return (
                                                                  <View style={styles.container}>
                                                                        <Button title="Request Overlay Permission" onPress={requestOverlayPermission} />
                                                                              <Button title="Start Bubble Service" onPress={() => FloatingBubble.startService()} />
                                                                                    <Button title="Stop Bubble Service" onPress={() => FloatingBubble.stopService()} />
                                                                                        </View>
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
                                                                                                          