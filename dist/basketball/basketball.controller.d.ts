import { BasketballService } from "./basketball.service";
export declare class BasketballController {
    private readonly basketballService;
    constructor(basketballService: BasketballService);
    play(body: {
        strategy: string;
        players: string[];
    }): string;
}
