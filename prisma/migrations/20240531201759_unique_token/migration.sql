/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `pix_token` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "pix_token_token_key" ON "pix_token"("token");
