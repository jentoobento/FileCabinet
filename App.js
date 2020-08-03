import React from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {NavigationContainer} from '@react-navigation/native';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {navigationRef} from './src/navigation/NavigationService';
import Drawer from './src/navigation/Drawer';
// import reducers for redux below
import listReducer from './src/redux/reducers/listReducer';

// add reducers below
const reducer = combineReducers({
  list: listReducer,
});
const logger = createLogger();
const middleware = [thunk, logger];
const store = createStore(reducer, compose(applyMiddleware(...middleware)));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Drawer />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
