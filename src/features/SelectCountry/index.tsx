import React, {useState} from 'react';
import {View} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {useTheme} from '../../theme';
import {Regex} from '../../utils/Regex';
import {TEXT_VARIANT} from '../../utils/constants';
import {
  Text,
  Badge,
  Modal,
  Button,
  Spacer,
  TextInput,
  AppContainer,
} from '../../components';

const SelectCountry = props => {
  const {onDismiss} = props;
  const theme = useTheme();
  const {t} = useTranslation();

  return (
    <AppContainer>
      <View flexGrow={1} height="100%" justifyContent="space-between">
        <View>
          <Text color={theme.colors.primary} variant={TEXT_VARIANT.heading3}>
            {t('selectCountryAndLang')}
          </Text>
        </View>
        <Button onPress={onDismiss}>
          <Text color={theme.colors.surface} variant={TEXT_VARIANT.paragraph1}>
            {t('back')}
          </Text>
        </Button>
      </View>
    </AppContainer>
  );
};

export default SelectCountry;
