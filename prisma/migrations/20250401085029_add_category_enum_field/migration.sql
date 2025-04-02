-- CreateEnum
CREATE TYPE "Category" AS ENUM ('DSA', 'Projects', 'Learning');

-- AlterTable
ALTER TABLE "Todos" ADD COLUMN     "categoryEnum" "Category";
