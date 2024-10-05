declare namespace NodeJS {
  interface ProcessEnv {
    DB_HOST: string;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_TABLE: string;
    PORT: string;
    HOST: string;
  }
}
