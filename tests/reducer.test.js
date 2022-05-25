// eslint-disable-line
//! Mocha : mon test runner avec "Describe" pour définir un chapitre 
//! et "it" pour définir un test

//! Chai : pour les assertion, avec Expect, Should, Assert pour affirmer quelque chose et le tester
//! Chai : un outil qui me donne des méthodes pour tester ce que j'attends de mes fonctions
//! en enzyme pour rester mes composant REACT ! (https://enzymejs.github.io/enzyme/)
// géré par le fichier setup, chargé en amont :
/* require ("@babel/register")();
require("ignore-styles"); */

import {expect} from 'chai';
import reducer, { stateInitial } from 'src/store/reducer.js';

describe('Reducer tests', () => { 
  it ('should be a function', () => {
    expect(reducer).to.be.a('function');
  });

  it('should return initialState', () => {
    expect(reducer()).to.be.a('object');
    expect(reducer()).to.equal(stateInitial);
  });
})
