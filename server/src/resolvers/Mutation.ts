import {PrismaClient} from "@prisma/client";

type Context = {
    prisma: PrismaClient
}
export default {
    addUser: async (_: Object, args: { name: string, points: number, categoriaId: number }, {prisma}: Context) => {
        return await prisma.user.create({
            data: {
                name: args.name,
                totalPoints: args.points,
                categoriaId: args.categoriaId,
            }
        })
    },
}
