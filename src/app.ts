import fastify from "fastify";
import { PrismaClient } from "./generated/prisma/client";

export const app = fastify();

const prisma = new PrismaClient({
  accelerateUrl: process.env.DATABASE_URL!, // Non-null assertion
  omit: {
    user: {
      password: true,
    },
  },
});

async function createUser() {
  const user = await prisma.user.create({
    data: {
      name: "Victor D Bento",
      email: "victor@test.com",
    },
  });
  console.log("User created:", user);
}

createUser();
