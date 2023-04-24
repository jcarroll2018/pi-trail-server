import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { CameraController } from 'src/controllers/camera.controller';
import { CameraService } from 'src/services/camera.service';

@Module({
  imports: [],
  controllers: [AppController, CameraController],
  providers: [AppService, CameraService],
})
export class AppModule {}
