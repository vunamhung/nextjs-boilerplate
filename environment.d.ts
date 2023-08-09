export {};
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_URL: string;
      NEXT_PUBLIC_HOTUS_ORG_ID: string;
      NEXT_PUBLIC_WATASHINO_ORG_ID: string;
      JWT_SECRET_KEY: string;
    }
  }
}
