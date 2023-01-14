import { prisma } from "../prisma";
export const create = async coin => {
  const newCoin = await prisma.coin.create({
    data: {
      idRank: coin.idRank,
      rank: Number(coin.rank),
      symbol: coin.symbol,
      name: coin.name,
      supply: coin.supply,
      maxSupply: coin.maxSupply,
      marketCapUsd: coin.marketCapUsd,
      volumeUsd24Hr: coin.volumeUsd24Hr,
      priceUsd: coin.priceUsd,
      changePercent24Hr: coin.changePercent24Hr,
      vwap24Hr: coin.vwap24Hr,
      explorer: coin.explorer,
      icon: coin.icon
    }
  });
  return newCoin;
};
export const deleteCoin = async id => {
  const res = await prisma.coin.delete({
    where: {
      symbol: id
    }
  });
  return res;
};
export const deleteCreate = async data => {
  for (var i = 0; i < data.length; i++) {
    const coin = await findCoin(data[i].symbol);
    console.log(coin);

    if (coin) {
      await deleteCoin(data[i].symbol);
    }

    await create(data[i]);
  }
};
export const createOrUpdate = async data => {
  for (var i = 0; i < data.length; i++) {
    const coin = await findCoin(data[i].symbol);

    if (coin) {
      await deleteCoin(data[i].symbol);
    }

    await create(data[i]);
  }
};
export const updateCoin = async coin => {
  const updateUser = await prisma.coin.update({
    where: {
      symbol: coin.symbol
    },
    data: {
      idRank: coin.idRank,
      rank: Number(coin.rank),
      symbol: coin.symbol,
      name: coin.name,
      supply: coin.supply,
      maxSupply: coin.maxSupply,
      marketCapUsd: coin.marketCapUsd,
      volumeUsd24Hr: coin.volumeUsd24Hr,
      priceUsd: coin.priceUsd,
      changePercent24Hr: coin.changePercent24Hr,
      vwap24Hr: coin.vwap24Hr,
      explorer: coin.explorer
    }
  });
  return updateUser;
};
export const allCoins = async () => {
  const allCoins = await prisma.coin.findMany();
  return allCoins;
};
export const getCount = async () => {
  const allCoins = await prisma.coin.findMany();
  return allCoins.length;
};
export const getCoinByPage = async rows => {
  const coins = await prisma.coin.findMany({
    take: rows,
    orderBy: {
      marketCapUsd: "desc"
    }
  });
  return coins;
};
export const findCoin = async symbol => {
  const user = await prisma.coin.findUnique({
    where: {
      symbol
    }
  });
  return user;
};