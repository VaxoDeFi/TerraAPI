/*
  Warnings:

  - The primary key for the `Coin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Coin` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `idRank` to the `Coin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coin" DROP CONSTRAINT "Coin_pkey",
ADD COLUMN     "idRank" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Coin_pkey" PRIMARY KEY ("idRank");
