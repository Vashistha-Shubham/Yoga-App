import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Background from './Background';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSubmit = () => {
    // Perform form submission logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // Example: You might want to make an API call to authenticate the user
    navigation.navigate('Tabs');
  };

  // Define button styles and label
  const btnBgColor = 'skyblue';
  const btnTextColor = 'blue';
  const btnLabel = 'Login';

  return (
    <>
    <View style={{flex:0.5}}>
    <Background />
    </View>
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, styles.wideInput]} // Combine styles for wide input
          placeholder="Username"
          value={username}
          onChangeText={handleUsernameChange}
        />
        <TextInput
          style={[styles.input, styles.wideInput]} // Combine styles for wide input
          placeholder="Password"
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity 
        title='Login'
        onPress={handleSubmit}
        style={styles.button}>
        <Text style={styles.buttonText}>{btnLabel}</Text>
      </TouchableOpacity>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
  wideInput: {
    width: '100%', // Make the input field wider
  },
  button: {
    backgroundColor: 'skyblue',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
  },
  buttonText: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Login;
