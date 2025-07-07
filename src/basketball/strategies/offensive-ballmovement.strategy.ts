import { Injectable } from "@nestjs/common";
import { BasketballStrategy } from "./basketball-strategy.interface";

@Injectable()
export class OffensiveBallMovementStrategy implements BasketballStrategy {
  execute(players: string[]): string {
    const playerCap = players.join(", ").toUpperCase();
    return `Movimiento de balón: Los jugadores ${playerCap} se pasan el balón rápidamente buscando al tirador desmarcado.`;
  }
}
