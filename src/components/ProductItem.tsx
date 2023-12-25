import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { Product } from '../redux/reducers/productReducer';

interface ProductItemProps {
    item: Product;
    onPress: ()=>void;
}

const ProductItem: React.FC<ProductItemProps> = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(item.id)}>
      <View style={styles.card}>
        <Image source={{uri: item.thumbnail}} style={styles.thumbnail} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>Price: {item.price}</Text>
        {/* <View style={styles.detailsContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>Price: {item.price}</Text>
          <Text style={styles.discount}>
            Discount: {item.discountPercentage}
          </Text>
          <Text style={styles.rating}>Rating: {item.rating}</Text>
          <Text style={styles.stock}>Stock: {item.stock}</Text>
          <Text style={styles.brand}>Brand: {item.brand}</Text>
          <Text style={styles.category}>Category: {item.category}</Text>
        </View> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  card: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    height: '30%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    margin: 6,
    backgroundColor: 'white',
  },
  container: {
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
    width: 80,
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

export default ProductItem;
