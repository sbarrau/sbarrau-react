import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';
import PokemonList from './Components/PokemonList';
import Pomodoro from './Components/Pomodoro';
import Drum from './Components/Drum';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About /> ,
      },
      {
        path: "contact",
        element: <Contact /> ,
      },
      {
        path: "pomodoro",
        element: <Pomodoro /> ,
      },
      {
        path: "drum",
        element: <Drum /> ,
      },
      {
        path: "pokemon",
        element: <PokemonList /> ,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



reportWebVitals();
