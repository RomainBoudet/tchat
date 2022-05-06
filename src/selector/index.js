/** 
* Une fonction permettant de trouver l'id le plus haut dans le tableauen paramétre
* @param {Array} array
* @return {Number} maxId
*/

export const hightestID = (array) => {
const ids = array.map(item => item.id);
const maxId =  ids.length === 0 ? 0 : Math.max(...ids);
return maxId;
}
