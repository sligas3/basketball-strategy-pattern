import { Injectable, BadRequestException } from "@nestjs/common";
import { OffensivePickAndRollStrategy } from "./strategies/offensive-pickandroll.strategy";
import { OffensiveIsolationStrategy } from "./strategies/offensive-isolation.strategy";
import { OffensiveBallMovementStrategy } from "./strategies/offensive-ballmovement.strategy";
import { DefensiveZoneStrategy } from "./strategies/defensive-zone.strategy";
import { DefensivePressStrategy } from "./strategies/defensive-press.strategy";
import { DefensiveManToManStrategy } from "./strategies/defensive-man-to-man.strategy";

@Injectable()
export class BasketballService {
  private strategies: Record<string, any>;

  constructor(
    private readonly pickAndRoll: OffensivePickAndRollStrategy,
    private readonly isolation: OffensiveIsolationStrategy,
    private readonly ballMovement: OffensiveBallMovementStrategy,
    private readonly zone: DefensiveZoneStrategy,
    private readonly press: DefensivePressStrategy,
    private readonly man: DefensiveManToManStrategy
  ) {
    this.strategies = {
      "ofensiva-pickandroll": this.pickAndRoll,
      "ofensiva-aislamiento": this.isolation,
      "ofensiva-movimientobalon": this.ballMovement,
      "defensiva-zona": this.zone,
      "defensiva-presion": this.press,
      "defensiva-hombre": this.man,
    };
  }

  play(strategyType: string, players: string[]): string {
    const strategy = this.strategies[strategyType];
    if (!strategy) throw new BadRequestException("Estrategia no soportada");
    return strategy.execute(players);
  }
}
