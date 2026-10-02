declare const _default: () => {
    port: number;
    database: {
        url: string | undefined;
    };
    mailer: {
        host: string | undefined;
        port: string | undefined;
        user: string | undefined;
        pass: string | undefined;
    };
    redis: {
        host: string | undefined;
    };
    jwt: {
        accessSecret: string | undefined;
        refreshSecret: string | undefined;
    };
    Kashier: {
        api_key: string | undefined;
        secret_key: string | undefined;
        merchantId: string | undefined;
    };
    cloudinary: {
        cloud_name: string | undefined;
        api_key: string | undefined;
        api_secret: string | undefined;
    };
};
export default _default;
