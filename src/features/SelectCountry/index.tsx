import React, {useState} from 'react';
import i18next from 'i18next';
import RNRestart from 'react-native-restart';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, I18nManager, View} from 'react-native';

import {useTheme} from '../../theme';
import {isRTLLanguage} from '../../utils';
import {COUNTRY, LANGUAGE} from './constants';
import * as CountryActions from './store/actions';
import {SPACER_VARIANT, TEXT_VARIANT} from '../../utils/constants';
import {
  Text,
  Button,
  Spacer,
  RadioButton,
  AppContainer,
} from '../../components';

const SelectCountry = props => {
  const {onDismiss} = props;
  const theme = useTheme();
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const {countryAndLanguage} = useSelector(state => state);

  const [country, setCountry] = useState<COUNTRY>(countryAndLanguage?.country);
  const [lang, setLang] = useState<LANGUAGE>(countryAndLanguage?.language);

  const countries = [
    {label: t(`country.${COUNTRY.AE}`), value: COUNTRY.AE},
    {label: t(`country.${COUNTRY.SA}`), value: COUNTRY.SA},
    {label: t(`country.${COUNTRY.IN}`), value: COUNTRY.IN},
    {label: t(`country.${COUNTRY.EG}`), value: COUNTRY.EG},
  ];

  const languages = [
    {label: t(`language.${LANGUAGE.EN}`), value: LANGUAGE.EN},
    {label: t(`language.${LANGUAGE.AR}`), value: LANGUAGE.AR},
    {label: t(`language.${LANGUAGE.HI}`), value: LANGUAGE.HI},
  ];

  const handleSave = () => {
    if (countryAndLanguage?.country !== country) {
      dispatch(CountryActions.selectCountry(country));
    }
    if (countryAndLanguage?.language !== lang) {
      dispatch(CountryActions.selectLanguage(lang));
      i18next.changeLanguage(lang);
      I18nManager.forceRTL(isRTLLanguage(lang));
      setTimeout(() => {
        RNRestart.Restart();
      }, 1000);
    }
    onDismiss();
  };

  return (
    <AppContainer>
      <View height="100%" justifyContent="space-between">
        <View>
          <Spacer size={SPACER_VARIANT.LG} />
          <Text color={theme.colors.primary} variant={TEXT_VARIANT.heading3}>
            {t('selectCountry')}
          </Text>
          <Spacer size={SPACER_VARIANT.LG} />
          <FlatList
            data={countries}
            renderItem={({item}) => (
              <>
                <RadioButton
                  label={item.label}
                  value={item.value}
                  status={country === item.value ? 'checked' : 'unchecked'}
                  onPress={() => setCountry(item.value)}
                />
                <Spacer />
              </>
            )}
          />
          <Spacer size={SPACER_VARIANT.XXXL} />
          <Text color={theme.colors.primary} variant={TEXT_VARIANT.heading3}>
            {t('selectLanguage')}
          </Text>
          <Spacer size={SPACER_VARIANT.LG} />
          <FlatList
            data={languages}
            renderItem={({item}) => (
              <>
                <RadioButton
                  label={item.label}
                  value={item.value}
                  status={lang === item.value ? 'checked' : 'unchecked'}
                  onPress={() => setLang(item.value)}
                />
                <Spacer />
              </>
            )}
          />
        </View>
        <View>
          <Button mode={'outline'} onPress={onDismiss}>
            <Text
              color={theme.colors.primary}
              variant={TEXT_VARIANT.paragraph1}>
              {t('back')}
            </Text>
          </Button>
          <Spacer size={SPACER_VARIANT.XS} />
          <Button onPress={handleSave}>
            <Text
              color={theme.colors.surface}
              variant={TEXT_VARIANT.paragraph1}>
              {t('save')}
            </Text>
          </Button>
        </View>
      </View>
    </AppContainer>
  );
};

export default SelectCountry;
