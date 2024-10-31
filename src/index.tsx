import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from '@/app/store';
import App from './App';
import { Loader } from '@/ui';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>
);
