import {PrismaClient} from "@prisma/client";

const GenerateClient =()=>{
    return new PrismaClient();
}

declare global {
    var prisma: undefined | ReturnType<typeof GenerateClient>
}

const prisma = globalThis.prisma?? GenerateClient();

if(process.env.NODE_ENV !=="production"){
globalThis.prisma = prisma;
}



