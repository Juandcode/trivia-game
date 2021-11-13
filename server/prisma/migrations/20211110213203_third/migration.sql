/*
  Warnings:

  - You are about to drop the column `correct` on the `pregunta` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[correctAnswer]` on the table `Pregunta` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `correctAnswer` to the `Pregunta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `points` to the `Pregunta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pregunta` DROP COLUMN `correct`,
    ADD COLUMN `correctAnswer` INTEGER NOT NULL,
    ADD COLUMN `points` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Answer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `text` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Pregunta_correctAnswer_key` ON `Pregunta`(`correctAnswer`);

-- AddForeignKey
ALTER TABLE `Pregunta` ADD CONSTRAINT `Pregunta_correctAnswer_fkey` FOREIGN KEY (`correctAnswer`) REFERENCES `Answer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
