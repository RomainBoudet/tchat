// == Import : npm
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'; // j'intégre react-router.Je pourrais utiliser la balise Link et Route
import store from './store';


// == Import : local
// Composants
import App from 'src/components/App';

// == Render
//! update pour V18
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html

// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = <Provider store={store}><Router><App /></Router></Provider>;
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const container = document.getElementById('root');
const root = createRoot(container);
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
root.render(rootReactElement);
