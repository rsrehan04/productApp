import React from 'react';
import {TextInput, TextInputProps, ViewStyle} from 'react-native';
import {Text} from '../../utils/colors';
import styles from './styles';

interface CustomTextInputProps extends TextInputProps {
  containerStyle?: ViewStyle;
}

export const CustomTextInput: React.FC<CustomTextInputProps> = ({
  containerStyle,
  ...props
}) => {
  return (
    <TextInput
      style={[styles.input, containerStyle]}
      placeholderTextColor={Text.placeholderColor}
      {...props}
    />
  );
};
