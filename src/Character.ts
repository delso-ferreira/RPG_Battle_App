import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';
import receiveDamageFactory from './Factories/ReceiveDamageFactory';

export default class Character implements Fighter {
  private _race : Race;
  private _archetype : Archetype;
  private _maxLifePoints : number;
  private _lifePoints : number;
  private _strength : number;
  private _defense : number;
  private _dexterity : number;
  private _energy : Energy;  

  constructor(name: string) {    
    this._archetype = new Mage(name);
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };  
  }

  get defense() : number {
    return this._defense;
  }

  get energy() : Energy {
    return { ...this._energy };
  }

  get strength() : number {
    return this._strength;
  }

  get lifePoints() : number {
    return this._lifePoints;
  }

  get race() : Race {
    return this._race;
  }

  get archetype() : Archetype {
    return this._archetype;
  }

  get dexterity() : number {
    return this._dexterity;
  }

  receiveDamage(attackPoints: number): number {
    this._lifePoints = receiveDamageFactory(this, attackPoints) as number;
    return this._lifePoints;    
  }

  attack(enemy : SimpleFighter) : void {
    const attack = this._strength;

    enemy.receiveDamage(attack);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;  

    if (this._maxLifePoints >= this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: SimpleFighter) : void {
    enemy.receiveDamage(10 * this._strength);
  }
}