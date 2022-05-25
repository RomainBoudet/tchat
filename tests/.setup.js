// pour expliquer à webpack la config !


require ("@babel/register")();
require("ignore-styles");
// Enzyme pose probléme => semble nécéssiter un downgrade de node pour régler le probleme de : Package subpath './lib/utils' is not defined by "exports"
/* const enzyme = require("enzyme");
const Adapter = require ("enzyme-adapter-react-16");
enzyme.configure({adapter: new Adapter()});  */
