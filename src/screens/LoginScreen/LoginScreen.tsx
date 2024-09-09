import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import axios from 'axios';
import { SignUpScreenNavigationProp } from '../../types/types';
import CustomButton from '../../components/custom/custom-button/CustomButton';
import CustomTextInput from '../../components/custom/custom-input/CustomTextInput';

const { width, height } = Dimensions.get('window');

type Props = {
  navigation: SignUpScreenNavigationProp;
};

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://tor.appdevelopers.mobi/api/login', {
        phone: email,
        password: password,
      });

      // Handle the response from the server
      if (response.data.success) {
        Alert.alert('Login Successful', 'You have been logged in successfully.');
       
        navigation.navigate('Home');
        console.log('Working', response.data)
      } else {
        Alert.alert('Login Failed', 'Invalid phone number or password.');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred during login. Please try again.');
      console.error('Login error:', error);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Sign In</Text>
          <Text style={styles.subHeaderText}>
            Hi! Welcome back, you{'\n'}have been missed
          </Text>
        </View>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Email / Phone number</Text>
          <CustomTextInput
            placeholder="xyz@gmail.com"
            style={styles.textInput}
            iconImage={require('../../assets/mail.png')}
            iconPosition="left"
            placeholderTextColor={'#808080'}
            value={email}
            onChangeText={setEmail} 
          />
        </View>

        {/* Password Input with Eye Icon */}
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Password</Text>
          <CustomTextInput
            placeholder="Password"
            style={styles.textInput}
            iconImage={require('../../assets/lock.png')}
            iconPosition="left"
            secureTextEntry
            placeholderTextColor={'#808080'}
            value={password}
            onChangeText={setPassword} 
          />
          <TouchableOpacity style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Sign In Button */}
        <CustomButton
          title="Sign In"
          backgroundColor="#A3CFFF"
          textColor="#092A4D"
          buttonStyle={styles.signInButton}
          textStyle={styles.signInButtonText}
          onPress={handleLogin} 
        />

        {/* Divider and Social Logins */}
        <View>
          <Image source={require('../../assets/or.png')} />
        </View>
        <View style={styles.socialLoginContainer}>
          <Image
            source={require('../../assets/google.png')}
            style={styles.socialIcon}
          />
          <Image
            source={require('../../assets/apple.png')}
            style={styles.socialIcon}
          />
        </View>

        {/* Sign Up Prompt */}
        <View style={styles.signUpPromptContainer}>
          <Text style={styles.signUpPromptText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUpLinkText}>Sign up</Text>
          </TouchableOpacity>
        </View>

        {/* Terms and Policy */}
        <View style={styles.termsTextContainer}>
          <Text style={styles.termsText}>
            By login or sign up, you agree to our terms of use and {'\n'}privacy policy
          </Text>
        </View>

        {/* Bottom Left Image */}
        <Image
          source={require('../../assets/bottomRight.png')}
          style={styles.bottomLeft}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  logo: {
    width: width * 1.8,
    height: height * 0.2,
    resizeMode: 'contain',
  },
  headerTextContainer: {
    alignSelf: 'flex-start',
    marginHorizontal: 42,
    color: 'black',
  },
  headerText: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#808080',
  },
  subHeaderText: {
    paddingTop: 5,
    color: '#808080',
    fontSize: 14,
  },
  inputContainer: {
    marginTop: 15,
    marginLeft: 12,
    color: 'black',
  },
  labelText: {
    fontWeight: 'bold',
    color: 'black',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#808080',
    width: width * 0.8,
    marginVertical: 10,
    color: 'black',
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: 'black',
  },
  signInButton: {
    borderWidth: 1,
    borderColor: '#94C7FF',
    width: width * 0.7,
    marginTop: 50,
    backgroundColor: '#A3CFFF',
    elevation: 8,
    shadowColor: '#A3CFFF',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    marginBottom: 20,
  },
  signInButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  socialIcon: {
    margin: 10,
  },
  signUpPromptContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  signUpPromptText: {
    fontSize: 14,
    textAlign: 'center',
    color: 'black',
  },
  signUpLinkText: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
  },
  termsTextContainer: {
    marginTop: 12,
  },
  termsText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    color: '#808080',
  },
  bottomLeft: {
    position: 'absolute',
    bottom: -15,
    left: 0,
    width: width * 0.4,
    height: width * 0.3,
    resizeMode: 'contain',
  },
});

export default SignUpScreen;
