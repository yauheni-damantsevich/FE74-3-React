export interface ICard {
  id: number;
  image?: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
}

export interface ICardProps {
  image?: string;
  text: string;
  date: string;
  title: string;
}
