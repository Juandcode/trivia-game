/*
  Warnings:

  - Added the required column `name` to the `Categoria` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `categoria` ADD COLUMN `name` VARCHAR(191) NOT NULL;
