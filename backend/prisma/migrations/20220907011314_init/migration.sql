/*
  Warnings:

  - You are about to drop the column `senha` on the `pessoa` table. All the data in the column will be lost.
  - You are about to drop the column `telephone` on the `pessoa` table. All the data in the column will be lost.
  - Added the required column `password` to the `pessoa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `pessoa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pessoa` DROP COLUMN `senha`,
    DROP COLUMN `telephone`,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL;
