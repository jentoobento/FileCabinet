// Boilerplate RootNavigation service
// Can be accessed across project without passing down the prop chain
// https://reactnavigation.org/docs/navigating-without-navigation-prop/

import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function goBack() {
  navigationRef.current?.goBack();
}

export function dispatch(func) {
  navigationRef.current?.dispatch(func);
}

// add other navigation functions needed and export them
