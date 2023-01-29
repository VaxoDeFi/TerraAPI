interface CoinDB {
  id: number;
  idRank: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply?: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
  icon: string;
}

interface CoinAPIDB {
  idRank: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply?: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
  icon: string;
}

interface Messari {
  id: string;
  symbol: string;
  rank: number;
  icon: string | null;
  slug: string;
  name: string;
  contract_addresses: string | null;
  priceUsd: number | null;
  priceBtc: number | null;
  priceEth: number | null;
  percentageChange1HrUsd: number | null;
  percentageChange24HrUsd: number | null;
  currentMarketcap: number | null;
  vol24HrUsd: number | null;
  realVol24HrUsd: number | null;
  athUsd: number | null;
  athTimestamp: number | null;
  percentageDownFromAth: number | null;
  category: string | null;
  sector: string | null;
  nextHalvingDate: number | null;
  genesisBlockDate: number | null;
  tokenUsage: string | null;
  tokenType: string | null;
  consensusAlgorithm: string | null;
}
