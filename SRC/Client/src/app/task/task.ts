export class Task {
  Id: number;
  Identification: string;
  Description: string;
  DesiredHours: number;
  ExpectedBudget: number;
  Comments: Comment[];
  Active: boolean;
  DeadLine: Date;
}

export class Comment {
  Id: number;
  Text: string;
  Created: Date;
  Updated: Date;
  CreatedBy: number;
  UpdateBy: number;
}
