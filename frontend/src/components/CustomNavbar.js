import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CustomNavbar = ({ title, leftButton, rightButton }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {leftButton && (
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{leftButton.text}</Text>
        </TouchableOpacity>
      )}
      {rightButton && (
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{rightButton.text}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    padding: 8,
  },
  buttonText: {
    fontSize: 16,
  },
};

export default CustomNavbar;