import { PortableText, type SanityDocument } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from '@/sanity/client';
import Link from 'next/link';
import ProjectPage from '@/app-pages/ProjectPage';
import Page from '@/components/Page';
import Banner from '@/components/Banner/Banner';
import React from 'react';

const POST_QUERY = `*[_type == "project" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null;

const options = { next: { revalidate: 30 } };

export async function generateStaticParams() {
  const SLUG_QUERY = `*[_type == "project"]{slug}`;
  const slugs = await client.fetch<SanityDocument>(SLUG_QUERY, {}, options);

  return slugs.map((slug: { slug: any }) => ({
    slug: slug.slug.current
  }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, params, options);
  const postImageUrl = post.image ? urlFor(post.image)?.width(550).height(310).url() : null;

  return (
    <Page
      project={{
        id: post._id,
        title: post.title,
        path: post.slug.current,
        description: post.description,
        about: post.body[0].children[0].text,
        images: [postImageUrl ?? ''],
        tags: []
      }}
    />
  );
}
