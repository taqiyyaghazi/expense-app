import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { ReportType, data, iReport } from '../data';
import { ReportResponseDto } from '../dtos/report.dto';

interface iCreateReport {
  source: string;
  amount: number;
}

interface iUpdateReport {
  source?: string;
  amount?: number;
}

@Injectable()
export class ReportsService {
  getAllReports(type: ReportType): ReportResponseDto[] {
    return data.reports
      .filter((report) => report.type === type)
      .map((report) => new ReportResponseDto(report));
  }

  getReportById(type: ReportType, id: string): ReportResponseDto {
    const report = data.reports
      .filter((report: iReport) => report.type === type)
      .find((report) => report.id === id);

    if (!report) return;

    return new ReportResponseDto(report);
  }

  createReport(
    type: ReportType,
    { source, amount }: iCreateReport,
  ): ReportResponseDto {
    const newReport: iReport = {
      id: uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type,
    };
    data.reports.push(newReport);
    return new ReportResponseDto(newReport);
  }

  updateReport(
    type: ReportType,
    id: string,
    body: iUpdateReport,
  ): ReportResponseDto {
    const reportToUpdate = data.reports
      .filter((report) => report.type === type)
      .find((report) => report.id === id);

    if (!reportToUpdate) return;

    const reportIndex = data.reports.findIndex(
      (report) => report.id === reportToUpdate.id,
    );

    data.reports[reportIndex] = {
      ...data.reports[reportIndex],
      ...body,
      updated_at: new Date(),
    };
    return new ReportResponseDto(data.reports[reportIndex]);
  }

  deleteReport(id: string) {
    const reportIndex = data.reports.findIndex((report) => report.id === id);

    if (reportIndex === -1) return;

    data.reports.splice(reportIndex, 1);
    return;
  }
}
