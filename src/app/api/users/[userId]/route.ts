import { userNameSchema } from '@/lib/validations/user'
import { authOptions } from '@/server/auth'
import { db } from '@/server/db'
import { getServerSession } from 'next-auth/next'
import { z } from 'zod'

const routeContextSchema = z.object({
  params: z.object({
    userId: z.string()
  })
})

export async function PATCH(req: Request, context: z.infer<typeof routeContextSchema>) {
  try {
    const { params } = routeContextSchema.parse(context)

    // Ensure user is authenticated and has acces to this user.
    const session = await getServerSession(authOptions)
    if (!session?.user || params.userId !== session?.user.id) {
      return new Response(null, { status: 403 })
    }

    // Get the request body and validate it.
    const body = await req.json()
    const payload = userNameSchema.parse(body)

    // Update the user
    await db.user.update({
      where: {
        id: session.user.id
      },
      data: {
        name: payload.name
      }
    })

    return new Response(null, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}
