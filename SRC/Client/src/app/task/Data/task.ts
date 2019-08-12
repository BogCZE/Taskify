export class Task implements ITaggable {
  tags: Tag[];
  Id: number;
  Identification: string;
  Description: string;
  DesiredHours: number;
  ExpectedBudget: number;
  Comments: Comment[];
  Active: boolean;
  DeadLine: Date;
  Category: CategoryEnum;
}

export class Comment {
  Id: number;
  Text: string;
  Created: Date;
  Updated: Date;
  CreatedBy: number;
  UpdateBy: number;
}

export enum CategoryEnum {
  'Angular' = 1,
  'C#' = 2,
  'PHP' = 3
}
export const categories = CategoryEnum;

export interface Tag {
  id: number;
  name: string;
}

export interface ITaggable {
  tags: Tag[];
}
