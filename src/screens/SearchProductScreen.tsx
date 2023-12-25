import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import ProductItem from '../components/ProductItem';
import { CustomTextInput } from '../components/TextInput';
import { SearchProductScreenProps } from '../navigation/NavigationTypes';
import { Product } from '../types/product';

const SearchProductScreen: React.FC<SearchProductScreenProps> = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://dummyjson.com/products/search?q=' + searchQuery,
      );
      const data = await response.json();
      setFilteredProducts(data.products);
    } catch (error) {
      console.log('Error', error);
    }
  };
  useEffect(() => {
    const debounce = (func, delay: number) => {
      let timeoutId: string;
      return function (...args) {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
          func(...args);
        }, delay);
      };
    };

    const filterProducts = () => {
      fetchData();
    };

    const debouncedFilterProducts = debounce(filterProducts, 300);

    debouncedFilterProducts(searchQuery);

    return () => clearTimeout(debouncedFilterProducts);
  }, [searchQuery]);

  return (
    <View>
      <CustomTextInput
        placeholder="Search products"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
        containerStyle={{
          margin: 10,
          padding: 10,
        }}
      />
      <FlatList
        data={filteredProducts}
        numColumns={3}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <ProductItem
            item={item}
            onPress={() => {
              navigation.navigate('ProductDetail', {item});
            }}
          />
        )}
      />
    </View>
  );
};

export default SearchProductScreen;
