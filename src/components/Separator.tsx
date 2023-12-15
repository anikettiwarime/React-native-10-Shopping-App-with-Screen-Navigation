import {StyleSheet, View} from 'react-native';
import React from 'react';

const Separator = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    height: 0.8,
    backgroundColor: '#99AAAB',
  },
});

export default Separator;
