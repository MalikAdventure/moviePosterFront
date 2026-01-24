import type { IDirector } from './IDirector';

export interface IMovie {
  id: number;
  original_title: string;
  all_titles: IAllTitle[];
  description: string;
  poster: string | null;
  category: ICategory;
  genres: IGenre[];
  directors: IDirector[];
  countries: ICountry[];
  release_date: string;
  age_limit: number;
  tags: ITag[];
  time_created: string;
  time_updated: string;
  is_published: boolean;
  slug: string;
}

interface IAllTitle {
  id: number;
  name: string;
}

interface ICategory {
  id: number;
  name: string;
}

interface IGenre {
  id: number;
  name: string;
}

interface ICountry {
  id: number;
  name: string;
}

interface ITag {
  id: number;
  tag: string;
}
