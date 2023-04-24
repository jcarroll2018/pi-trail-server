import { Injectable } from '@nestjs/common';

@Injectable()
export class CameraService {
  getHello(): string {
    return 'Hello Camera!';
  }
}
