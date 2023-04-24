import { Controller, Get } from '@nestjs/common';
import { CameraService } from '../services/camera.service';

@Controller('camera') // Default route of '/camera'
export class CameraController {
  constructor(private readonly cameraService: CameraService) {}

  @Get()
  getHello(): string {
    return this.cameraService.getHello();
  }
}
