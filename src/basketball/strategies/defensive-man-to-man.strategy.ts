import { Injectable } from '@nestjs/common';
import { BasketballStrategy } from './basketball-strategy.interface';

@Injectable()
export class DefensiveManToManStrategy implements BasketballStrategy {
  execute(players: string[]): string {
    const playerCap = players.join(', ').toUpperCase();
    return `Defensa hombre a hombre: Cada jugador (${playerCap}) marca a un rival específico.`;
  }
}