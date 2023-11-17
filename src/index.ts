import Character from "./Character";
import Monster from "./Monster";
import Dragon from "./Dragon";
import Battle from "./Battle";
import PVP from './Battle/PVP';
import PVE from './Battle/PVE';

const player1 = new Character('Kirac Desce-o-Rio')
const player2 = new Character('Reduto Reduto-Mental')
const player3 = new Character('Bassam Exilado-do-Deserto')

player1.strength < 35 ? player1.levelUp() : player1.strength;

const monster1 = new Monster()
const monster2 = new Dragon()

const pvp = new PVP(player2, player3)
const pve = new PVE(player1, [monster1, monster2])

const runBattles = (battles: Battle[]): void => {
    battles.forEach((battle) => {
        battle.fight();
    });
  };

export { player1, player2, player3 };
export { monster1, monster2 };
export { pvp };
export { pve };
export { runBattles };