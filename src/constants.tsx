export type Project = {
  id?: string | number;
  title?: string;
  path?: string;
  description?: string;
  about?: string;
  url?: string;
  cta?: string;
  images?: string[];
  tags: string[];
  isFeatureCard?: boolean;
  award?: string;
  embedId?: string;
};
