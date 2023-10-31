<h1>RPG Battle 🧙 ⚔️ 🧝</h1>

Este projeto é um jogo de RPG (Role-Playing Game) onde foram aplicados os princípios de Programação Orientada a Objetos (POO) e SOLID. O projeto foi desenvolvido como parte do curso de Desenvolvimento Web da Trybe.

<h2>Para rodar o projeto localmente, siga os seguintes passos</h2>

Clone o repositório:
```
git clone git@github.com:delso-ferreira/RPG_Battle_App.git
```

Navegue até o diretório do projeto:

```
cd RPG_Battle_App
```

Instale as dependências:
```
npm install
```

Inicie o projeto:
```
npm start
```

Como usar o jogo
Para criar uma batalha PvP, você precisa criar duas instâncias de jogadores. 

```
const player1 = new Character('Ana');
const player2 = new Character('João');
const pvp = new PVP(player1, player2);
```

Você pode aumentar o nível dos personagens com o método levelUp.

```
player1.levelUp();
```

Jogadores podem fazer um ataque especial devastador contra outro jogador.

```
player2.special(player1)
```

<h2>Princípios aplicados:</h2>

Os princípios SOLID foram aplicados para tornar o código mais robusto, escalável e flexível, tolerante a mudanças e facilitar a implementação de novos requisitos para a evolução e manutenção do sistema.

✔️Single Responsibility Principle (SRP): Cada classe tem uma única responsabilidade, o que facilita a manutenção e a refatoração do código.

✔️Open-Closed Principle (OCP): As classes são abertas para extensão, mas fechadas para modificação. Isso significa que é possível adicionar novos comportamentos às classes sem alterar seu código existente.

✔️Liskov Substitution Principle (LSP): As subclasses podem substituir suas classes base sem afetar a correção do programa.
Interface Segregation Principle (ISP): As interfaces são específicas e não forçam as classes a implementar métodos que não utilizam.

✔️Dependency Inversion Principle (DIP): As classes de alto nível não dependem de classes de baixo nível, e ambas dependem de abstrações.

Além dos princípios SOLID, o projeto também utiliza o padrão de projeto Factory Method. A função receiveDamageFactory é um exemplo de um Factory Method. Ela recebe um personagem e um ataque como parâmetros e retorna um valor baseado no dano sofrido pelo personagem. Esta função encapsula a lógica de cálculo de dano, tornando o código mais limpo e escalável.

```
import Fighter from '../Fighter/Fighter';

function receiveDamageFactory(character: Fighter, attack: number) {
 const damage = attack - character.defense;   

 if (damage >= character.lifePoints) {
   return -1;
 } 

 if (damage > 0) {
   return character.lifePoints - damage;
 }

 if (damage <= 0) {
   return character.lifePoints - 1;
 }  
}

export default receiveDamageFactory;
```

Conclusão
A aplicação dos princípios SOLID, juntamente com técnicas e boas práticas de Clean Code, são fatores essenciais para a criação de um código maduro e eficiente.

Contato
Se você tiver alguma dúvida ou sugestão, por favor, entre em contato.

<a href="mailto:delsofelipe@gmail.com.br">Email</a>
<a href="https://www.linkedin.com/in/delsoferreira/">Linkedin</a>
   
