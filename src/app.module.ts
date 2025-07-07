import { Module } from "@nestjs/common";
import { BasketballModule } from "./basketball/basketball.module";
import { HealthController } from "./health.controller";

@Module({
  imports: [BasketballModule],
  controllers: [HealthController],
})
export class AppModule {}
