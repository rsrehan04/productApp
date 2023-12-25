import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import { Product } from '../types/product';

export type RootStackParamList = {
  Home: undefined;
  ProductDetail: {
    item: Product
  };
  AddProduct: undefined;
  SearchProduct: undefined;
  User: undefined;
};



export type ScreenProps<
  RootStackParamList extends Record<string, object | undefined>,
  RouteName extends keyof RootStackParamList,
> = {
  navigation: StackNavigationProp<RootStackParamList, RouteName>;
  route: RouteProp<RootStackParamList, RouteName>;
};

export type HomeScreenProps = ScreenProps<RootStackParamList, 'Home'>;
export type ProductDetailcreenSProps = ScreenProps<RootStackParamList, 'ProductDetail'>;
export type AddProductScreenProps = ScreenProps<RootStackParamList, 'AddProduct'>;
export type SearchProductScreenProps = ScreenProps<RootStackParamList, 'SearchProduct'>;
export type UserScreenProps = ScreenProps<RootStackParamList, 'User'>;


