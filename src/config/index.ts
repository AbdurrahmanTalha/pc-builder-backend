import "dotenv/config";

export default {
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    env: process.env.NODE_ENV,
};
