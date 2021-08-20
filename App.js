import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import AppHeader from './components/AppHeader';
import HomeScreen from './screens/HomeScreen';
import InformalLetter from './screens/InformalLetter';
import FormalLetter from './screens/FormalLetter';
import Summary from './screens/Summary';
import Story from './screens/Story';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';



export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <Container />
      </View>
    );
  }
}

var navigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  InformalLetter: InformalLetter,
  FormalLetter: FormalLetter,
  Summary: Summary,
  Story: Story,
});

const Container = createAppContainer(navigator);
