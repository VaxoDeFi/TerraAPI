/*
  Warnings:

  - The primary key for the `Coin` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Coin" DROP CONSTRAINT "Coin_pkey";
