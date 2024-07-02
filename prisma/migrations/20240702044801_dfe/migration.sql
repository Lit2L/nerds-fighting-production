-- CreateTable
CREATE TABLE "Pass" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,

    CONSTRAINT "Pass_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pass" ADD CONSTRAINT "Pass_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
