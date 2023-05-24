export type Project = {
    id?: number;
    title?: string;
    path?: string;
    description?: string;
    about?: string;
    url?: string;
    cta?: string
    images: string[];
    tags: string[];
    isFeatureCard?: boolean;
    award?: string;
}