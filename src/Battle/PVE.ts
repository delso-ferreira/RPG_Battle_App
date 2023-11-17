import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _npc : SimpleFighter[];

  constructor(protected player: Fighter, protected NPC: SimpleFighter[]) {
    super(player);
    this._npc = NPC;
  } 

  fight(): number {
    while (this.player.lifePoints !== -1 && this._npc.length !== 0) {
      this.player.attack(this._npc[0]);
     
      if (this._npc[0].lifePoints === -1) this._npc.shift();
      this._npc.forEach((enemy) => {
        enemy.attack(this.player);
      });
    }

    return super.fight(); 
  }
}