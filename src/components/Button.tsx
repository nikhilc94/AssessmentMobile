import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';

type ButtonProps = React.ComponentProps<typeof PaperButton>;

const Button = (props: ButtonProps) => {
  const {disabled = false, ...rest} = props;

  return (
    <PaperButton
      mode="contained"
      disabled={disabled}
      style={styles.buttonStyle}
      {...rest}>
      <View
        flexGrow={1}
        alignItems="center"
        flexDirection="row"
        justifyContent="center">
        {props.children}
      </View>
    </PaperButton>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    height: 60,
    borderRadius: 20,
  },
});

export default Button;
