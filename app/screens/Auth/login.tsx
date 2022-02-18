import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';
import {Button} from '../../components';
//Social Login
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import appleAuth, {
  AppleButton,
} from '@invertase/react-native-apple-authentication';
import jwtDecode from 'jwt-decode';

//Token Control
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackParamList} from '../../navigations/Types';

interface tokenType {
  aud: string;
  auth_time: number;
  c_hash: string;
  email: string;
  email_verified: string;
  exp: number;
  iat: number;
  is_private_email: string;
  iss: string;
  nonce: string;
  nonce_supported: boolean;
  sub: string;
}

const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${prop => prop.theme.color.bg};
`;

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const ButtonWrapper = styled.View`
  margin-bottom: 20px;
`;

const LoginButton = styled.TouchableOpacity`
  width: 300px;
  height: 48px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 6px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 700;
`;

export interface LoginProps {
  navigation: StackNavigationProp<AuthStackParamList, 'Login'>;
}

const loginView: React.FC<LoginProps> = ({navigation}) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '21966285335-pd59r4mk54v02nd8v5k2kem3gt1th3fl.apps.googleusercontent.com',
      iosClientId:
        '21966285335-0r4fqc0aoe84encol860j1q7l95mnt1o.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
    isSignedIn();
  }, []);

  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem('GoogleAccessToken', value);
      console.log('token saved successfully');
    } catch (e) {
      console.log('token saved error : Asynce Storage');
    }
  };

  const AppleSignIn = async () => {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      // performs login request
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });
    //get user auth
    const credentialState = await appleAuth.getCredentialStateForUser(
      appleAuthRequestResponse.user,
    );
    if (credentialState === appleAuth.State.AUTHORIZED) {
      const {identityToken, email, user} = appleAuthRequestResponse;
      const decodedToken: tokenType = jwtDecode(identityToken!);
      console.log('Apple Login Test!!!');
      console.log('Apple Auth - decodedToken : ', decodedToken);
    }
  };

  const GoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const accessToken = (await GoogleSignin.getTokens()).accessToken;
      //google auth
      console.log('due_______', userInfo);
      console.log('Google Access Token : ', accessToken);
      setUser(userInfo);
      //token setting
      storeData(accessToken);
      //token getItem
      AsyncStorage.getItem('GoogleAccessToken').then(res =>
        console.log('Storage Token : ', res),
      );
      //Move to MainTabView
      navigation.navigate('PhoneAuth');
    } catch (error) {
      console.log('MESSAGE', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play services Not Availbale');
      } else {
        console.log('Some other Error happened');
      }
    }
  };
  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (!!isSignedIn) {
      getCurrentUserInfo();
    } else {
      console.log('Please Login');
    }
  };

  const getCurrentUserInfo = async () => {
    try {
      const userinfo = await GoogleSignin.signInSilently();
      setUser(userinfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        Alert.alert('User has not signed in yet!');
        console.log('User has not signed in yet!');
      } else {
        //Alert.alert('Something went wrong');
        console.log('Something went wrong');
      }
    }
  };

  // const signOut = async () => {
  //   try {
  //     await GoogleSignin.revokeAccess();
  //     await GoogleSignin.signOut();
  //     setUser({});
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <SafeAreaContainer>
      <Container>
        {/* <ImageWrapper>
          <Image
            source={require('../../assets/images/Connecty_logo.png')}
            style={{
              aspectRatio: 2,
              resizeMode: 'contain',
            }}
          />
        </ImageWrapper> */}
        <ButtonWrapper>
          <LoginButton
            style={{backgroundColor: 'orange'}}
            onPress={GoogleSignIn}>
            <ButtonText>Sign in with Google</ButtonText>
          </LoginButton>
          <LoginButton style={{backgroundColor: 'black'}} onPress={AppleSignIn}>
            <ButtonText>Sign in with Apple</ButtonText>
          </LoginButton>
          <Button
            title="Test Button"
            onPress={() => navigation.navigate('PermissionAuth')}
          />
        </ButtonWrapper>
      </Container>
    </SafeAreaContainer>
  );
};

export default loginView;
