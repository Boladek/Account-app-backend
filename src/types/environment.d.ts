export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      DB_USER: string;
      NODE_ENV: 'test' | 'dev' | 'prod';
      MONGODB_USER: string;
      TEST__MONGO_CONNECTION_STRING: string;
      MONGO_CONNECTION_STRING: string;
      EXPIRES_IN: string;
      JWT_SECRET: string;
    }
  }
}