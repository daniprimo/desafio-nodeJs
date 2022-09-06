/*
  Warnings:

  - You are about to drop the column `userId` on the `client` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `client` DROP FOREIGN KEY `client_userId_fkey`;

-- AlterTable
ALTER TABLE `client` DROP COLUMN `userId`;

-- AddForeignKey
ALTER TABLE `client` ADD CONSTRAINT `client_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `pessoa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
