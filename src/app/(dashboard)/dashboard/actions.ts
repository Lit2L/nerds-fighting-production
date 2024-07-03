'use server'

import { db } from '@/server/db'
import { FreePassStatus } from '@prisma/client'

export const changePassStatus = async ({
  id,
  newStatus
}: {
  id: string
  newStatus: FreePassStatus
}) => {
  await db.user.update({
    where: { id },
    data: { passStatus: newStatus }
  })
}
