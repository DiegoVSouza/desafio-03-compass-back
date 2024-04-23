import { config } from 'dotenv';

const ENVIRONMENTS = Object.freeze({
  development: ['.env.development', '.env'],
  test: ['.env.test'],
  production: ['.env'],
});

export const setCurrentEnvironment = () => {
  return ENVIRONMENTS[process.env.NODE_ENV];
};

config(setCurrentEnvironment());
export const Env = process.env;
