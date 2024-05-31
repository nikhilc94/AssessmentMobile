import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, View} from 'react-native';
import {useTranslation} from 'react-i18next';

import {useTheme} from '../../theme';
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
  const {countryDetails} = useSelector(state => state);

  const [selectedCountry, setSelectedCountry] = useState(
    countryDetails?.country,
  );

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
    dispatch(CountryActions.selectCountry(selectedCountry));
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
                  status={
                    selectedCountry === item.value ? 'checked' : 'unchecked'
                  }
                  onPress={() => setSelectedCountry(item.value)}
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
