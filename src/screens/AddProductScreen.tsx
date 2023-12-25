import React, {useState} from 'react';
import {View, TextInput, ScrollView, StyleSheet} from 'react-native';
import { Button } from '../components/Button';
import { CustomTextInput } from '../components/TextInput';
import { AddProductScreenProps } from '../navigation/NavigationTypes';
import Strings from '../utils/strings';

const AddProductScreen: React.FC<AddProductScreenProps> = () => {
  const [product, setProduct] = useState({
    id: '',
    title: '',
    description: '',
    price: '',
    discountPercentage: '',
    rating: '',
    stock: '',
    brand: '',
    category: '',
    thumbnail: '',
    images: [],
  });

  const handleInputChange = (field: string, value: string) => {
    setProduct({
      ...product,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    //TODO: Logic to add product
    console.log('Product Submitted:', product);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <CustomTextInput
          style={styles.input}
          placeholder={Strings.title}
          value={product.id}
          onChangeText={text => handleInputChange('title', text)}
        />
        <CustomTextInput
          style={styles.input}
          placeholder={Strings.description}
          value={product.title}
          onChangeText={text => handleInputChange('description', text)}
        />

        <Button title={Strings.add} onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  formContainer: {
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default AddProductScreen;
