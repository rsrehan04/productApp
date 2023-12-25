// Button.test.tsx
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Button} from '../Button';

describe('Button component', () => {
  it('renders correctly with default props', () => {
    const {getByText} = render(<Button />);

    const buttonElement = getByText('Default Title');
    expect(buttonElement).toBeDefined();

    // Snapshot testing
    expect(buttonElement).toMatchSnapshot();
  });

  it('renders correctly with custom title', () => {
    const {getByText} = render(<Button title="Custom Title" />);

    const buttonElement = getByText('Custom Title');
    expect(buttonElement).toBeDefined();

    // Snapshot testing
    expect(buttonElement).toMatchSnapshot();
  });

  it('calls onPress function when clicked', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <Button title="Click me" onPress={onPressMock} />,
    );

    const buttonElement = getByText('Click me');
    fireEvent.press(buttonElement);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('applies custom style', () => {
    const customStyle = {backgroundColor: 'red'};
    const {toJSON} = render(
      <Button title="Styled Button" style={customStyle} />,
    );

    // Snapshot testing
    expect(toJSON()).toMatchSnapshot();
  });
});
