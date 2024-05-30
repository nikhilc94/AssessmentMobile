import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  HelperText,
  TextInput as CoreTextInput,
  Theme,
} from 'react-native-paper';

import {useTheme} from '../theme';

type TextInputProps = React.ComponentProps<typeof CoreTextInput> & {
  text: string;
  error: boolean;
  label: string;
  errorMessage: string;
  backgroundColor: string;
};

const TextInput = (props: TextInputProps) => {
  const {
    text,
    error,
    label = '',
    errorMessage,
    backgroundColor,
    onChange,
    ...rest
  } = props;
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <View flexDirection="row" flexGrow={1} justifyContent="center">
      <View style={{flex: 1}}>
        <CoreTextInput
          error={error}
          theme={theme}
          label={label}
          value={text}
          mode={'outlined'}
          onChangeText={onChange}
          style={styles.textInput}
          {...rest}
        />
        <HelperText visible type="error">
          {error ? errorMessage : ''}
        </HelperText>
      </View>
    </View>
  );
};

const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    textInput: {
      width: '100%',
      backgroundColor: theme.colors.surface,
    },
  });

export default TextInput;
