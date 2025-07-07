import { Injectable } from "@nestjs/common";
import { BasketballStrategy } from "./basketball-strategy.interface";

@Injectable()
export class OffensiveIsolationStrategy implements BasketballStrategy {
  execute(players: string[]): string {
    return `Aislamiento: Uno de los jugadores (${players[0].toUpperCase()}) se queda en uno contra uno mientras los demás abren la cancha.`;
  }
}
