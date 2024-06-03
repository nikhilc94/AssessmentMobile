import React, {useState} from 'react';
import {View} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {useTheme} from '../../theme';
import {Regex} from '../../utils/Regex';
import {SPACER_VARIANT, TEXT_VARIANT} from '../../utils/constants';
import {
  Text,
  Badge,
  Button,
  Spacer,
  TextInput,
  AppContainer,
  Modal,
} from '../../components';
import SelectCountry from '../SelectCountry';

const SignUp = () => {
  const theme = useTheme();
  const {t} = useTranslation();
  const {countryAndLanguage} = useSelector(state => state);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [countryModal, toggleCountryModal] = useState(false);

  const {country, language} = countryAndLanguage || {};

  const handleUsernameChange = (val: string) => {
    const text = val.trim();
    const regex = new RegExp(Regex.USERNAME[country]);
    if (!regex.test(text)) {
      setUsernameError(t(`errors.username.${country}`));
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

  const handleDismissModal = () => {
    setUsername('');
    setPassword('');
    setUsernameError('');
    setPasswordError('');
    toggleCountryModal(false);
  };

  return (
    <AppContainer>
      <View flexGrow={1} height="100%" justifyContent="space-between">
        <View>
          <View flexDirection="row" flexGrow={1} justifyContent="flex-end">
            <Badge onPress={() => toggleCountryModal(true)}>
              {t(`${language}-${country}`)}
            </Badge>
            {countryModal && (
              <Modal>
                <SelectCountry onDismiss={handleDismissModal} />
              </Modal>
            )}
          </View>
        </View>
        <View>
          <Text variant={TEXT_VARIANT.heading3} color={theme.colors.primary}>
            {t('welcome')}
          </Text>
        </View>
        <View>
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
          <Spacer size={SPACER_VARIANT.LG} />
          <Button disabled={disableButton}>
            <Text
              color={theme.colors.surface}
              variant={TEXT_VARIANT.paragraph1}>
              {t('register')}
            </Text>
          </Button>
        </View>
      </View>
    </AppContainer>
  );
};

export default SignUp;
