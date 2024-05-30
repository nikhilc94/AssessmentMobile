import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {useTranslation} from 'react-i18next';

import { useTheme } from '../../theme';
import { TEXT_VARIANT } from '../../utils/constants';
import {Text, Button, TextInput, AppContainer} from '../../components'

const SignUp = () => {
  const theme = useTheme();
  const {t} = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameFocused, setUsernameFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);

  useEffect(() => {

  }, [username])

  return (
    <AppContainer>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <SvgUri
          // width="30%"
          height="50%"
          // uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg"
          uri="https://contentdelivery.mashreqbank.com/common/full-logo-V2/CONV.svg"
        />
      </View>
      <Text variant={TEXT_VARIANT.heading1} color={theme.colors.primary}>Hello</Text>
      <TextInput
        text={username}
        label={t('username')}
        onChange={(val: string) => setUsername(val)}
      />
      <TextInput
        secureTextEntry
        text={password}
        label={t('password')}
        onChange={(val: string) => setPassword(val)}
      />
    </AppContainer>
  );
};

export default SignUp;
