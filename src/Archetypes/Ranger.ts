import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Ranger extends Archetype {
  private _resource : EnergyType;
  static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    Ranger._createdArchetypeInstances += 1; 
    this._resource = 'stamina';
  }

  static createdArchetypeInstances() : number {
    return Ranger._createdArchetypeInstances;
  }

  get energyType() : EnergyType {
    return this._resource;
  }
}