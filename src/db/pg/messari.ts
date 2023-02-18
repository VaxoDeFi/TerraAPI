import { prisma } from "../prisma";

export const createMessari = async (data: Messari) => {
  const newMessari = await prisma.messari.create({
    data: {
      id: data.id ? data.id : "",
      symbol: data.symbol ? data.symbol : "",
      rank: data.rank ? data.rank : 0,
      icon: data.icon,
      slug: data.slug ? data.slug : "",
      name: data.name ? data.name : "",
      contract_addresses: data.contract_addresses
        ? data.contract_addresses
        : "",
      priceUsd: data.priceUsd ? data.priceUsd : 0,
      priceBtc: data.priceBtc ? data.priceBtc : 0,
      priceEth: data.priceEth ? data.priceEth : 0,
      percentageChange1HrUsd: data.percentageChange1HrUsd
        ? data.percentageChange1HrUsd
        : 0,
      percentageChange24HrUsd: data.percentageChange24HrUsd
        ? data.percentageChange24HrUsd
        : 0,
      currentMarketcap: data.currentMarketcap ? data.currentMarketcap : 0,
      vol24HrUsd: data.vol24HrUsd ? data.vol24HrUsd : 0,
      realVol24HrUsd: data.realVol24HrUsd ? data.realVol24HrUsd : 0,
      athUsd: data.athUsd ? data.athUsd : 0,
      athTimestamp: data.athTimestamp ? data.athTimestamp : 0,
      percentageDownFromAth: data.percentageDownFromAth
        ? data.percentageDownFromAth
        : 0,
      category: data.category ? data.category : "",
      sector: data.sector ? data.sector : "",
      nextHalvingDate: data.nextHalvingDate ? data.nextHalvingDate : null,
      genesisBlockDate: data.genesisBlockDate ? data.genesisBlockDate : 0,
      tokenType: data.tokenType ? data.tokenType : "",
      tokenUsage: data.tokenUsage ? data.tokenUsage : "",
      consensusAlgorithm: data.consensusAlgorithm
        ? data.consensusAlgorithm
        : "",
    },
  });

  return newMessari;
};

export const deleteMessari = async (id: string) => {
  const res = await prisma.messari.delete({
    where: {
      symbol: id,
    },
  });
  return res;
};

export const upsertMessari = async (data: Messari) => {
  const upsert = await prisma.messari.upsert({
    where: {
      symbol: data.symbol,
    },
    update: {
      rank: data.rank ? data.rank : 0,
      contract_addresses: data.contract_addresses
        ? data.contract_addresses
        : "",
      priceUsd: data.priceUsd ? data.priceUsd : 0,
      priceBtc: data.priceBtc ? data.priceBtc : 0,
      priceEth: data.priceEth ? data.priceEth : 0,
      percentageChange1HrUsd: data.percentageChange1HrUsd
        ? data.percentageChange1HrUsd
        : 0,
      percentageChange24HrUsd: data.percentageChange24HrUsd
        ? data.percentageChange24HrUsd
        : 0,
      currentMarketcap: data.currentMarketcap ? data.currentMarketcap : 0,
      vol24HrUsd: data.vol24HrUsd ? data.vol24HrUsd : 0,
      realVol24HrUsd: data.realVol24HrUsd ? data.realVol24HrUsd : 0,
      athUsd: data.athUsd ? data.athUsd : 0,
      athTimestamp: data.athTimestamp ? data.athTimestamp : 0,
      percentageDownFromAth: data.percentageDownFromAth
        ? data.percentageDownFromAth
        : 0,
    },
    create: {
      id: data.id ? data.id : "",
      symbol: data.symbol,
      rank: data.rank,
      icon: data.icon,
      slug: data.slug ? data.slug : "",
      name: data.name ? data.name : "",
      contract_addresses: data.contract_addresses
        ? data.contract_addresses
        : "",
      priceUsd: data.priceUsd ? data.priceUsd : 0,
      priceBtc: data.priceBtc ? data.priceBtc : 0,
      priceEth: data.priceEth ? data.priceEth : 0,
      percentageChange1HrUsd: data.percentageChange1HrUsd
        ? data.percentageChange1HrUsd
        : 0,
      percentageChange24HrUsd: data.percentageChange24HrUsd
        ? data.percentageChange24HrUsd
        : 0,
      currentMarketcap: data.currentMarketcap ? data.currentMarketcap : 0,
      vol24HrUsd: data.vol24HrUsd ? data.vol24HrUsd : 0,
      realVol24HrUsd: data.realVol24HrUsd ? data.realVol24HrUsd : 0,
      athUsd: data.athUsd ? data.athUsd : 0,
      athTimestamp: data.athTimestamp ? data.athTimestamp : 0,
      percentageDownFromAth: data.percentageDownFromAth
        ? data.percentageDownFromAth
        : 0,
      category: data.category ? data.category : "",
      sector: data.sector ? data.sector : "",
      nextHalvingDate: data.nextHalvingDate ? data.nextHalvingDate : null,
      genesisBlockDate: data.genesisBlockDate ? data.genesisBlockDate : 0,
      tokenType: data.tokenType ? data.tokenType : "",
      tokenUsage: data.tokenUsage ? data.tokenUsage : "",
      consensusAlgorithm: data.consensusAlgorithm
        ? data.consensusAlgorithm
        : "",
    },
  });
  return upsert;
};

export const updateMessari = async (data: Messari) => {
  const update = await prisma.messari.update({
    where: {
      symbol: data.symbol,
    },
    data: {
      rank: data.rank ? data.rank : 0,
      icon: data.icon,
      contract_addresses: data.contract_addresses
        ? data.contract_addresses
        : "",
      priceUsd: data.priceUsd ? data.priceUsd : 0,
      priceBtc: data.priceBtc ? data.priceBtc : 0,
      priceEth: data.priceEth ? data.priceEth : 0,
      percentageChange1HrUsd: data.percentageChange1HrUsd
        ? data.percentageChange1HrUsd
        : 0,
      percentageChange24HrUsd: data.percentageChange24HrUsd
        ? data.percentageChange24HrUsd
        : 0,
      currentMarketcap: data.currentMarketcap ? data.currentMarketcap : 0,
      vol24HrUsd: data.vol24HrUsd ? data.vol24HrUsd : 0,
      realVol24HrUsd: data.realVol24HrUsd ? data.realVol24HrUsd : 0,
      athUsd: data.athUsd ? data.athUsd : 0,
      athTimestamp: data.athTimestamp ? data.athTimestamp : 0,
      percentageDownFromAth: data.percentageDownFromAth
        ? data.percentageDownFromAth
        : 0,
    },
  });
  return update;
};

export const allMessari = async () => {
  const allCoins = await prisma.messari.findMany();
  return allCoins;
};

export const getCountMessari = async () => {
  const allCoins = await prisma.messari.findMany();
  return allCoins.length;
};

export const getMessariByPage = async (rows: number) => {
  const coins = await prisma.messari.findMany({
    take: rows,
    orderBy: {
      rank: "asc",
    },
  });
  return coins;
};

export const findOneMessari = async (symbol: string) => {
  const coin = await prisma.messari.findUnique({
    where: {
      symbol,
    },
  });
  return coin;
};
