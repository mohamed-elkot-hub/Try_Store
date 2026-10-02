export declare class PassowrdHashedService {
    private readonly saltRound;
    hash(password: string): Promise<string>;
    compare(plainPassword: string, hashedPassword: string): Promise<boolean>;
}
