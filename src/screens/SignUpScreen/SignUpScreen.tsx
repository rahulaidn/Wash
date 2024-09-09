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
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import axios from 'axios';
import { SignUpScreenNavigationProp } from '../../types/types';
import CustomButton from '../../components/custom/custom-button/CustomButton';
import CustomTextInput from '../../components/custom/custom-input/CustomTextInput';
import { CheckBox } from 'react-native-elements';
import { NavigationProp } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

type Props = {
  navigation: SignUpScreenNavigationProp;
};

interface RegisterProps {
  email: string;
  password: string;
  name: string;
  agree: boolean;
  navigation: NavigationProp<any>;
}

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const handleRegister = async () => {
    if (!agree) {
      Alert.alert('Error', 'You must agree to the Terms & Conditions.');
      return;
    }
  
    try {
    
      const response = await axios.post('https://tor.appdevelopers.mobi/api/register', {
        phone: email,
        password,
        name,
      });
  

      if (response.data.status) {
        Alert.alert('Registration Successful', 'You have been registered successfully.');
  
 
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home', params: { userName: name } }],
        });
      } else {
        Alert.alert('Registration Failed', response.data.message || 'Please check your input.');
      }
    } catch (error) {

      Alert.alert('Error', 'An error occurred during registration. Please try again.');
    }
  };
  

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* KeyboardAvoidingView to handle keyboard issues */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardAvoiding}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.logo} />
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerText}>Sign Up</Text>
              <Text style={styles.subHeaderText}>
                Fill in the below form and add life to{'\n'}your car!
              </Text>
            </View>

            {/* Name Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.labelText}>Name</Text>
              <CustomTextInput
                placeholder="Enter your name"
                style={styles.textInput}
                iconImage={require('../../assets/user.png')}
                iconPosition="left"
                placeholderTextColor={'#808080'}
                value={name}
                onChangeText={setName}
              />
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

            {/* Password Input */}
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

              {/* Checkbox for Agreeing Terms */}
              <View style={styles.checkboxContainer}>
                <CheckBox
                  checked={agree}
                  onPress={() => setAgree(!agree)}
                  containerStyle={styles.checkbox}
                />
                <Text style={styles.agreeText}>Agree with</Text>
                <Text style={styles.termsText}> Terms & Conditions</Text>
              </View>
            </View>

            {/* Register Button */}
            <CustomButton
              title="Register"
              backgroundColor="#A3CFFF"
              textColor="#092A4D"
              buttonStyle={styles.signInButton}
              textStyle={styles.signInButtonText}
              onPress={handleRegister}
            />

            {/* Sign In Prompt */}
            <View style={styles.signUpPromptContainer}>
              <Text style={styles.signUpPromptText}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.signUpLinkText}>Sign In</Text>
              </TouchableOpacity>
            </View>

            {/* Terms and Policy */}
            <View style={styles.termsTextContainer}>
              <Text style={styles.termsTextPrivacy}>
                By login or sign up, you agree to our terms of use and {'\n'}privacy
                policy
              </Text>
            </View>

            {/* Bottom Left Image */}
            <Image
              source={require('../../assets/bottomRight.png')}
              style={styles.bottomLeft}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  keyboardAvoiding: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
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
    height: 45,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: -10,
  },
  checkbox: {
    padding: 0,
    margin: 0,
  },
  checkboxIcon: {
    width: 16,
    height: 16,
  },
  agreeText: {
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
  },
  termsText: {
    fontSize: 12,
    color: 'gray',
    textDecorationLine: 'underline',
  },
  termsTextPrivacy:{
    fontSize: 12,
    color: 'gray',
    textDecorationLine: 'underline',
    textAlign:'center'
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
  bottomLeft: {
    position: 'absolute',
    bottom: -15,
    left: 0,
    width: width * 0.4,
    height: width * 0.3,
    resizeMode: 'contain',
  },
  termsTextContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  // termsTextPrivacy: {
  //   fontSize: 12,
  //   color: 'gray',
  //   textDecorationLine: 'underline',
  //   textAlign: 'center',
  // },
});

export default SignUpScreen;
