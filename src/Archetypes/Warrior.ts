import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Warrior extends Archetype {
  private _resource : EnergyType;
  static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    Warrior._createdArchetypeInstances += 1; 
    this._resource = 'stamina';
  }

  static createdArchetypeInstances() : number {
    return Warrior._createdArchetypeInstances;
  }

  get energyType() : EnergyType {
    return this._resource;
  }
}