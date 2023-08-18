export interface iReport {
  id: string;
  source: string;
  amount: number;
  created_at: Date;
  updated_at: Date;
  type: ReportType;
}

export interface iData {
  reports: iReport[];
}

export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export const data: iData = {
  reports: [
    {
      id: 'uuid1',
      source: 'Salary',
      amount: 50000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid2',
      source: 'Food',
      amount: 50000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
  ],
};
