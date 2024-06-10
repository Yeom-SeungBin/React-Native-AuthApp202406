import React, { useContext } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { login } from '../util/auth';
import { AuthContext } from '../store/auth-context';
import { Alert } from 'react-native';

const LoginScreen = () => {
  const { authenticate } = useContext(AuthContext);
  // loginHandler로 전달되는 매개값은 3개(email, password, name) 이지만,
  // name은 login 쪽에서 사용할 일 없음. email, password만 구조 분해 할당.
  const loginHandler = ({ email, password }) => {
    console.log('loginHandler email : ', email);

    try {
      const token = login(email, password);
      authenticate(token);
    } catch (error) {
      Alert.alert(error);
    }
  };

  return <AuthContent onAuthenticate={loginHandler} />;
};

export default LoginScreen;
