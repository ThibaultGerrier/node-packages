export declare class HealthService {
    getGitData(): Promise<{
        branch: string;
        commitId: string;
        version: string;
    }>;
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
