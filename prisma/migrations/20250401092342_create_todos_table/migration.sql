/*
  Warnings:

  - You are about to drop the column `categoryEnum` on the `Todos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Todos" DROP COLUMN "categoryEnum";

-- DropEnum
DROP TYPE "Category";
