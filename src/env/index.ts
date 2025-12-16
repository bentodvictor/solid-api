import "dotenv/config";
import z from "zod";

// process.env return a object
const envSchema = z.object({
  NODE_ENV: z.enum(["dev", "test", "prod"]).default("dev"),
  PORT: z.coerce.number().default(3333),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  const errorMessage = "❌ Invalid environment variables.";

  console.error(errorMessage, _env.error);
  throw new Error(errorMessage);
}

export const env = _env.data;
