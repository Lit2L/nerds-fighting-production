/*
  Warnings:

  - You are about to drop the column `freePass` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `UserPass` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "FreePassStatus" AS ENUM ('fulfilled', 'claimed', 'unclaimed');

-- AlterTable
ALTER TABLE "users" DROP COLUMN "freePass",
ADD COLUMN     "passStatus" "FreePassStatus" DEFAULT 'unclaimed';

-- DropTable
DROP TABLE "UserPass";
