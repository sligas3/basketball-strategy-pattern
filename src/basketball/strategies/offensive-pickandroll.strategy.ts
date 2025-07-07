import { Injectable } from "@nestjs/common";
import { BasketballStrategy } from "./basketball-strategy.interface";

@Injectable()
export class OffensivePickAndRollStrategy implements BasketballStrategy {
  execute(players: string[]): string {
    const playerCap = players.join(", ").toUpperCase();
    return `Pick and Roll: Los jugadores ${playerCap} ejecutan una pantalla y corte hacia la canasta.`;
  }
}
