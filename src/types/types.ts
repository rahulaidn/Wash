import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Splash: undefined;
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  Home: { userName: string };
};

// Types for navigation props
export type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;
export type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
export type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

// Types for route props (if needed)
export type SplashScreenRouteProp = RouteProp<RootStackParamList, 'Splash'>;
export type WelcomeScreenRouteProp = RouteProp<RootStackParamList, 'Welcome'>;
export type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;
export type SignUpScreenRouteProp = RouteProp<RootStackParamList, 'SignUp'>;
export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;