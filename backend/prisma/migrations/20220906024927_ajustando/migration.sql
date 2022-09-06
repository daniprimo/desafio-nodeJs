/*
  Warnings:

  - The primary key for the `client` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `client` table. All the data in the column will be lost.
  - Added the required column `userId` to the `client` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `client` DROP FOREIGN KEY `client_user_id_fkey`;

-- AlterTable
ALTER TABLE `client` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `userId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`user_id`, `role_id`, `scheduling_id`);

-- AddForeignKey
ALTER TABLE `client` ADD CONSTRAINT `client_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `pessoa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
