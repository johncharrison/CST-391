interface DBConfig {
  host: string;
  user: string;
  password: string;
  database: string;
  port: number;
  connectionLimit: number;
  insecureAuth: boolean;
}

class MyConfig {
  config: DBConfig = {
    host: process.env.MYSQL_DB_HOST || "",
    user: process.env.DB_USER || "",
    password: process.env.MYSQL_ROOT_PASSWORD || "",
    database: process.env.MY_SQL_DB_DATABASE || "",
    port: parseInt(process.env.MYSQL_PORT || "3306"),
    connectionLimit: parseInt(process.env.MY_SQL_DB_CONNECTION_LIMIT || "10"),
    insecureAuth: true,
  };
}

export { MyConfig };
