import React from 'react';
import {FAB} from 'react-native-paper';
import styles from './styles';

interface FloatingButtonProps {
  onPress: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({onPress}) => {
  return <FAB style={styles.fab} icon="plus" onPress={onPress} />;
};

export default FloatingButton;
