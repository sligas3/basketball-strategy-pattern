"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketballModule = void 0;
const common_1 = require("@nestjs/common");
const basketball_service_1 = require("./basketball.service");
const basketball_controller_1 = require("./basketball.controller");
const offensive_pickandroll_strategy_1 = require("./strategies/offensive-pickandroll.strategy");
const offensive_isolation_strategy_1 = require("./strategies/offensive-isolation.strategy");
const offensive_ballmovement_strategy_1 = require("./strategies/offensive-ballmovement.strategy");
const defensive_zone_strategy_1 = require("./strategies/defensive-zone.strategy");
const defensive_press_strategy_1 = require("./strategies/defensive-press.strategy");
const defensive_man_to_man_strategy_1 = require("./strategies/defensive-man-to-man.strategy");
let BasketballModule = class BasketballModule {
};
exports.BasketballModule = BasketballModule;
exports.BasketballModule = BasketballModule = __decorate([
    (0, common_1.Module)({
        controllers: [basketball_controller_1.BasketballController],
        providers: [
            basketball_service_1.BasketballService,
            offensive_pickandroll_strategy_1.OffensivePickAndRollStrategy,
            offensive_isolation_strategy_1.OffensiveIsolationStrategy,
            offensive_ballmovement_strategy_1.OffensiveBallMovementStrategy,
            defensive_zone_strategy_1.DefensiveZoneStrategy,
            defensive_press_strategy_1.DefensivePressStrategy,
            defensive_man_to_man_strategy_1.DefensiveManToManStrategy,
        ],
    })
], BasketballModule);
//# sourceMappingURL=basketball.module.js.map