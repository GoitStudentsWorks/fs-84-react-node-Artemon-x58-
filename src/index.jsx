import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { GlobalStyles } from 'components/GlobalStyles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/fs-84-react-node-Artemon-x58">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
