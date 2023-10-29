import Character from '../Character';

const personagem = new Character('tales');

console.log(personagem.lifePoints);

console.log(personagem.receiveDamage(10));

console.log(personagem.lifePoints);