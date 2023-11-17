import { SimpleFighter } from './Fighter/index';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;  

  constructor() {        
    this._lifePoints = 85;
    this._strength = 63;    
  }
  
  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  setLifePoints(life: number) {
    this._lifePoints = life;
  }

  setStrength(strength: number) {
    this._strength = strength;
  }

    
  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._lifePoints;  
    if (damage <= 0) {
      this._lifePoints = -1;
    } else {
      this._lifePoints = damage;
    }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter) : void {
    enemy.receiveDamage(this._strength);
  }
}
