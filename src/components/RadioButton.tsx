import React from 'react';
import {Pressable, View} from 'react-native';
import {RadioButton as PaperRadioButton} from 'react-native-paper';

import Text from './Text';
import Spacer from './Spacer';
import {SPACER_VARIANT, TEXT_VARIANT} from '../utils/constants';

const RadioButton = props => {
  const {label, ...rest} = props;
  return (
    <Pressable onPress={props.onPress}>
      <View flexDirection="row" alignItems="center">
        <Text variant={TEXT_VARIANT.paragraph1}>{label}</Text>
        <Spacer horizontal size={SPACER_VARIANT.LG} />
        <View>
          <PaperRadioButton {...rest}></PaperRadioButton>
        </View>
      </View>
    </Pressable>
  );
};

export default RadioButton;
