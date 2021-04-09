import { Controller, Get } from '@nestjs/common';
// import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { HealthService } from './health.service';

@Controller()
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get('live')
  // @ApiExcludeEndpoint()
  getLive() {
    // return 200
  }

  @Get('ready')
  // @ApiExcludeEndpoint()
  getReady() {
    return this.healthService.getReady();
  }
}
