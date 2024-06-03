import React, {useState} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {createUserWithEmailAndPassword} from 'firebase/auth';

import {
  Text,
  Badge,
  Modal,
  Button,
  Loader,
  Spacer,
  TextInput,
  AppContainer,
} from '../../components';
import {auth} from '../../firebase';
import {useTheme} from '../../theme';
import {Regex} from '../../utils/Regex';
import SelectCountry from '../SelectCountry';
import {ROUTE_DASHBOARD} from '../../navigation/routes';
import {SPACER_VARIANT, TEXT_VARIANT} from '../../utils/constants';

const SignUp = () => {
  const theme = useTheme();
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {countryAndLanguage} = useSelector(state => state);
  const [loading, setLoading] = useState(false);
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

  const handleRegister = () => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, `${username}@test.com`, password)
      .then(() => {
        setLoading(false);
        navigation.push(ROUTE_DASHBOARD);
      })
      .catch(error => {
        setLoading(false);
        console.log(error?.code, error?.message);
      });
  };

  return (
    <AppContainer>
      {loading && <Loader />}
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
          <Spacer />
          <TextInput
            secureTextEntry
            text={password}
            label={t('password')}
            error={!!passwordError}
            errorMessage={passwordError}
            onChange={handlePasswordChange}
          />
          <Spacer size={SPACER_VARIANT.LG} />
          <Button disabled={disableButton} onPress={handleRegister}>
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
