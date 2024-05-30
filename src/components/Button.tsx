import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';

const Button = props => {
  const {disabled, ...rest} = props;
  return (
    <PaperButton
      mode="contained"
      disabled={disabled}
      style={styles.buttonStyle}
      {...rest}>
      <View style={styles.buttonText}>{props.children}</View>
    </PaperButton>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    height: 56,
    borderRadius: 12,
  },
  buttonText: {
    flexGrow: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Button;
