import React from 'react';
import {View} from 'react-native';
import {
  useTheme,
  HelperText,
  TextInput as CoreTextInput,
} from 'react-native-paper';

import Text from './Text';

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
    onChange = () => {},
    ...rest
  } = props;
  const theme = useTheme();

  return (
    <View flexDirection="row" flexGrow={1} justifyContent="center">
      <View style={{flex: 1}}>
        <CoreTextInput
          mode={'outlined'}
          style={{width: '100%', backgroundColor: theme.colors.surface}}
          label={label}
          value={text}
          onChangeText={onChange}
          error={error}
          theme={theme}
          {...rest}
        />
        {error ? (
          <HelperText type="error" visible={true}>
            {errorMessage}
          </HelperText>
        ) : null}
      </View>
    </View>
  );
};

export default TextInput;
