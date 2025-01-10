declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly DYNAMIC_SDK_ENV_ID: string;
    }
  }
}

export {};
