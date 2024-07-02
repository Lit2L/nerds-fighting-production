/*
  Warnings:

  - You are about to drop the column `free_pass` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "free_pass",
ADD COLUMN     "freePass" BOOLEAN DEFAULT false;
