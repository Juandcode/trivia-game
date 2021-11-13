import {PrismaClient} from "@prisma/client";

type Context = {
    prisma: PrismaClient
}
type Args = {
    id: number
}
export default {
    getCategories: async (_: Object, args: any, {prisma}: Context) => {
        return await prisma.categoria.findMany()
    },
    getQuestions: async (_: Object, {id}: Args, {prisma}: Context) => {
        return await prisma.pregunta.findMany({
            where: {
                categoriaId: id
            },
            include: {
                answer: true
            }
        })
    },
    getAnswers: async (_: Object, {id}: Args, {prisma}: Context) => {
        return await prisma.answer.findMany({
            where: {
                preguntaId: id
            },
        })
    },
    getUsersPointsByCategory: async (_: Object, {id}: Args, {prisma}: Context) => {
        return await prisma.user.findMany({
            orderBy: [
                {
                    totalPoints: 'desc'
                }
            ],
            where: {
                categoriaId: id
            }
        })
    }
}
