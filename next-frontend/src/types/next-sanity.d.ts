declare module 'next-sanity' {
    export function createClient(config: {
        projectId: string;
        dataset: string;
        useCdn?: boolean;
        apiVersion: string;
    }): {
        fetch: <T>(query: string) => Promise<T>;
    };
} 