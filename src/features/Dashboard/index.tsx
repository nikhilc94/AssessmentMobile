import React from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';

import {useTheme} from '../../theme';
import {TEXT_VARIANT} from '../../utils/constants';
import {Text, Button, AppContainer} from '../../components';

const Dashboard = () => {
  const theme = useTheme();
  const {t} = useTranslation();
  const navigation = useNavigation();
  return (
    <AppContainer>
      <View flexGrow={1} height="100%" justifyContent="space-between">
        <View style={{marginTop: 50}}>
          <Text variant={TEXT_VARIANT.heading3} color={theme.colors.primary}>
            {t('dashboard.title')}
          </Text>
        </View>
        <Button onPress={() => navigation.goBack()}>
          <Text color={theme.colors.surface} variant={TEXT_VARIANT.paragraph1}>
            {t('back')}
          </Text>
        </Button>
      </View>
    </AppContainer>
  );
};

export default Dashboard;
