import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RoootNavigator from './src/navigation/RootNavigator';

const App = () => {
  return (
    <View style={styles.container}>
      <RoootNavigator />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
