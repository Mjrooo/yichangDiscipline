
export interface NewsItem {
  id: string;
  category?: string;
  title: string;
  date: string;
}

export interface BannerItem {
  id: string;
  imageUrl: string;
}

export interface RankItem {
  id: number;
  name: string;
  releaseCount: number;
  visitCount: number;
}
