import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  password: "1234",
  host: "localhost",
  port: "5432",
  database: "products_db",
});
export default pool;
