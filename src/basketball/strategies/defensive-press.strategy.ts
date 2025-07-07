import { Injectable } from "@nestjs/common";
import { BasketballStrategy } from "./basketball-strategy.interface";

@Injectable()
export class DefensivePressStrategy implements BasketballStrategy {
  execute(players: string[]): string {
    const playerCap = players.join(", ").toUpperCase();
    return `Presión total: Los jugadores ${playerCap} presionan al rival desde su campo defensivo.`;
  }
}
