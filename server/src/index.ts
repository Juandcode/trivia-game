import {PrismaClient} from '@prisma/client'
import {ApolloServer} from 'apollo-server-express'
import {makeExecutableSchema} from "@graphql-tools/schema";
import express from 'express'
import path from 'path'
import fs from 'fs'
import resolvers from "./resolvers";

const init = async () => {
    const app = express()
    const prisma = new PrismaClient()
    const schema = makeExecutableSchema({
        typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), 'utf-8'),
        resolvers
    })
    const server = new ApolloServer({
        schema,
        context: ({req}) => {
            return {prisma, ...req}
        }
    })
    await server.start()
    server.applyMiddleware({
        app,
        path: '/'
    })
    app.listen(4000, () => console.log("server on port 4000 on: " + server.graphqlPath))
}
(async () => await init())()
