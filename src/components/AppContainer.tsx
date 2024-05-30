import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface AppContainerProps {
  children: React.ReactNode;
}

const AppContainer = (props: AppContainerProps) => {
  return (
    <SafeAreaView>
      <View style={styles.viewStyle}>{props.children}</View>
    </SafeAreaView>
  );
};

export default AppContainer;

const styles = StyleSheet.create({
  viewStyle: {
    marginTop: 18,
    paddingHorizontal: 24,
  },
});
