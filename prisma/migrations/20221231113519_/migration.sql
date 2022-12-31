-- CreateTable
CREATE TABLE "Coin" (
    "id" TEXT NOT NULL,
    "rank" INTEGER NOT NULL,
    "symbol" TEXT NOT NULL,
    "name" TEXT,
    "supply" TEXT NOT NULL,
    "maxSupply" TEXT,
    "marketCapUsd" TEXT NOT NULL,
    "volumeUsd24Hr" TEXT NOT NULL,
    "priceUsd" TEXT NOT NULL,
    "changePercent24Hr" TEXT NOT NULL,
    "vwap24Hr" TEXT NOT NULL,
    "explorer" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "Coin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Coin_symbol_key" ON "Coin"("symbol");
