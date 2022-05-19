/** 
* Une fonction permettant de trouver l'id le plus haut dans le tableau en paramétre
* @param {Array} array
* @return {Number} maxId
*/
export const hightestID = (array) => {
const ids = array.map(item => item.id);
const maxId =  ids.length === 0 ? 0 : Math.max(...ids);
return maxId;
}


export const getEmail = state => state.settings.email;
export const getPass = state => state.settings.password;
export const getIsLogged = state => state.settings.isLogged;
export const getPseudo = state => state.settings.pseudo;
export const getInput = state => state.input;

