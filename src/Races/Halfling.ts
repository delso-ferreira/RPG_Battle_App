import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints : number;

  private static _createdRacesInstances = 0;

  constructor(name: string, _dexterity: number) {
    super(name, _dexterity);
    this._maxLifePoints = 60;
    Halfling._createdRacesInstances += 1;
  }
  
  get maxLifePoints() : number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling._createdRacesInstances;
  }
}