// CustomTextInput.test.tsx
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {CustomTextInput} from '../TextInput';

describe('CustomTextInput component', () => {
  it('renders correctly', () => {
    const {getByPlaceholderText} = render(
      <CustomTextInput placeholder="Type something..." />,
    );

    const inputElement = getByPlaceholderText('Type something...');
    expect(inputElement).toBeDefined();

    // Snapshot testing
    expect(inputElement).toMatchSnapshot();
  });

  it('applies custom container style correctly', () => {
    const customContainerStyle = {backgroundColor: 'red'};
    const {toJSON} = render(
      <CustomTextInput containerStyle={customContainerStyle} />,
    );

    // Snapshot testing
    expect(toJSON()).toMatchSnapshot();
  });

  it('handles text input correctly', () => {
    const onChangeTextMock = jest.fn();
    const {getByPlaceholderText} = render(
      <CustomTextInput
        placeholder="Type something..."
        onChangeText={onChangeTextMock}
      />,
    );

    const inputElement = getByPlaceholderText('Type something...');
    fireEvent.changeText(inputElement, 'Hello, World!');

    expect(onChangeTextMock).toHaveBeenCalledWith('Hello, World!');
  });
});
