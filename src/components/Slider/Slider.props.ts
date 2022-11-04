export interface IReview {
  id: number;
  author: string;
  jobPosition: string;
  text: string;
  image: string;
}

export interface SliderProps {
  reviews: IReview[];
}
