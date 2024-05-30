import React, {useState} from 'react';
import {View} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {useTranslation} from 'react-i18next';

import {useTheme} from '../../theme';
import {Regex} from '../../utils/Regex';
import {TEXT_VARIANT} from '../../utils/constants';
import {Text, Button, Spacer, TextInput, AppContainer} from '../../components';

const SignUp = () => {
  const theme = useTheme();
  const {t} = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUsernameChange = (val: string) => {
    const text = val.trim();
    const regex = new RegExp(Regex.USERNAME_AE);
    if (!regex.test(text)) {
      setUsernameError(t('errors.username'));
    } else {
      setUsernameError('');
    }
    setUsername(text);
  };

  const handlePasswordChange = (val: string) => {
    const text = val.trim();
    const regex = new RegExp(Regex.PASSWORD);
    if (!regex.test(text)) {
      setPasswordError(t('errors.password'));
    } else {
      setPasswordError('');
    }
    setPassword(text);
  };

  const disableButton =
    !username || !password || usernameError || passwordError;

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
      <Text variant={TEXT_VARIANT.heading1} color={theme.colors.primary}>
        Hello
      </Text>
      <Spacer />
      <TextInput
        text={username}
        label={t('username')}
        error={!!usernameError}
        errorMessage={usernameError}
        onChange={handleUsernameChange}
      />
      <TextInput
        secureTextEntry
        text={password}
        label={t('password')}
        error={!!passwordError}
        errorMessage={passwordError}
        onChange={handlePasswordChange}
      />
      <Spacer />
      <Button disabled={disableButton}>
        <Text color={theme.colors.surface} variant={TEXT_VARIANT.paragraph1}>
          {t('register')}
        </Text>
      </Button>
    </AppContainer>
  );
};

export default SignUp;
