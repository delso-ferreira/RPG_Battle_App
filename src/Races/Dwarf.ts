import Race from './Race';

export default class Dwarf extends Race {  
  private _maxLifePoints : number;

  private static _createdRacesInstances = 0;

  constructor(name: string, _dexterity: number) {
    super(name, _dexterity);
    this._maxLifePoints = 80;
    Dwarf._createdRacesInstances += 1;
  }

  get maxLifePoints() : number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._createdRacesInstances;
  } 
}