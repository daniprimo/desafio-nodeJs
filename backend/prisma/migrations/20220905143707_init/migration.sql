/*
  Warnings:

  - Added the required column `user_id` to the `client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `client` ADD COLUMN `user_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `client` ADD CONSTRAINT `client_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `pessoa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
