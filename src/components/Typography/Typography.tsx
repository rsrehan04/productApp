import React from 'react';
import {Text, TextStyle} from 'react-native';
import {styles} from './styles';

interface TypographyProps {
  variant?: 'heading' | 'subheading' | 'body';
  style?: TextStyle;
  children?: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  style,
  children,
}) => {
  let textStyle: TextStyle;

  switch (variant) {
    case 'heading':
      textStyle = styles.heading;
      break;
    case 'subheading':
      textStyle = styles.subheading;
      break;
    default:
      textStyle = styles.body;
      break;
  }

  return <Text style={[textStyle, style]}>{children}</Text>;
};
