import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Loader = () => {
  return (
    <View
      style={{
        ...StyleSheet.absoluteFill,
        zIndex: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF88',
      }}>
      <ActivityIndicator />
    </View>
  );
};

export default Loader;
