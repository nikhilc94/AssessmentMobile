import React from 'react';
import {Text as TextComponent, StyleSheet} from 'react-native';

import {withTheme} from '../theme';
import {TEXT_VARIANT} from '../utils/constants';

interface TextProps {
  variant: TEXT_VARIANT;
  children: React.ReactNode;
}

const Text = (props: TextProps) => {
  const {variant, children} = props;

  const getStyles = variant => {
    switch (variant) {
      case TEXT_VARIANT.heading1:
        return {
          fontSize: 44,
          fontWeight: '600',
        };
      case TEXT_VARIANT.heading2:
        return {
          fontSize: 36,
          fontWeight: '600',
        };
      case TEXT_VARIANT.paragraph1:
        return {
          fontSize: 18,
          fontWeight: '600',
        };
      case TEXT_VARIANT.paragraph2:
        return {
          fontSize: 14,
        };
      default:
        return {
          fontSize: 14,
        };
    }
  };

  const styles = makeStyles(getStyles(variant));

  return <TextComponent style={styles.textStyle}>{children}</TextComponent>;
};

const makeStyles = style =>
  StyleSheet.create({
    textStyle: {
      ...style,
    },
  });

export default withTheme(Text);
