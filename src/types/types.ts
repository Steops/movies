export interface IMovie {
  id: number;
  name: string;
  description: string;
  src: string;
}

export interface IPage {
  cards: IMovie[];
}
