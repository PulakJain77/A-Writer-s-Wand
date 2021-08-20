import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default class Summary extends Component {
  HomeScreen = (buzzerColor) => {
    this.props.navigation.navigate('HomeScreen', { color: buzzerColor });
  };
  constructor() {
    super();
    this.state = {
      
    };
  }

 
 
  render() {
      return (
         <View style={{ borderWidth: 0 }}>
 <Image style={styles.img} source={require('../assets/123456789.PNG')} />  
      
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('HomeScreen');
          }}>
          
        </TouchableOpacity>
      
      <TouchableOpacity
          style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={()=>{this.HomeScreen('teal')}}
          >
          <Text style={styles.buttonText}>Back </Text>
        </TouchableOpacity>
      </View>
      );
    }
  }


const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 0,
    fontFamily: 'Comic Sans MS',
    fontSize: 20,
  },

  container2: {
    alignSelf: 'center',
    marginTop: 10,
  },

   img: {
     marginLeft: 5,
     marginRight: 5,
    width: 400,
    height: 500,
  },

  bigtext: {
    alignSelf: 'center',
    marginTop: 10,
    fontFamily: 'Comic Sans MS',
    fontSize: 30,
    marginBottom: 30,
    fontWeight: 'bold',
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
