export interface IMovie {
  id: number;
  name: string;
  description: string;
  src: string;
  rate: { scenario?: number; operator?: number; artist?: number };
}
