import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Necromancer extends Archetype {
  private _resource : EnergyType;
  static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    Necromancer._createdArchetypeInstances += 1; 
    this._resource = 'mana';
  }

  static createdArchetypeInstances() : number {
    return Necromancer._createdArchetypeInstances;
  }

  get energyType() : EnergyType {
    return this._resource;
  }
}