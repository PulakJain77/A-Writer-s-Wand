import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class FormalLetter extends React.Component {
  HomeScreen = (buzzerColor) => {
    this.props.navigation.navigate('HomeScreen', { color: buzzerColor });
  };
  render() {
    return (
      <View style={{ borderWidth: 0 }}>
 <Image style={styles.img} source={require('../assets/notice.png')} />  
      
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('HomeScreen');
          }}>
          
        </TouchableOpacity>
      
      <TouchableOpacity
          style={[styles.button, { backgroundColor: 'indigo' }]}
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
    marginLeft:20,
    marginBottom:25
  },
  buttonText: { textAlign: 'center', color: 'black' },
   img: {
    marginLeft: 10,
    width: 300,
    height: 400,
  }
});
