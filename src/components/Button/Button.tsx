import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';
import DimensionsConfig, { buttonLargeWidth, buttonMediumWidth, buttonSmallWidth } from '../../utils/dimens';
import styles from "./styles";

interface AppButtonProps extends TouchableOpacityProps {
  title?: string;
  onPress?: () => void;
  size?: 'small' | 'medium' | 'large';
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const Button: React.FC<AppButtonProps> = ({
  title,
  onPress,
  size = 'medium',
  textStyle,
  style,
  ...props
}) => {
  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return {paddingHorizontal: DimensionsConfig.padding.small, minWidth: buttonSmallWidth};
      case 'medium':
        return { paddingHorizontal: DimensionsConfig.padding.medium, minWidth: buttonMediumWidth};
      case 'large':
        return { paddingHorizontal: DimensionsConfig.padding.large, minWidth: buttonLargeWidth};
      default:
        return {}; // Default to medium size
    }
  };
  return (
    <TouchableOpacity
      style={[styles.button, getSizeStyle(), style]}
      onPress={onPress}
      {...props}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  title: 'Default Title',
  onPress: () => console.warn('Default onPress function called'),
  style: {},
};

