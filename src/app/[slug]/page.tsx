import { PortableText, type SanityDocument } from 'next-sanity';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from '@/sanity/client';
import Link from 'next/link';
import ProjectPage from '@/app-pages/ProjectPage';
import Page from '@/components/Page';
import Banner from '@/components/Banner/Banner';
import React from 'react';
import { Project } from '@/sanity/sanity.types';

const POST_QUERY = `*[_type == "project" && slug.current == $slug][0]`;

const options = { next: { revalidate: 30 } };

export async function generateStaticParams() {
  const SLUG_QUERY = `*[_type == "project"]{slug}`;
  const slugs = await client.fetch<SanityDocument>(SLUG_QUERY);

  return slugs.map((slug: { slug: any }) => ({
    slug: slug.slug.current
  }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await client.fetch<Project>(POST_QUERY, params, options);

  return <Page project={post} />;
}
