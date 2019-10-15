import React from 'react';
import { View, StyleSheet } from 'react-native';

import Home from './src/pages/Home';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

