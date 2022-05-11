import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

//! je conçois deux cas d'utilisations possible pour mon compsant : 
//! soit il a un seul composant enfant, et je l'affiche ou pas selon si je sui connecté
//! soit j'ai plusieurs composants et j'affiche le premier si connecté ou le deuxiéme si pas connecté !

const ifLoggedIn = ({ pseudo, enfantDuContainer }) => {
  // ja calcul le nombre de composant enfant de ce composant
  const severalChildren = enfantDuContainer.length;

if(!severalChildren) {
// si il n'y a qu'un composant dans le composant ifLoggedIn, 
// je vérifis si le pseuso est présent, si oui, j'affiche cet unique compsant, sinon, j'affiche rien ! 
  return pseudo ? enfantDuContainer : false;
}
// Si il a plusieur composant enfants dans ce composant ifLoggedIn
// si pseudo est présent, j'affiche le premier composant, sinon le deuxiéme, qui me précise que je ne suis pas connnécté !

return pseudo ? enfantDuContainer[0] : enfantDuContainer[1]; 
  };

ifLoggedIn.propTypes = {
  pseudo: PropTypes.string,
  enfantDuContainer: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.shape(),
  ]).isRequired,
};

export default ifLoggedIn;
