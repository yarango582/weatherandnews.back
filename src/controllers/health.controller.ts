import { Get, JsonController, Req } from "routing-controllers";
import { Request } from "express";

@JsonController("/v1/health")
class HealthController {
  private readonly instanceId: string;

  @Get("/")
  health(@Req() req: Request) {
    return {
      version: process.env.IMAGE_NAME || this.instanceId,
      message: "system ok"
    };
  }
}

export default HealthController;