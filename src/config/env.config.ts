export const EnvConfig = () => ({
  port: process.env.PORT || 3002,
  mongodb: process.env.MONGODB_URI,
  environment: process.env.NODE_ENV || 'dev',
  defaultLimit: process.env.DEFAULT_LIMIT,
});
