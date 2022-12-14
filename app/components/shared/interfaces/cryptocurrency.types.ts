export type ICryptocurrency = {
  uuid: string;
  symbol: string;
  name: string;
  color: string;
  iconUrl: string;
  marketCap: string;
  price: string;
  listedAt: number;
  tier: number;
  change: string;
  rank: number;
  sparkline: any[];
  lowVolume: boolean;
  coinrankingUrl: string;
  "24hVolume": string;
  btcPrice: string;
  websiteUrl: string;
  links: any[];
  description: string;
  fullyDilutedMarketCap: string;
};

export interface ILinks {
  name: string;
  url: string;
}

export interface ICoinHistory {
  price: string;
  timestamp: number;
}
