module.exports = {
  development: {
    client: "pg",
    connection: "postgres:///memory3"
  },
  production: {
    client: "postgresql",
    connection: process.env.DATABASE_URL
  }
};
