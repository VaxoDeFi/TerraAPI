/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Messari` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Messari_symbol_key";

-- CreateIndex
CREATE UNIQUE INDEX "Messari_slug_key" ON "Messari"("slug");
