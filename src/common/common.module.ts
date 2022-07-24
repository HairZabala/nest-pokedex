import { Module } from '@nestjs/common';
import { AxiosService } from './adapters/axios.service';

@Module({
  providers: [AxiosService],
  exports: [AxiosService],
})
export class CommonModule {}
