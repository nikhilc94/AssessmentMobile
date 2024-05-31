import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';

import Text from './Text';
import {useTheme} from '../theme';
import {Theme} from 'react-native-paper';

type BadgeProps = {
  size?: number;
  onPress?: () => void;
  children: React.ReactNode;
};

const Badge = (props: BadgeProps) => {
  const theme = useTheme();
  const {size = 50, onPress, children} = props;
  const styles = makeStyles(theme, size);
  return (
    <Pressable onPress={onPress}>
      <View style={styles.badge}>
        <Text color={theme.colors.surface}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default Badge;

const makeStyles = (theme: Theme, size: number) =>
  StyleSheet.create({
    badge: {
      margin: 8,
      padding: 8,
      minWidth: size,
      minHeight: size,
      borderRadius: 12,
      alignItems: 'center',
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
      color: theme.colors.surface,
    },
  });
