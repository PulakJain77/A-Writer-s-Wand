import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}> A Writer's Wand</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'blue',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 5 
  },
  textStyle: {
    height: 50,
    fontSize: 30,
    fontFamily: 'monospace',
    color:"white"
  },
});
