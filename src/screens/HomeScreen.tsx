import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import ProductItem from '../components/productItem';
import {Typography} from '../components/Typography';
import Colors from '../utils/colors';
import DimensionsConfig from '../utils/dimens';
import { HomeScreenProps } from '../navigation/NavigationTypes';
import { Product } from '../types/product';

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [Data, setData] = useState<Product[]>([]);
  const [limit, setLimit] = useState(12);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      console.log('limit', limit);
      const response = await fetch(
        'https://dummyjson.com/products?limit=' + limit,
      );
      const data = await response.json();
      setData(data.products);
      setLimit(limit + 12);
      setLoading(false);
    } catch (error) {
      console.log('Error', error);
    }
  };

  const getLoadingText = (): string => {
    if (loading || Data.length === 0) {
      return 'Loading...';
    }
    if (Data.length >= 100) {
      return 'No more data to load';
    }
    return 'Load More';
  };

  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={fetchData}
          disabled={Data.length >= 100}
          style={[
            styles.loadMoreBtn,
            {backgroundColor: Data.length >= 100 ? Colors.primaryDisabled : Colors.primary},
          ]}>
          <Text style={styles.btnText}>{getLoadingText()}</Text>
          {loading ? (
            <ActivityIndicator color={Colors.white} style={styles.activityLoader} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      {Data.length > 0 ? (
        <FlatList
          data={Data}
          extraData={Data}
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
          ListFooterComponent={renderFooter}
        />
      ) : (
        <View style={styles.container}>
          <Typography variant="body">Loading...</Typography>
        </View>
      )}
      <TouchableOpacity
        onPress={()=>{
          navigation.navigate("AddProduct", undefined)
        }}
        style={{position: 'absolute', end: 0, bottom: 0, margin: 16, backgroundColor: Colors.primary, width: 64,height: 64, borderRadius: 32, justifyContent: "center", alignItems: "center"}}>
        <Text style={{fontSize: 40, color: Colors.white, textAlignVertical: "center"}}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  footer: {
    padding: DimensionsConfig.padding.small,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: DimensionsConfig.padding.small,
    backgroundColor: Colors.primary,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: Colors.white,
    fontSize: DimensionsConfig.fontSize.small,
    textAlign: 'center',
  },
  activityLoader: {
    marginLeft: DimensionsConfig.margin.small,
  },
});

export default HomeScreen;
