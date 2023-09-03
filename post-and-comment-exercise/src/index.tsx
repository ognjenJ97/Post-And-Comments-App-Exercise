import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import PostsContextProvider from './store/post-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <PostsContextProvider>
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </PostsContextProvider>
);

