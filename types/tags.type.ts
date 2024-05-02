export type Technology = {
  name: string;
}

export type Categories = {
  name: string;
  isActive: boolean;
  technologies: Technology[];
  nbre:number;
}

export type UserTagCounts = {
  [tag: string]: number;
}