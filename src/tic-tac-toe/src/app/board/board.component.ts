import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent {
  squares!: string[];
  next!: boolean;
  winner!: string;
  //  para ocultar inicialmente el tablero
  start: boolean = false;

  // determina si es el turno del jugador 'X' o del jugador 'O'
  get player() {
    return this.next ? 'X' : 'O';
  }

  newGame(): void {
    for (let i = 0; i < 9; i++) {
      this.squares = Array(9).fill('');
    }
    this.winner = '';
    this.next = true;
    //  muestra el tablero
    this.start = true;
  }

  move(id: number): void {
    if (!this.squares[id]) {
      this.squares.splice(id, 1, this.player);
      this.next = !this.next;
    }
    this.winner = this.calculateWinner();
  }

  calculateWinner(): string {
    const winConditions: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // recorre el arreglo de lineas ganadoras 'winConditions'
    for (let i = 0; i < winConditions.length; i++) {
      // destructura cada linea
      const [a, b, c] = winConditions[i];
      // si los 3 elementos de la línea coinciden, retorna el jugador ganador 'X' o 'O'
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return '';
  }
}
