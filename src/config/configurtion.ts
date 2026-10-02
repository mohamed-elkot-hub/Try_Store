export default () => ({
  port: parseInt(process.env.PORT as string) || 3000,

  database: {
    url: process.env.DB_URL,
  },
  mailer: {
    host: process.env.MAILER_HOST,
    port: process.env.MAILER_PORT,
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS,
  },
  redis: {
    host: process.env.REDIS_URL,
  },
  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET,
    refreshSecret: process.env.JWT_REFRESH_SECRET,
  },
  Kashier: {
    api_key: process.env.KASHIER_API_KEY,
    secret_key: process.env.KASHIER_SECRET_KEY,
    merchantId: process.env.KASHIER_MERCHANT_ID,
  },
  cloudinary: {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  },
});
