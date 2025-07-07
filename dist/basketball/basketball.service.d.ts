import { OffensivePickAndRollStrategy } from "./strategies/offensive-pickandroll.strategy";
import { OffensiveIsolationStrategy } from "./strategies/offensive-isolation.strategy";
import { OffensiveBallMovementStrategy } from "./strategies/offensive-ballmovement.strategy";
import { DefensiveZoneStrategy } from "./strategies/defensive-zone.strategy";
import { DefensivePressStrategy } from "./strategies/defensive-press.strategy";
import { DefensiveManToManStrategy } from "./strategies/defensive-man-to-man.strategy";
export declare class BasketballService {
    private readonly pickAndRoll;
    private readonly isolation;
    private readonly ballMovement;
    private readonly zone;
    private readonly press;
    private readonly man;
    private strategies;
    constructor(pickAndRoll: OffensivePickAndRollStrategy, isolation: OffensiveIsolationStrategy, ballMovement: OffensiveBallMovementStrategy, zone: DefensiveZoneStrategy, press: DefensivePressStrategy, man: DefensiveManToManStrategy);
    play(strategyType: string, players: string[]): string;
}
