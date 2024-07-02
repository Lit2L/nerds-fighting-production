/*
  Warnings:

  - You are about to drop the `Pass` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pass" DROP CONSTRAINT "Pass_userId_fkey";

-- DropTable
DROP TABLE "Pass";

-- CreateTable
CREATE TABLE "UserPass" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "UserPass_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserPass_fullName_key" ON "UserPass"("fullName");

-- CreateIndex
CREATE UNIQUE INDEX "UserPass_email_key" ON "UserPass"("email");
