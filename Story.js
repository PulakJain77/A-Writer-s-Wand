import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class Story extends React.Component {
  HomeScreen = (buzzerColor) => {
    this.props.navigation.navigate('HomeScreen', { color: buzzerColor });
  };
  render() {
    return (
      <View>

       <Image style={styles.img} source={require('../assets/email.PNG')} />  
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('HomeScreen');
          }}></TouchableOpacity>
       
        
        
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'cyan' }]}
          onPress={()=>{this.HomeScreen('teal')}}
          >
          <Text style={styles.buttonText}>Back </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
    marginLeft:20
  },
  img :{
     marginLeft: 5,
     marginRight: 5,
    width: 400,
    height: 500
  },
  buttonText: { textAlign: 'center', color: 'black' },
});
