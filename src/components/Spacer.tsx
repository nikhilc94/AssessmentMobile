import React from 'react';
import {View, StyleSheet} from 'react-native';

import {SPACER_VARIANT} from '../utils/constants';

type SpacerProps = {
  size?: number;
  vertical?: boolean;
  horizontal?: boolean;
};

const Spacer = ({
  size = SPACER_VARIANT.SM,
  vertical = true,
  horizontal = false,
}: SpacerProps): JSX.Element => {
  const styles = makeStyles(size, vertical, horizontal);
  return <View style={styles.spacerStyle} />;
};

const makeStyles = (size: number, vertical: boolean, horizontal: boolean) =>
  StyleSheet.create({
    spacerStyle: {
      paddingHorizontal: horizontal ? size / 2 : 0,
      paddingVertical: vertical ? size / 2 : 0,
    },
  });

export default Spacer;
