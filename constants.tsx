
import { NewsItem, BannerItem, RankItem } from './types';

export const NAV_LINKS = [
  "首页", "廉政视频", "法规在线", "内网资源", "电子数据调查", "下载中心", "应用大厅"
];

export const MOCK_NEWS_LIST: NewsItem[] = Array(8).fill(null).map((_, i) => ({
  id: `news-${i}`,
  category: i % 2 === 0 ? "宣传部" : "第一检察室",
  title: "全球工业研发投入2000强,兴发集团...",
  date: "02-01"
}));

export const MOCK_COUNTY_LIST: NewsItem[] = [
  { id: '1', category: '长阳县', title: '全球工业研发投入2000强,兴发集团', date: '02-01' },
  { id: '2', category: '当阳市', title: '2025年1-12月全市主要经济指标', date: '02-02' },
  { id: '3', category: '远安县', title: '宜昌市部分重点居民生活必需品价格常品价格常品价格', date: '02-01' },
  { id: '4', category: '当阳市', title: '2025年1-12月全市主要经济指标', date: '02-02' },
  { id: '5', category: '西陵区', title: '全球工业研发投入2000强,兴发集团', date: '02-01' },
  { id: '6', category: '夷陵区', title: '2025年1-12月全市主要经济指标', date: '02-02' },
  { id: '7', category: '枝江市', title: '全球工业研发投入2000强,兴发集团', date: '02-01' },
  { id: '8', category: '高新区', title: '2025年1-12月全市主要经济指标', date: '02-02' },
];

export const SPECIAL_TOPICS: BannerItem[] = Array(8).fill(null).map((_, i) => ({
  id: `topic-${i}`,
  imageUrl: `https://picsum.photos/seed/${i+10}/200/80`
}));

export const RANKINGS: RankItem[] = [
  { id: 1, name: "长阳县", score: 8 },
  { id: 2, name: "远安县", score: 6 },
  { id: 3, name: "枝江市", score: 5 },
  { id: 4, name: "伍家岗区", score: 5 },
  { id: 5, name: "点军区", score: 4 },
  { id: 6, name: "长阳县", score: 8 },
  { id: 7, name: "远安县", score: 6 },
  { id: 8, name: "枝江市", score: 5 },
  { id: 9, name: "伍家岗区", score: 5 },
  { id: 10, name: "点军区", score: 4 },
];
