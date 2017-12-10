var Web3 = require('web3');
var web3 = new Web3()
var matches = [
  'Rusia - Arabia Saudita',
  'Egipto - Uruguay',
  'Rusia - Egipto',
  'Uruguay - Arabia Saudita',
  'Uruguay - Rusia',
  'Arabia Saudita - Egipto',

  'Portugal - España',
  'Marruecos - Irán',
  'Portugal- Marruecos',
  'Irán - España',
  'Irán - Portugal',
  'España - Marruecos',

  'Francia - Australia',
  'Perú - Dinamarca',
  'Francia - Perú',
  'Dinamarca - Australia',
  'Dinmarca - Francia',
  'Australia - Perú',

  'Argentina - Islandia',
  'Croacia - Nigeria',
  'Argentina - Croacia',
  'Nigeria - Islandia',
  'Nigeria - Argentina',
  'Islandia - Croacia',

  'Brasil - Suiza',
  'Costa Rica - Serbia',
  'Brasil - Costa Rica',
  'Serbia - Suiza',
  'Serbia - Brasil',
  'Suiza - Costa Rica',

  'Alemania - México',
  'Suecia - Corea del Sur',
  'Alemania - Suecia',
  'Corea del Sur - México',
  'Coreal del Sur - Alemania',
  'México - Suecia',

  'Bélgica - Panamá',
  'Túnez - Inglaterra',
  'Bélgica - Túnez',
  'Inglaterra - Panamá',
  'Inglaterra - Bélgica',
  'Panamá - Túnez',

  'Polonia - Senegal',
  'Colombia - Japón',
  'Polonia - Colombia',
  'Japón - Senegal',
  'Japón - Polonia',
  'Senegal - Colombia'
]

function toHex(matches) {
  for(var i = 0 ; i<matches.length ; i++)
    matches[i] = web3.toHex(matches[i]);
  return matches;
}

matches = toHex(matches);
module.exports = matches 
