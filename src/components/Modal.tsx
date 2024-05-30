import React from 'react';
import {withTheme} from 'react-native-paper';
import {Modal as NativeModal, View, StyleSheet} from 'react-native';

const Modal = (props: any): JSX.Element => (
  <NativeModal coverScreen {...props}>
    <View style={styles.container}>{props.children}</View>
  </NativeModal>
);

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flexGrow: 1,
  },
});

Modal.defaultProps = {
  animationType: 'slide',
  transparent: false,
};

export default withTheme(Modal);
