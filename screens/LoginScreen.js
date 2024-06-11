import React, { useContext } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { login } from '../util/auth';
import { AuthContext } from '../store/auth-context';
import { Alert } from 'react-native';

const LoginScreen = () => {
  const { authenticate } = useContext(AuthContext);
  // loginHandler로 전달되는 매개값은 3개(email, password, name) 이지만,
  // name은 login 쪽에서 사용할 일 없음. email, password만 구조 분해 할당.
  const loginHandler = async ({ email, password }) => {
    console.log('loginHandler email : ', email);

    try {
      const { token, userName, role } = await login(email, password);
      console.log('token : ', token);
      authenticate(token, userName, role);
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
};

export default LoginScreen;
