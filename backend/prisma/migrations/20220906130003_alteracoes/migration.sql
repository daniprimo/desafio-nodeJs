/*
  Warnings:

  - You are about to drop the column `professional_id` on the `agendamento` table. All the data in the column will be lost.
  - You are about to drop the column `address_id` on the `pessoa` table. All the data in the column will be lost.
  - You are about to drop the `address_endereco` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `profissional` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tabeladerelacionamento` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `agendamento` DROP FOREIGN KEY `Agendamento_service_id_fkey`;

-- DropForeignKey
ALTER TABLE `agendamento` DROP FOREIGN KEY `Agendamento_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `client` DROP FOREIGN KEY `client_role_id_fkey`;

-- DropForeignKey
ALTER TABLE `client` DROP FOREIGN KEY `client_scheduling_id_fkey`;

-- DropForeignKey
ALTER TABLE `client` DROP FOREIGN KEY `client_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `pessoa` DROP FOREIGN KEY `pessoa_address_id_fkey`;

-- DropForeignKey
ALTER TABLE `tabeladerelacionamento` DROP FOREIGN KEY `TabelaDeRelacionamento_professional_id_fkey`;

-- DropForeignKey
ALTER TABLE `tabeladerelacionamento` DROP FOREIGN KEY `TabelaDeRelacionamento_service_id_fkey`;

-- AlterTable
ALTER TABLE `agendamento` DROP COLUMN `professional_id`;

-- AlterTable
ALTER TABLE `pessoa` DROP COLUMN `address_id`,
    ADD COLUMN `role` INTEGER NULL;

-- DropTable
DROP TABLE `address_endereco`;

-- DropTable
DROP TABLE `client`;

-- DropTable
DROP TABLE `profissional`;

-- DropTable
DROP TABLE `tabeladerelacionamento`;
