import { Injectable } from "@nestjs/common";
import { BasketballStrategy } from "./basketball-strategy.interface";

@Injectable()
export class DefensiveZoneStrategy implements BasketballStrategy {
  execute(players: string[]): string {
    const playerCap = players.join(", ").toUpperCase();
    return `Defensa en zona: Los jugadores ${playerCap} se distribuyen cubriendo áreas del campo.`;
  }
}
