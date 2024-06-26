import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context/AppContex';
import { FilterProvider } from './context/FilterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </AppProvider>
);
