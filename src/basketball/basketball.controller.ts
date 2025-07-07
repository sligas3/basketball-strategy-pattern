import { Controller, Post, Body } from "@nestjs/common";
import { BasketballService } from "./basketball.service";

@Controller("basketball")
export class BasketballController {
  constructor(private readonly basketballService: BasketballService) {}

  @Post("play")
  play(@Body() body: { strategy: string; players: string[] }): string {
    return this.basketballService.play(body.strategy, body.players);
  }
}
