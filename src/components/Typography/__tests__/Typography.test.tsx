import React from 'react';
import {render} from '@testing-library/react-native';
import { Typography } from '../Typography';

describe('Typography component', () => {
  it('renders correctly with default variant', () => {
    const { getByText } = render(<Typography>Hello, World!</Typography>);

    const textElement = getByText('Hello, World!');
    expect(textElement).toBeDefined();
    expect(textElement).toMatchSnapshot();
  });

  const checkStyle = (variant: 'heading' | 'subheading' | 'body', expectedStyle: object) => {
    const { getByText } = render(<Typography variant={variant}>{`${variant} Text`}</Typography>);

    const textElement = getByText(`${variant} Text`);
    const styles = Array.isArray(textElement.props.style)
      ? Object.assign({}, ...textElement.props.style)
      : textElement.props.style;

    expect(styles).toEqual(expect.objectContaining(expectedStyle));
    expect(textElement).toMatchSnapshot();
  };

  it('applies heading style correctly', () => {
    checkStyle('heading', { fontSize: 24, fontWeight: 'bold', marginBottom: 8 });
  });

  it('applies subheading style correctly', () => {
    checkStyle('subheading', { fontSize: 18, fontWeight: 'bold', marginBottom: 6 });
  });

  it('applies body style correctly', () => {
    checkStyle('body', { fontSize: 16, marginBottom: 4 });
  });
});
