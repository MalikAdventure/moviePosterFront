import './main.css';

import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/app/App.tsx';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

import Spinner from './components/UI/loaders/spinner/spinner';

const store = setupStore();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense
        fallback={
          <div style={{ margin: '40vh auto' }}>
            <Spinner />
          </div>
        }
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </Provider>
  </StrictMode>
);
