export interface IDatabaseConfigAttributes {
  username?: string;
  password?: string;
  database?: string;
  host?: string;
  port?: number | string;
  dialect?: string;
  urlDatabase?: string;
  ssl?: boolean;
  dialectOptions?: {
    ssl: {
      require: boolean, // This will help you. But you will see nwe error
      rejectUnauthorized: boolean // This line will fix new error
    }
  },
}

export interface IDatabaseConfig {
  development: IDatabaseConfigAttributes;
  production: IDatabaseConfigAttributes;
}

