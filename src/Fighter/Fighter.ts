import Energy from '../Energy';

export default interface Fighter {
  lifePoints: number,
  strength: number,
  defense: number,
  energy?: Energy, // deve ser opcional

  attack(enemy: Fighter) : void

  special?(enemy: Fighter) : void // deve ser opcional

  levelUp() : void

  receiveDamage(attackPoints: number) : number
}
