import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';
import {Button} from '../../components';
//Social Login
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import appleAuth from '@invertase/react-native-apple-authentication';

//Token Control
import {clientId, redirectUri} from '../../apis/spotify/config';
import apiClient from '../../apis/spotify/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackParamList} from '../../navigations/Types';

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 400;
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
    //sporify authentication
    apiClient
      .get(
        `/authorize?client_id=${clientId}$response_type=code$redirect_uri=${encodeURI(
          redirectUri,
        )}$show_dialog=true&scope=user-read-private user-read-email user-modify-playack-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-modify-private playlist-read-private playlist-modify-public playlist-read-collaborative`,
      )
      .then(response => {
        console.log('SPOTIFY AUTH : ', response.data);
      });
  }, []);

  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem('GoogleAccessToken', value);
      console.log('token saved successfully');
    } catch (e) {
      console.log('token saved error : Asynce Storage');
    }
  };

  const signIn = async () => {
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
      navigation.navigate('MainTab');
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
    <Container>
      <Title>Login View</Title>
      <Button title="Sign In" onPress={() => navigation.navigate('SignUp')} />
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
    </Container>
  );
};

export default loginView;
