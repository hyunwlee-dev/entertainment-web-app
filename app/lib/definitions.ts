export type User = {
  id: string;
  email: string;
  password: string;
};

export type FormValues = {
  email: string;
  password: string;
}

type Thumbnail = {
  trending?: {
    small: string;
    large: string;
  };
  regular: {
    small: string;
    medium: string;
    large: string;
  }
}

export type Entertainment = {
  title: string;
  imgSrc: string;
  year: number;
  category: 'Movie' | 'TV Series';
  rating: 'PG' | 'E' | '18+';
  isBookmarked: boolean;
  isTrending: boolean;
}
