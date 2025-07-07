"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OffensiveBallMovementStrategy = void 0;
const common_1 = require("@nestjs/common");
let OffensiveBallMovementStrategy = class OffensiveBallMovementStrategy {
    execute(players) {
        const playerCap = players.join(", ").toUpperCase();
        return `Movimiento de balón: Los jugadores ${playerCap} se pasan el balón rápidamente buscando al tirador desmarcado.`;
    }
};
exports.OffensiveBallMovementStrategy = OffensiveBallMovementStrategy;
exports.OffensiveBallMovementStrategy = OffensiveBallMovementStrategy = __decorate([
    (0, common_1.Injectable)()
], OffensiveBallMovementStrategy);
//# sourceMappingURL=offensive-ballmovement.strategy.js.map