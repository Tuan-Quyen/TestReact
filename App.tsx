import React, { useEffect } from 'react';
import { AppState } from 'react-native';
import store from './lib/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { HOME_ROOT, LOGIN_ROUTE, RESULT_ROUTE, RootStackParamList } from './lib/type/routeType';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './lib/page/loginPage';
import ResultPage from './lib/page/resultPage';
import { HomeStack } from './lib/utils/stack';
import { counterStyle } from './lib/utils/style';

const App = () => {
  useEffect(() => {
    const handleAppStateChange = (nextAppState: string) => {
      if (nextAppState == 'background' || 'inactive') {
        console.log('unmount');
      }
      console.log(nextAppState);
    }
    const subscription = AppState.addEventListener('change', handleAppStateChange)
    return () => subscription.remove();
  }, [])

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName={LOGIN_ROUTE} screenOptions={counterStyle}>
        <Stack.Screen name={LOGIN_ROUTE} component={LoginPage} />
        <Stack.Screen name={HOME_ROOT} component={HomeStack} options={{ headerShown: false }} />
        <Stack.Screen name={RESULT_ROUTE} component={ResultPage} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>;
};

export default App;
