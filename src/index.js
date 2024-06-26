import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import comics from './data/comicPortrait';
import ComicView from './views/ComicView';

const routes = [
  {
    path: "/",
    element: <App />,
  },
];

comics.forEach((comics) => {
  routes.push({
    path: comics.name,
    element: <ComicView comics={comics}/>,
  });
});

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
