"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketballService = void 0;
const common_1 = require("@nestjs/common");
const offensive_pickandroll_strategy_1 = require("./strategies/offensive-pickandroll.strategy");
const offensive_isolation_strategy_1 = require("./strategies/offensive-isolation.strategy");
const offensive_ballmovement_strategy_1 = require("./strategies/offensive-ballmovement.strategy");
const defensive_zone_strategy_1 = require("./strategies/defensive-zone.strategy");
const defensive_press_strategy_1 = require("./strategies/defensive-press.strategy");
const defensive_man_to_man_strategy_1 = require("./strategies/defensive-man-to-man.strategy");
let BasketballService = class BasketballService {
    constructor(pickAndRoll, isolation, ballMovement, zone, press, man) {
        this.pickAndRoll = pickAndRoll;
        this.isolation = isolation;
        this.ballMovement = ballMovement;
        this.zone = zone;
        this.press = press;
        this.man = man;
        this.strategies = {
            "ofensiva-pickandroll": this.pickAndRoll,
            "ofensiva-aislamiento": this.isolation,
            "ofensiva-movimientobalon": this.ballMovement,
            "defensiva-zona": this.zone,
            "defensiva-presion": this.press,
            "defensiva-hombre": this.man,
        };
    }
    play(strategyType, players) {
        const strategy = this.strategies[strategyType];
        console.log("🚀 ~ Se selecciona la estrategia:", strategyType);
        if (!strategy)
            throw new common_1.BadRequestException("Estrategia no soportada");
        return strategy.execute(players);
    }
};
exports.BasketballService = BasketballService;
exports.BasketballService = BasketballService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [offensive_pickandroll_strategy_1.OffensivePickAndRollStrategy,
        offensive_isolation_strategy_1.OffensiveIsolationStrategy,
        offensive_ballmovement_strategy_1.OffensiveBallMovementStrategy,
        defensive_zone_strategy_1.DefensiveZoneStrategy,
        defensive_press_strategy_1.DefensivePressStrategy,
        defensive_man_to_man_strategy_1.DefensiveManToManStrategy])
], BasketballService);
//# sourceMappingURL=basketball.service.js.map