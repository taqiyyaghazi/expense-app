import { Module } from '@nestjs/common';
import { ReportsModule } from 'src/reports/reports.module';
import { SummaryController } from './summary.controller';
import { SummaryService } from './summary.service';

@Module({
  imports: [ReportsModule],
  controllers: [SummaryController],
  providers: [SummaryService],
})
export class SummaryModule {}
