import { Injectable } from '@nestjs/common';
import { ReportType } from 'src/data';
import { ReportsService } from 'src/reports/reports.service';

@Injectable()
export class SummaryService {
  constructor(private readonly reportsService: ReportsService) {}
  calculateSummary() {
    const totalExpense = this.reportsService
      .getAllReports(ReportType.EXPENSE)
      .reduce((sum, report) => sum + report.amount, 0);
    const totalIncome = this.reportsService
      .getAllReports(ReportType.INCOME)
      .reduce((sum, report) => sum + report.amount, 0);
    return {
      totalIncome,
      totalExpense,
      netIncome: totalIncome - totalExpense,
    };
  }
}
