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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketballController = void 0;
const common_1 = require("@nestjs/common");
const basketball_service_1 = require("./basketball.service");
let BasketballController = class BasketballController {
    constructor(basketballService) {
        this.basketballService = basketballService;
    }
    play(body) {
        return this.basketballService.play(body.strategy, body.players);
    }
};
exports.BasketballController = BasketballController;
__decorate([
    (0, common_1.Post)("play"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], BasketballController.prototype, "play", null);
exports.BasketballController = BasketballController = __decorate([
    (0, common_1.Controller)("basketball"),
    __metadata("design:paramtypes", [basketball_service_1.BasketballService])
], BasketballController);
//# sourceMappingURL=basketball.controller.js.map