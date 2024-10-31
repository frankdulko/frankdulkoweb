const { projectId, dataset } = client.config();
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from './client';

export const urlFor = (source: SanityImageSource) =>
  projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null;
