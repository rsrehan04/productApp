import React from 'react';
import {View, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {SliderBox} from 'react-native-image-slider-box';
import { ProductDetailcreenSProps } from '../navigation/NavigationTypes';
import Strings from '../utils/strings';


const ProductDetail: React.FC<ProductDetailcreenSProps> = ({navigation, route}) => {
  const item = route.params.item;
  return (
    <ScrollView style={styles.container}>
      <SliderBox images={item.images} sliderBoxHeight={400} autoplayInterval={1000} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{Strings.price+item.price}</Text>
        <Text style={styles.discount}>{Strings.discount + item.discountPercentage}</Text>
        <Text style={styles.rating}>{Strings.rating+item.rating}</Text>
        <Text style={styles.stock}>{Strings.stock+item.stock}</Text>
        <Text style={styles.brand}>{Strings.brand+item.brand}</Text>
        <Text style={styles.category}>{Strings.category+item.category}</Text>
      </View>
    </ScrollView>
  );
};

const styles = {
  container: {
    flexG: 1,
    flexDirection: 'column',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  thumbnail: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontSize: 14,
    color: '#000',
  },
  price: {
    fontSize: 14,
  },
  discount: {
    fontSize: 14,
  },
  rating: {
    fontSize: 14,
  },
  stock: {
    fontSize: 14,
  },
  brand: {
    fontSize: 14,
  },
  category: {
    fontSize: 14,
  },
};

export default ProductDetail;
