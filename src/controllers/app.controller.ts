import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller() // Default route of '/' for all of its contained routes
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // uses the base route so this method is accessed by localhost:3001/
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('anotherHello') // appends to the base route so this method is accessed by localhost:3001/anotherHello
  getHelloV2(): string {
    return this.appService.getHello();
  }
}
