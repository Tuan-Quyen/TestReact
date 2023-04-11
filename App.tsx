import { useEffect } from 'react';
import { AppState, StyleSheet } from 'react-native';
import store from './lib/store';
import { Provider } from 'react-redux';
import CounterPage from './lib/page/counterPage';
import HomePage from './lib/page/homePage';
import ResultPage from './lib/page/resultPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COUNTER_ROUTE, HOME_ROUTE, RESULT_ROUTE, RootStackParamList } from './lib/type/routeType';

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
      <Stack.Navigator initialRouteName="Counter">
        <Stack.Screen name={HOME_ROUTE} component={HomePage} options={styles().homeStyle} />
        <Stack.Screen name={COUNTER_ROUTE} component={CounterPage} options={styles().counterStyle} />
        <Stack.Screen name={RESULT_ROUTE} component={ResultPage} options={styles().counterStyle} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>;
};

function styles(): any {
  let header = ({
    headerTitleStyle: {
      color: "#FFFFFF",
      fontWeight: "bold",
      fontSize: 18,
    },
    headerTintColor: '#FFFFFF',
  })
  return {
    counterStyle: {
      headerTitleStyle: header.headerTitleStyle,
      headerTintColor: header.headerTintColor,
      headerStyle: {
        backgroundColor: '#ff8080'
      }
    },
    homeStyle: {
      headerTitleStyle: header.headerTitleStyle,
      headerTintColor: header.headerTintColor,
      headerStyle: {
        backgroundColor: '#0099ff'
      }
    }
  }
}

export default App;
