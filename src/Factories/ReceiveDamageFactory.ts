import Fighter from '../Fighter/Fighter';

function receiveDamageFactory(character: Fighter, attack: number) {
  const damage = attack - character.defense;    

  if (damage >= character.lifePoints) {
    return -1;
  } 

  if (damage > 0) {
    return character.lifePoints - damage;
  }

  if (damage <= 0) {
    return character.lifePoints - 1;
  }   
}

export default receiveDamageFactory;