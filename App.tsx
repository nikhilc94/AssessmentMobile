import React from 'react';
import type {Node} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import Setup from './src/setup/Setup';
import state, {persistor} from './src/state';

const App: () => Node = () => {
  return (
    <Provider store={state}>
      <PersistGate loading={null} persistor={persistor}>
        <Setup />
      </PersistGate>
    </Provider>
  );
};

export default App;
