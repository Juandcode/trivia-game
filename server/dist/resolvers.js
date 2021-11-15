"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Query_1 = __importDefault(require("./resolvers/Query"));
var Mutation_1 = __importDefault(require("./resolvers/Mutation"));
exports.default = {
    Query: Query_1.default,
    Mutation: Mutation_1.default,
};
//# sourceMappingURL=resolvers.js.map