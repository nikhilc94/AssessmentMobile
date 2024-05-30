import React from 'react';
import {Text as TextComponent, StyleSheet} from 'react-native';

import {TEXT_VARIANT} from '../utils/constants';

interface TextProps {
  variant: TEXT_VARIANT;
  children: React.ReactNode;
  color: string;
}

const Text = (props: TextProps) => {
  const {variant, children, color} = props;

  const getStyles = (variant: TEXT_VARIANT) => {
    switch (variant) {
      case TEXT_VARIANT.heading1:
        return {
          color,
          fontSize: 44,
          fontWeight: '600',
        };
      case TEXT_VARIANT.heading2:
        return {
          color,
          fontSize: 36,
          fontWeight: '600',
        };
      case TEXT_VARIANT.paragraph1:
        return {
          color,
          fontSize: 18,
          fontWeight: '600',
        };
      case TEXT_VARIANT.paragraph2:
        return {
          color,
          fontSize: 14,
        };
      default:
        return {
          color,
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

export default Text;
