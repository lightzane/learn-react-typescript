import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import { App } from './App';
import { HashRouter } from 'react-router-dom';
import { FavoritesProvider } from './store/favorites.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <FavoritesProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </FavoritesProvider>
  </React.StrictMode>
);