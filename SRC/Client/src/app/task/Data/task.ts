export class Task implements ITaggable {
  tags: Tag[];
  id: number;
  identification: string;
  description: string;
  desiredHours: number;
  expectedBudget: number;
  comments: Comment[];
  active: boolean;
  deadLine: Date;
  category: CategoryEnum;
}

export class Comment {
  id: number;
  text: string;
  created: Date;
  updated: Date;
  createdBy: number;
  updateBy: number;
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
