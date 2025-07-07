import { Module } from "@nestjs/common";
import { BasketballService } from "./basketball.service";
import { BasketballController } from "./basketball.controller";
import { OffensivePickAndRollStrategy } from "./strategies/offensive-pickandroll.strategy";
import { OffensiveIsolationStrategy } from "./strategies/offensive-isolation.strategy";
import { OffensiveBallMovementStrategy } from "./strategies/offensive-ballmovement.strategy";
import { DefensiveZoneStrategy } from "./strategies/defensive-zone.strategy";
import { DefensivePressStrategy } from "./strategies/defensive-press.strategy";
import { DefensiveManToManStrategy } from "./strategies/defensive-man-to-man.strategy";

@Module({
  controllers: [BasketballController],
  providers: [
    BasketballService,
    OffensivePickAndRollStrategy,
    OffensiveIsolationStrategy,
    OffensiveBallMovementStrategy,
    DefensiveZoneStrategy,
    DefensivePressStrategy,
    DefensiveManToManStrategy,
  ],
})
export class BasketballModule {}
