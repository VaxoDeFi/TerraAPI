/*
  Warnings:

  - You are about to drop the `Coin` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Coin";

-- CreateTable
CREATE TABLE "CoinAPI" (
    "id" SERIAL NOT NULL,
    "idRank" TEXT NOT NULL,
    "rank" INTEGER NOT NULL,
    "symbol" TEXT NOT NULL,
    "name" TEXT,
    "supply" TEXT NOT NULL,
    "maxSupply" TEXT,
    "marketCapUsd" TEXT NOT NULL,
    "volumeUsd24Hr" TEXT,
    "priceUsd" TEXT,
    "changePercent24Hr" TEXT,
    "vwap24Hr" TEXT,
    "explorer" TEXT,
    "icon" TEXT
);

-- CreateTable
CREATE TABLE "Messari" (
    "id" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "rank" INTEGER NOT NULL,
    "icon" TEXT,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contract_addresses" TEXT,
    "priceUsd" INTEGER,
    "priceBtc" INTEGER,
    "priceEth" INTEGER,
    "percentageChange1HrUsd" INTEGER,
    "percentageChange24HrUsd" INTEGER,
    "currentMarketcap" INTEGER,
    "vol24HrUsd" INTEGER,
    "realVol24HrUsd" INTEGER,
    "athUsd" INTEGER,
    "athTimestamp" INTEGER,
    "percentageDownFromAth" INTEGER,
    "category" TEXT,
    "sector" TEXT,
    "nextHalvingDate" INTEGER,
    "genesisBlockDate" INTEGER,
    "tokenUsage" TEXT,
    "consensusAlgorithm" TEXT,

    CONSTRAINT "Messari_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoinGeckoList" (
    "id" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "platforms" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "CoinAPI_symbol_key" ON "CoinAPI"("symbol");

-- CreateIndex
CREATE UNIQUE INDEX "Messari_symbol_key" ON "Messari"("symbol");

-- CreateIndex
CREATE UNIQUE INDEX "CoinGeckoList_symbol_key" ON "CoinGeckoList"("symbol");
