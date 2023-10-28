import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Mage extends Archetype {
  private _resource : EnergyType;
  static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    Mage._createdArchetypeInstances += 1; 
    this._resource = 'mana';
  }

  static createdArchetypeInstances() : number {
    return Mage._createdArchetypeInstances;
  }

  get energyType() : EnergyType {
    return this._resource;
  }
}