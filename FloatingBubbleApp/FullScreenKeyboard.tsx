import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, BackHandler, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FullScreenKeyboard = () => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      navigation.goBack();
      return true;
    });

    return () => backHandler.remove();
  }, [navigation]);

  const handleKeyPress = (key: string) => {
    setInputText((prev) => prev + key);
  };

  const handleBackspace = () => {
    setInputText((prev) => prev.slice(0, -1));
  };

  const handleSubmit = () => {
    // Handle the submit action here, e.g., send the text to a server or another component
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          editable={false} // Disable editing, input is handled by custom keyboard
        />
      </View>
      <View style={styles.keyboard}>
        {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((key) => (
          <TouchableOpacity key={key} style={styles.key} onPress={() => handleKeyPress(key)}>
            <Text style={styles.keyText}>{key}</Text>
          </TouchableOpacity>
        ))}
        {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((key) => (
          <TouchableOpacity key={key} style={styles.key} onPress={() => handleKeyPress(key)}>
            <Text style={styles.keyText}>{key}</Text>
          </TouchableOpacity>
        ))}
        {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((key) => (
          <TouchableOpacity key={key} style={styles.key} onPress={() => handleKeyPress(key)}>
            <Text style={styles.keyText}>{key}</Text>
          </TouchableOpacity>
        ))}
        <View style={styles.keyRow}>
          <TouchableOpacity style={styles.key} onPress={handleBackspace}>
            <Text style={styles.keyText}>←</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key} onPress={() => handleKeyPress(' ')}>
            <Text style={styles.keyText}>Space</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key} onPress={handleSubmit}>
            <Text style={styles.keyText}>Enter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputContainer: {
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  input: {
    fontSize: 18,
    padding: 10,
    backgroundColor: 'white',
    width: '100%',
  },
  keyboard: {
    width: '100%',
    padding: 10,
    backgroundColor: 'lightgray',
  },
  keyRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  key: {
    padding: 15,
    margin: 5,
    backgroundColor: 'darkgray',
    borderRadius: 5,
  },
  keyText: {
    fontSize: 18,
    color: 'white',
  },
});

export default FullScreenKeyboard;
