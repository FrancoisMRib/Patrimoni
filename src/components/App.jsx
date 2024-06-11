//import { useState } from 'react'

// import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Accueil } from "./pages/Accueil";
import { Itineraires } from "./pages/Itineraires";
import { Contact } from "./pages/Contact";
import { Jeux } from "./pages/Jeux";
import { Apropos } from "./pages/About";
import { Liens } from "./pages/Links";
// import { Map } from './Map.jsx';
import React from 'react';
//import {Carousel} from './pages/Carrousel'; // Importez le composant Carousel

const router = createBrowserRouter([
  {
    path:"/",
    element: <Accueil/>
  },
  {
    path:"/itineraire",
    element: <Itineraires/>
  },
  {
    path:"/games",
    element: <Jeux/>
  },
  {
    path:"/contact",
    element: <Contact/>
  },
  // {
  //   path:"/connexion",
  //   element: <Connexion/>
  // },
  {
    path:"/about",
    element: <Apropos/>
  },
  {
    path:"/links",
    element: <Liens/>
  }
])

export function App() {
  return (
    <RouterProvider router={router} />
    // <div className="App">
    //   <h1>Quiz Patrimoni</h1>
    //   <Carousel />
    //   <div className="propositions">
    //     <div style="background-color: #c17373;color: white;">Proposition 1</div>
    //     <div style="background-color: #c17373;color: white;">Proposition 2</div>
    //     <div style="background-color: #c17373;color: white;">Proposition 3</div>
    //   </div>
    // </div>
  );
}
