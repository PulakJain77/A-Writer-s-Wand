import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class InformalLetter extends React.Component {
  HomeScreen = (buzzerColor) => {
    this.props.navigation.navigate('HomeScreen', { color: buzzerColor });
  };
  render() {
    return (
      <View>
      <Text style={styles.buttonText}>Email Writing- Format:</Text>
       <Image style={styles.img} source={require('../assets/letter.PNG')} />  


        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('HomeScreen');
          }}></TouchableOpacity>
       
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'magenta' }]}
          onPress={() => {
            this.HomeScreen('teal');
          }}>
          <Text style={styles.buttonText}>Back </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    marginLeft: 10,
    width: 290,
    height: 170,
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
    marginLeft: 20,
  },
  buttonText: { textAlign: 'center', color: 'black' },
});
