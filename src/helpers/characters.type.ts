export type charactersResponse = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  },
  results: {
    id: number,
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
  }[]
}

export type characterType = {
  id: number | string;
  name: string;
  species: string;
  image: string;
}

export type charByPageType = {
  page: number;
  characters: characterType[]
}[]