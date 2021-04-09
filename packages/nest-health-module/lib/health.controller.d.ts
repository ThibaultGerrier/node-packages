import { HealthService } from './health.service';
export declare class HealthController {
    private readonly healthService;
    constructor(healthService: HealthService);
    getLive(): void;
    getReady(): Promise<{
        data: {
            type: string;
            id: string;
            attributes: {
                branch: string;
                commitId: string;
                version: string;
                results: never[];
                status: string;
                timestamp: string;
            };
        }[];
    }>;
}
